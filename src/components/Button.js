import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import React from 'react'
import './Button.scss';


const Button = ({buttonText,route,color,hoverColor}) => {
    const [isHover, setIsHover] = useState(false);
    const [buttonContainerStyles, setButtonContainerStyles] = useState({});
    const [buttonTittleStyles, setButtonTittleStyles] = useState({})

    const styleHover = {backgroundColor: hoverColor, margin: '0'}
    const style = {backgroundColor: color, margin: '10px'}
    const textStyleHover = {fontSize: '3.5em'}
    const textStyle = {fontSize: '3em'}
    

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }


    useEffect(()=>{
        if(isHover){
            setButtonContainerStyles(styleHover)
            setButtonTittleStyles(textStyleHover)
        }else{
            setButtonContainerStyles(style)
            setButtonTittleStyles(textStyle)
        }

    },[isHover])

    return(
    <>  <div className="button-super-container" >
            <Link to={route}>
                <div 
                    className="button-container"
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={buttonContainerStyles}
                >
                    
                    <h1 
                        className="button-tittle"
                        style={buttonTittleStyles}
                        >{buttonText}</h1>
                    
                </div>
            </Link>
        </div>
        </>
        );
}

export default Button;