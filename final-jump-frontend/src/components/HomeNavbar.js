import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import LoginModal from "./LoginModal"
export default class HomeNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar navbar-dark bg-dark" variant="light" expand="lg">
                 <Container>
                    <Navbar.Brand className="titleStyle" href="/">Javadoc Juvenile Reviews</Navbar.Brand>
                        <Nav className="navStyle">
                            {/* <Nav.Link className="navlinkStyle" href="/home">Home</Nav.Link> */}
                            <Button onClick={LoginModal}>Login</Button>
                        </Nav>
                 </Container>
                </Navbar>
            </div>
        )
    }
}