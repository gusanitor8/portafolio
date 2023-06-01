import React from 'react';
import './ImageDisplay.scss';

const ImageDisplay = ({background}) => {
    return(
        <>
            
            <div className='display-container'>
                <img 
                    className='display-image'
                    src = {background}
                    ></img>
            </div>
        </>
        )
}

export default ImageDisplay