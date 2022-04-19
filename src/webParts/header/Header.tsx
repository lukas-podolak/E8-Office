import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">
                <span className='e8let'>E</span>
                <span className='e8let'>8</span>
                <span className='e8let'>-</span>
                <span className='e8let'>O</span>
                <span className='e8let'>f</span>
                <span className='e8let'>f</span>
                <span className='e8let'>i</span>
                <span className='e8let'>c</span>
                <span className='e8let'>e</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
