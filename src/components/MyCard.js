import React from "react";
import './MyCard.scss';
import myPhoto from '../resources/myPhoto.jpg'
import Icon from './Icon';
import github from '../resources/github.svg';
import linkedIn from '../resources/linkedin.svg';

const MyCard = () =>{
    return(
        <>
            <div className="mycard-container">
                <div className="mycard-figure">
                    <img className="mycard-image" src={myPhoto} ></img>                    
                </div>
                <div className="mycard-caption-container">
                    <h1 className="mycard-caption">Gustao González</h1>
                    <h3 className="mycard-emailinfo">gon21438@uvg.edu.gt</h3>
                    <div className="mycard-icon-bar">
                        <Icon imageSource={github} link={'https://github.com/gusanitor8'}/>
                        <Icon imageSource={linkedIn}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyCard;