import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../Image/logo2.png"
import Banner from '../Banner/Banner';
import "./Header.css"

const Header = () => {
    return (
        <>
            <Navbar className="nav-container " collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Link className="links" to="/cart">Cart</Link>
                            <Link className="links" to="/login">Login</Link>
                            <Link className="links" to="/signUp">Sign up</Link>
                            
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner></Banner>

        </>

    );
};

export default Header;
