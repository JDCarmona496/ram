import React from 'react';
import '../Personajes/Personajes.css'
import Hook from '../../Hook/Hook';
import Card from 'react-bootstrap/Card';

const  BasicExample = (props) => {
const { datos, pagina, cambiarPagina } = Hook('https://rickandmortyapi.com/api/character');

  return (
    
    <div className='Main'>
      <div className='personajes'>
        {datos.map(personaje => (
            <Card>
          <div className='infoCard' key={personaje.id}>
            <img src={personaje.image} alt='' />
            <div className='informacion'>
              <h2>{personaje.name}</h2>
              <p>Estado: {personaje.status}</p>
              <p>Especie: {personaje.species}</p>
              <p>Género: {personaje.gender}</p>
              <p>Episodios: {personaje.episode.length}</p>
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
  );
};

export default BasicExample;