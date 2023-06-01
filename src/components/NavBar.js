import React from "react";
import { useState, useEffect } from "react";
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [style1, setStyle1] = useState({})
    const [style2, setStyle2] = useState({})
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    const noHover = {marginTop: '20px', marginBottom: '20px'}
    const hover = {marginTop: '10px', marginBottom: '30px'}


    const handleMouseEnter1 = () =>{
        setIsHover1(true)
    }

    const handleMouseLeave1 = () =>{
        setIsHover1(false)
    }

    const handleMouseEnter2 = () =>{
        setIsHover2(true)
    }

    const handleMouseLeave2 = () =>{
        setIsHover2(false)
    }

    useEffect(()=>{
        isHover1
            ? setStyle1(hover)
            : setStyle1(noHover);

    },[isHover1])

    useEffect(()=>{
        isHover2
            ? setStyle2(hover)
            : setStyle2(noHover);

    },[isHover2])

    return(
        <>
            <nav className="navbar-nav">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <Link to = '/'>
                            <h2 className="navbar-gus">Gus!</h2>
                        </Link>
                    </div>

                    <div className="navbar-right">
                        <div className="navbar-item-container">
                            <Link 
                                to = '/about'
                                onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                            >
                                <h2 
                                    className="navbar-about"
                                    style={style1}
                                    
                                >about</h2>
                            </Link>
                            <Link
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}
                            >
                                <h2 
                                    className="navbar-projects"
                                    style={style2}
                                >projects</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
        );
}

export default NavBar