import React from "react";
import './MyCard.scss';
import myPhoto from '../resources/myPhoto.jpg'

const MyCard = () =>{
    return(
        <>
            <div className="mycard-container">
                <div className="mycard-figure">
                    <img className="mycard-image" src={myPhoto} ></img>                    
                </div>
                <div className="mycard-caption-container">
                    <h1 className="mycard-caption">Hi! It's Me</h1>
                </div>
            </div>
        </>
    );
}

export default MyCard;