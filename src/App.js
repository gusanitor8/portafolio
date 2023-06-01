import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects"

const App = () => {
    return(
        <BrowserRouter>            
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/about" element = {<About/>}/>
                <Route path="/projects" element ={<Projects/>}/>
            </Routes>

            
        </BrowserRouter>
        );
};

export default App;