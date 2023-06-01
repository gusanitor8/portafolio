import React from "react";
import NavBar from "../components/NavBar";
import ImageDisplay from "../components/ImageDisplay";
import TextContainer from "../components/TextContainer";
import MyCard from '../components/MyCard';

import './About.scss';


const About = () =>{
    return(
        <>
            <NavBar/>            
            <ImageDisplay/>
            <div className="about-content">
                <TextContainer/>
                <div className="mycard-container-container">
                    <MyCard/>
                </div>
            </div>
        </>
        );
}

export default About;