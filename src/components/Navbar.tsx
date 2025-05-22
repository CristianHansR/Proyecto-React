import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className="w-100 shadow"
      style={{ background: "linear-gradient(90deg, #95c6d4 0%, #a4d1dc 100%)" }}
    >
      <Container fluid>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/favicon.png"
            alt="ModelaYou Logo"
            className="d-inline-block align-top me-2"
            style={{ width: "50px", height: "50px" }}
          />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
        <BootstrapNavbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/tienda">Productos</Nav.Link>
            <Nav.Link as={Link} to="/contactanos">Contáctanos</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
