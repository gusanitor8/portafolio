import React from 'react';
import background from '../resources/background.jpg';
import './ImageDisplay.scss';

const ImageDisplay = () => {
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