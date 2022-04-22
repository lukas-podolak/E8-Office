import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Header() {
  return (
    <div style={{ marginBottom: '20px' }}>
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
                        <Nav.Link href="/">Výsledková listina</Nav.Link>
                        <Nav.Link href="/start_list">Startovní listina</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
