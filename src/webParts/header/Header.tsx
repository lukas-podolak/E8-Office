import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{ marginBottom: '20px' }}>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/E8-Office">
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
                        <Nav.Link><Link className='navbarLink' to="/">Domů</Link></Nav.Link>
                        <Nav.Link><Link className='navbarLink' to="/results">Výsledky</Link></Nav.Link>
                        <Nav.Link><Link className='navbarLink' to="/startList">Startovní listina</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
