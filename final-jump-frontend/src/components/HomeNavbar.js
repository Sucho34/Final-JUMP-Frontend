import React, { Component, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import UserModal from "./UserModal";
import "../CSS/HomeNavbar.css";

const HomeNavbar= () => {
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);


        return (
            <div>
                <Navbar className="navbar navbar-dark bg-dark" variant="light" expand="lg">
                 <Container>
                    <Navbar.Brand className="titleStyle" href="/">Javadoc Juvenile Reviews</Navbar.Brand>
                        <Nav className="navStyle">
                            {/* <Nav.Link className="navlinkStyle" href="/home">Home</Nav.Link> */}
                            <Button className="button-color"onClick={() => setShow(true) } >Create Account</Button>
                            <UserModal show={show} close ={closeModalHandler}/>
                        </Nav>
                 </Container>
                </Navbar>
            </div>
        )
    
}

export default HomeNavbar 