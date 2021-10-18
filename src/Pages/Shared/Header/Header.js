import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo-2.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="justify-content-start" height="50px" width="300px" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Our Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/login">
                            <Button variant=" btn-sign rounded-pill px-4 mx-3 text-white"><i class="fas fa-sign-in-alt text-white"></i> Sign In</Button>
                        </Nav.Link>



                        <Button variant="danger rounded-pill px-4"><i class="fas fa-sign-in-alt"></i> Sign up</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;