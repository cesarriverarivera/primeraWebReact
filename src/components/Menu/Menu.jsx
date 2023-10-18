import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom' //para poder linkear las rutas en el main
import './Menu.css'


export default function Menu() {
    return (
        <>
            <Navbar className='navbar nabvarstk' bg="dark" data-bs-theme="dark">
                <Container className='d-flex gap-3'>
                    <Navbar.Brand href="#home">App Celulares</Navbar.Brand>
                    <Nav className="me-auto d-flex gap-3">
                        <NavLink className="link-nav" to="/home">Inicio</NavLink> 
                        <NavLink className="link-nav" to="/celulares">Celulares</NavLink> 
                        <NavLink className="link-nav" to="/about">Acerca de</NavLink>
                    </Nav>
                    <div>
                        <input type="text" placeholder='buscar celular' />
                    </div>
                </Container>
            </Navbar>

        </>
    )

}