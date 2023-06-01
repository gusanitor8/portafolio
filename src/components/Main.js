import React from "react";
import './Main.scss';

import Button from './Button';
import Decoration from "./Decoration";

const Main = () => {
   
      

    return(
        <>
            <div className="main-grid-container">
                <div className="main-grid-item-first">
                    <Button 
                        buttonText = {'Conóceme!'} 
                        color = {'#FF7F11'}
                        hoverColor={'#262626'}
                        route = {'/about'}
                    />
                </div>
                <div className="main-grid-item-second">
                    <Decoration 
                        bgHoverColor={'#262626'}
                        index={0}/>
                </div>
                <div className="main-grid-item-third">
                    <Decoration 
                        bgHoverColor={'#262626'}
                        index={2}/>
                </div>
                <div className="main-grid-item-fourth">
                    <Decoration 
                        bgHoverColor={'#262626'}                        
                        index={2}/>
                </div>
                <div className="main-grid-item-fifth">
                    <Button 
                        buttonText = {'Proyectos'} 
                        color = {'#FF7F11'}
                        hoverColor={'#262626'}
                        route={'./projects'}
                    />
                </div>
                <div className="main-grid-item-sixth">
                    <Decoration 
                        bgHoverColor={'#262626'}                        
                        index={1}/>
                </div>
                <div className="main-grid-item-seventh">
                    <Decoration 
                        bgHoverColor={'#262626'}                        
                        index={0}/>
                </div>
                <div className="main-grid-item-eighth">
                    <Decoration 
                        bgHoverColor={'#262626'}
                        bgColor = {'red'}
                        index={1}/>
                </div>
                <div className="main-grid-item-ninth">
                    <Button 
                        buttonText = {'Contacto'} 
                        color = {'#FF7F11'}
                        hoverColor={'#262626'}
                        route={'https://www.linkedin.com/in/gustavo-gonzález-89469a279/'}                        
                    />
                </div>
            </div>
        </>
        );
};

export default Main;