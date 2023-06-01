import React from "react";
import { useEffect, useState } from "react";
import './Decoration.scss';


const Decoration = ({bgHoverColor,bgcolor, index}) =>{
    const [isHover, setIsHover] = useState(false)
    const [styling, setStyling] = useState({})
    const [classN, setClassN] = useState({})

    const styleNames = ['decoration-container-one','decoration-container-two','decoration-container-three']

    useEffect(()=>{
        if(index !== undefined && index !== null){            
            setClassN(styleNames[index])
        }
    },[])

    useEffect(()=>{
        isHover
            ? setStyling({backgroundColor: bgHoverColor})
            : setStyling({backgroundColor: bgcolor})

    },[isHover])
    

    const handleMouseEnter = () =>{
        setIsHover(true)
    }
    const handleMouseLeave = () =>{
        setIsHover(false)
    }

    return(
        <>
            <div 
                className="decoration-super-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <div className={classN} style = {styling}></div>
            </div>
        </>
        )
}

export default Decoration