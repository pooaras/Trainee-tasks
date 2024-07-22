import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import classes from './sidebar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Sidebar = () => {
    const [showsidebar, SetBar] = useState(false);
  return (
      <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">New App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
                <NavLink className="nav-link text-decoration-none active" to="/home">Home </NavLink>
                <NavLink className="nav-link text-decoration-none" to="/product">Product </NavLink>
                <NavLink className="nav-link text-decoration-none " to="/todo">Todo List</NavLink>
                <NavLink className="nav-link text-decoration-none " to="/tictactoe">Tic tac toe</NavLink>
                <NavLink className="nav-link text-decoration-none " to="/mui">Mui components</NavLink>
                <NavLink className="nav-link text-decoration-none " to="/chat">Chat GPT</NavLink>
                <NavLink className="nav-link text-decoration-none " to="/taskmanager">Task manager</NavLink>
              <NavLink className="nav-link text-decoration-none" to="/about">About</NavLink>
                <NavLink className="nav-link text-decoration-none" to="/contact">Contact</NavLink>
              </Nav>
              <Nav className="ms-auto">
                <NavLink className="nav-link text-decoration-none " to="/signup">Sign up</NavLink>
                <NavLink className="nav-link text-decoration-none " to="/login">Login</NavLink>
              </Nav>
                
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
         
          
          {/* <nav className='vw-100 vh-10 navbar navbar-expand-lg navbar-dark bg-dark text-light flex flext-row'>
             
              <button className='navbar-toggler'>       
              <span className='navbar-toggler-icon'></span>
              </button>
          </nav> */}
    </>
  )
}

export default Sidebar
