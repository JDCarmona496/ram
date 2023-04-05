import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import logo from '../../assets/logo.png'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" ><MDBIcon fab icon='instagram' /></Button>
      <Button variant="secondary"><MDBIcon fab icon='linkedin-in' /></Button>
      <Button variant="secondary"><MDBIcon fab icon='github' /></Button>
    </ButtonGroup>
        </section>
        <Container>  
        <img src={logo} alt="Rick and Morty" width="280" height="60"  />
        </Container>
        <br></br>
      </MDBContainer>
     
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright   
        <a className='text-white' href='https://rickandmortyapi.com/'><p>API Rick and Morty</p></a>
      </div>
      
    </MDBFooter>
  );
}