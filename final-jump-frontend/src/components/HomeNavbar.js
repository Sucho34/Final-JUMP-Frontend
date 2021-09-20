import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';

export default class HomeNavbar extends Component {
    render() {
        return (
            <div className="navbarStyle">
                <Navbar className="navbar navbar-dark bg-dark" variant="light" expand="lg">
                 <Container>
                    <Navbar.Brand className="titleStyle" href="/home">Javadoc Juvenile Reviews</Navbar.Brand>
                        <Nav className="navStyle">
                            {/* <Nav.Link className="navlinkStyle" href="/home">Home</Nav.Link> */}
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                 </Container>
                </Navbar>
            </div>
        )
    }
}