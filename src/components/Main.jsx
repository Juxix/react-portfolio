import React from 'react';
import '../css/Main.css'

const Main = (props) => {


    return (
        <main>
            <div className="main-container" >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Bienvenidos, soy {props.alumno.nombre + " " + props.alumno.apellido}</li>
                    <li className="list-group-item">Estudiante de {props.alumno.carrera} de la Facultad Regional de Tucumán</li>
                    <li className="list-group-item">He aprendido lenguajes, bases de datos y frameworks como :</li>
                    <li className="list-group-item">-> {props.alumno.conocimientos[0]}</li>
                    <li className="list-group-item">-> {props.alumno.conocimientos[1]}</li>
                    <li className="list-group-item">-> {props.alumno.conocimientos[3]}</li>
                    <li className="list-group-item">-> {props.alumno.conocimientos[4]}</li>
                    <li className="list-group-item">-> {props.alumno.conocimientos[2]}</li>
                    <li className="list-group-item">Siempre busco mejorar mis habilidades y conocimeintos</li>
                </ul>
            </div>
        </main>
    );
}

export default Main;
