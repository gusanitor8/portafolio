import React from "react";
import './TextContainer.scss';

const TextContainer = () => {
    return(
        <>
            <div className="super-text-container">
                <div className="text-container">
                    <div className="main-tittle-container">
                        <h2 className="main-tittle">Who am I?</h2>
                    </div>
                    <div className="main-text-container">
                        <p className="main-text">¡Bienvenido a mi portafolio! Soy un estudiante de tercer año de Ciencias de la Computación en la prestigiosa Universidad del Valle de Guatemala. Desde que me sumergí en este emocionante campo, he descubierto una pasión innegable por el mundo de la tecnología y el desarrollo de software. Mi enfoque principal se centra en el dominio de diversos lenguajes de programación, incluyendo Java, Python y React, así como en el manejo de bases de datos con SQL.</p>

                        <p className="main-text">Actualmente, me encuentro emocionado por estar en la recta final del curso de Sistemas y Tecnologías Web. Durante este curso, he adquirido valiosos conocimientos y habilidades que me han permitido sumergirme en el desarrollo de aplicaciones web modernas y la creación de interfaces interactivas. Desde el diseño de interfaces de usuario atractivas hasta la implementación de funcionalidades dinámicas, he aprendido a utilizar herramientas y tecnologías relevantes en el mundo web, como HTML, CSS, JavaScript y frameworks como React. Estoy emocionado por demostrar cómo he aplicado estos conocimientos en proyectos prácticos y cómo puedo aportar al desarrollo web.</p>

                        <p className="main-text">Además de mis estudios y experiencia en programación, también tengo intereses fuera del ámbito informático. Una de mis aficiones favoritas es coleccionar vinilos, ya que aprecio la calidez y autenticidad del sonido analógico. Me encanta explorar diferentes géneros musicales y descubrir joyas escondidas en las tiendas de discos locales. Esta pasión por la música también se refleja en mi trabajo, ya que creo que la creatividad y la innovación están intrínsecamente ligadas. Además, me encanta tomar fotografías y capturar momentos especiales. A través de la fotografía, puedo expresar mi creatividad y contar historias visuales. Me gusta experimentar con diferentes técnicas y perspectivas, y siempre estoy buscando nuevas formas de fusionar mi pasión por la tecnología con mis intereses artísticos.</p>
                    </div>
                </div>
            </div>
        </>
        );
}

export default TextContainer
