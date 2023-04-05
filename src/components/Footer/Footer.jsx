import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../../assets/logo.svg'
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' to='github' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
          
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