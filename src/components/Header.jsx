import React from 'react';
import '../css/Header.css';
import Yo from '../assets/Yo.jpg'


const Header = (props) => {
    
    return (
        <header>
            <div className="header-container">
                <img src={Yo} alt="Foto de Luciano Gonzalez" className="profile-pic"/>
                <h1>{props.alumno.nombre} {props.alumno.apellido}</h1>
            </div>
        </header>
    );
}

export default Header;

