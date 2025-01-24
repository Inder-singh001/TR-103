'use client'
import { Container } from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "next/image"
import "../../../public/scss/pages/header.scss"
export const NavBar = () => {
    return (
        <div className="Nav_section">
            <Container>
                <Row>
                    <Col>
                        <Navbar expand="lg" >
                            <Navbar.Brand href="#home">
                                <Image src="/images/logo.png" width={130} height={58} alt="Logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <NavDropdown title="Programmes" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Universities" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#link">Parter with us</Nav.Link>
                                    <Nav.Link href="#link">About Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}