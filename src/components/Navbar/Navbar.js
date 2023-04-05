import React from 'react'
import logo from '../../assets/rick-icon.svg'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';

const BrandExample = ({brand}) => {
  return (
    <>

      <nav>
        <div className="logo">
        <Link to="/Home">
        <img alt="logo" src={logo} width="45" height="45" className="d-inline-block align-left " />
        </Link>
        </div>
        <ul className="menu  " >
          <li><Link to="/Personaje">Personajes</Link></li>
          <li><Link to="/Capitulo">Capitulo</Link></li>
          <li><Link to="/Generador">Generador</Link></li>
        </ul>
        </nav>
    </>
  )
}

export default BrandExample