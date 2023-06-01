import React from "react";
import { useState, useEffect } from "react";
import "./Card.scss";


const Card = ({tittle, description, imageSrc, link}) => {
       
    
    return(        
        <>
        
        <div className="card-super-container">
            <div className="card-image-container">
                <img className="card-image" src={imageSrc}></img>
            </div>
            <div className="card-info-container">
                <div className="card-tittle-container">
                    <h1 className="card-tittle">{tittle}</h1>                    
                </div>
                <div className="card-description-container">
                    <p className="card-paragraph">{description}</p>                    
                </div>
                <div className="card-button-container">
                    <a className="card-link" href={link}>
                        <div className="card-button">Visitame</div>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;