import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../ressources/Logo.svg';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
      <Navbar className='border-bottom'>
        <Container className='py-2 d-flex justify-content-between'>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className='d-flex gap-2'>
            <Nav.Link 
              className={`nav-link py-2 px-4 rounded ${activeLink === 'home' ? 'gray-bg' : ''}`} 
              href="#searchPage" 
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              className={`nav-link py-2 px-4 rounded ${activeLink === 'collections' ? 'gray-bg' : ''}`} 
              href="#collections" 
              onClick={() => handleLinkClick('collections')}
            >
              Collections
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;
