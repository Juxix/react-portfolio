import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../css/Home.css';

const Home = () => {

    const Alumno = {
        nombre: "Luciano",
        apellido: "Gonzalez",
        carrera: "Programacion",
        edad: 21,
        hobby: "videojuegos",
        tel: "3813477363",
        email: "lucianogonza01@gmail.com",
        conocimientos: ["C#","JavaScript","React","MySQL","SQL Server"]
    }

  return (
    <div>
      <Header alumno={Alumno}/>
      <Main alumno={Alumno}/>
      <Footer/>
    </div>
  )
}

export default Home
