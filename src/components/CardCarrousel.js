import React from 'react';
import Card from './Card';
import './CardCarrousel.scss';
import noFace from '../resources/nofaceS.png';
import calculadora from '../resources/calculatorS.png';
import weather from '../resources/weatherS.png';
import adidas from '../resources/adidas.png';

const CardCarrousel = () =>{
    return (
        <>
            <div className='carrousel-container'>
                <Card 
                    tittle={'Calculadora'} 
                    description = {'Una bonita y muy útil calculadora hecha en React'}
                    imageSrc={calculadora}
                    link={'https://stw-calculator.web.app/'}/>

                <Card 
                    tittle={'CSS Only'} 
                    description = {'Un personaje de una de mis películas favoritas hecho solamente utilizando CSS'}
                    imageSrc={noFace}
                    link={'https://stw-css-only.web.app/'}/>  

                <Card
                    tittle={'Weather App'}
                    description={'Una aplicacion de clima conectada a weatherbit API'}
                    imageSrc={weather}
                    link = {'https://proyecto2-stw-377bf.web.app/'}/>
                
                <Card
                    tittle={'Adidas Web Page'}
                    description={'Una replica de la página de Adidas'}
                    imageSrc={adidas}
                    link={'https://proyecto1-stw.web.app/'}/>

            </div>
        </>
        );
}

export default CardCarrousel