import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import './Navbar.css'

const BrandExample = () => {
  return (
    <>
    {/* hola */}
    <Navbar bg="dark" variant="dark">
        <Container>
          <div className='img'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="120"
              height="40"
              className="d-inline-block align-left "
            />{' '}
          </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default BrandExample