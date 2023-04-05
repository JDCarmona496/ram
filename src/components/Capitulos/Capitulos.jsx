import React from 'react';
import '../Personajes/Personajes.css'
import Hook from '../../Hook/HookCapitulos';
import Card from 'react-bootstrap/Card';
import draw from '../../assets/draw.png'
import { CardImg } from 'react-bootstrap';

const  BasicExample = (props) => {
const { datos, pagina, cambiarPagina } = Hook('https://rickandmortyapi.com/api/episode');

  return (

    <>
    
    <div>
    <h3>Lista de Capitulos</h3>
    </div>

    <div className='Main'>
    <div className='paginacion'>
        <button onClick={() => cambiarPagina('atras')}><h3>Atrás</h3></button>
        <h1 className='PageName'>Pagina {pagina}</h1>
        <button onClick={() => cambiarPagina('siguiente')}><h3>Siguiente</h3></button>
      </div>
      <div className='personajes '>
        {datos.map(capitulos => (
            <Card>
          <div className='infoCard' key={capitulos.id}>
          <CardImg src={draw} alt='' />
            <div className='informacion'>
              <h2>{capitulos.name}</h2>
              <p>Emision: {capitulos.air_date}</p>
              <p>Episodio: {capitulos.episode}</p>
            </div>
          </div>
          </Card>
        ))}
      </div>
      <div className='paginacion'>
        <button onClick={() => cambiarPagina('atras')}><h3>Atrás</h3></button>
        <h1 className='PageName'>Pagina {pagina}</h1>
        <button onClick={() => cambiarPagina('siguiente')}><h3>Siguiente</h3></button>
      </div>
    </div>
    </>
  );
};

export default BasicExample;