import React from 'react';
import './Icon.scss';

const Icon = ({imageSource,link}) =>{

    return(
        <>
            <a className='icon-link' href={link}>
                <div className='icon-container'>
                    <img className='icon' src = {imageSource}></img>
                </div>
            </a>
        </>
    );
}

export default Icon