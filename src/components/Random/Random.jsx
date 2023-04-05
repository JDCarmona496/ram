import React from 'react';
import '../Personajes/Personajes.css'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { CardImg, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const  Ramdon = () => {

  const [personaje, setPersonaje] = useState("");

  let getPersonaje = () => {
    let randomNumb = Math.floor(Math.random() * 20);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonaje(data.results[randomNumb]));
  };

  return (

    <>

        <Container>
      <div className='Main'>
        <h3>Generador de Personajes Aleatorios</h3>
      </div>
      <div className='personajes '>
      <Card  >
        <div className='infoCard' key={personaje.id} >
        {personaje.status ? (
          <div className='informacion' >
            <CardImg src={personaje.image} alt='' />
            <h1 >{personaje.name}</h1>
            <p>Estado: {personaje.status}</p>
            <p>Especie: {personaje.species}</p>
            <p>Genero: {personaje.gender}</p>
          </div>
        ) : (
          <h1>
            ¡Presiona el boton para obtener un personaje!
          </h1>
        )}
      <div>
      <Button onClick={getPersonaje} variant="secondary">Random</Button>
      </div>
      </div>
      </Card>
      </div>
        </Container>
    </>
  );
};

export default Ramdon;