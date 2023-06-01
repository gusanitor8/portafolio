import React from "react";
import CardCarrousel from "../components/CardCarrousel";
import NavBar from "../components/NavBar";
import ImageDisplay from "../components/ImageDisplay";
import background from "../resources/nicebg.jpg"
import './Projects.scss';

const Projects = () =>{
    return(
        <>
            <NavBar/>
            <ImageDisplay background={background}/>

            <div className="legend-super-container">
                <div className="legend-container">
                    <h2 className="legend-text">
                        Bienvenido/a a mi página de proyectos web. Aquí encontrarás una recopilación de los proyectos web que he desarrollado a lo largo de mi trayectoria. 
                    </h2>
                </div>
            </div>
            <CardCarrousel/>
        </>
    );
}

export default Projects