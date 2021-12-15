import React from 'react';
import './card.css';

function Card(props) {

   return( 
   <div key={props.user_id}>
        <div className="card">
            <div className="image">                
                <img src={props.webformatURL} alt={props.tags}/>    
            </div>
            <div className="cardDetails">
                <div className="userImage">
                    <img src={props.userImageURL} alt="user" />
                </div>
                <div className="userDetails">
                    <div>Photographer: {props.user}<br /></div>
                    <div>Likes: {props.likes}<br /></div>
                    <div>downloads: {props.downloads}</div>
                </div>
                <div className="download">
                    <div className="halfSize">
                        <a href={props.webformatURL} target="_blank" rel="noopener noreferrer">Half Size</a>
                    </div>
                    <div className="fullSize">                 
                        <a href={props.largeImageURL} target="_blank" rel="noopener noreferrer">Full Size</a>
                    </div>                    
                </div>
            </div>
        </div>
    </div>);

}

export default Card;