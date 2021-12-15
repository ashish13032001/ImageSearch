import React, {useEffect, useState} from 'react';
import Card from './picturecard/card';
import './input.css';
import './cardcontainer.css';

const KEY = '17132682-e8d5303108e585d86da13c2a3';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('peace');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${KEY}&q=${query}&image_type=photo&pretty=true&min_width=640`).then(responce => responce.json()).then(data => {setData(data.hits)
        console.log(data);});
    }, [query]);

    const input = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return(
        <div className='container'>
            <div className="input">
                <div>
                    <br />
                    <h1>“There is one thing the photograph must contain,<br />the humanity of the moment.”<br /><b>— Robert Frank</b> <span role="img" aria-label="yummy">📷</span></h1>
                    <form onSubmit={getSearch}>
                        <input type="text" value={search} onChange={input} />
                        <button disabled={!search.length}>Search</button>
                    </form>
                </div>
            </div>
            <div className="cardContainer">
                {data.map(e => (<Card 
                                    key={e.webformatURL}
                                    webformatURL={e.webformatURL}
                                    tags={e.tags}
                                    userImageURL={e.userImageURL}
                                    user={e.user}
                                    likes={e.likes}
                                    downloads={e.downloads}
                                    largeImageURL={e.largeImageURL} />))
                }
            </div>
        </div>
    )

}

export default Gallery;