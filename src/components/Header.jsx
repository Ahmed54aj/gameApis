
// bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// using lottie
// after running: npm i lottie-react in terminal
import Lottie from "lottie-react";
import controller from "../assets/Lottie/controller.json";

// header component
export default function Header () {
return (
    <header>
    <Navbar expand="md" bg="dark" data-bs-theme="dark" fixed="top"  style={{ marginLeft: 0, marginRight: 0 }}>
      <Container fluid>
        <Lottie id='controller-animation' animationData={controller} loop={true} />
        <Navbar.Brand href="/">Game Projects With Apis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Search Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="/zelda">Zelda Games</NavDropdown.Item>
              <NavDropdown.Item href="/valorant">
                Valorant Agents
              </NavDropdown.Item>
              <NavDropdown title="Monster Hunter" id="basic-nav-dropdown">
              <NavDropdown.Item href="/mhwWeapons">
                Monster Hunter World Weapons
              </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pokemon" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pokedex">
                Pokedex
              </NavDropdown.Item>
                </NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    )
}