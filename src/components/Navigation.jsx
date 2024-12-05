import React from 'react';
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="border-top border-3">
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="src\assets\img\logoFlamengo.png"
            alt="Logo Flamengo"
            height="60"
            className="me-2 position-absolute"
            style={{ top: '-30px', left: '20px', zIndex: 3 }}
          />
          <h3 className="d-flex align-items-center text-white" style={{ paddingLeft: '4rem' }}>
            Flamengo
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <BootstrapNav>
            <BootstrapNav.Link href="https://www.facebook.com/FlamengoOficial" target="_blank">
              Facebook
            </BootstrapNav.Link>
            <BootstrapNav.Link href="https://twitter.com/flamengo" target="_blank">
              Twitter (X)
            </BootstrapNav.Link>
            <BootstrapNav.Link href="https://instagram.com/flamengo" target="_blank">
              Instagram
            </BootstrapNav.Link>
            <BootstrapNav.Link href="https://www.youtube.com/user/flamengo" target="_blank">
              YouTube
            </BootstrapNav.Link>
            <BootstrapNav.Link href="https://www.tiktok.com/@flamengo" target="_blank">
              TikTok
            </BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
