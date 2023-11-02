import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidgetComponent from '../CardWidgetComponent/CardWidgetComponent';
import logo from '../../assets/logoo.jpg'

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="fondo">
      <Container>
        <Navbar.Brand href="#home">
            <img 
                src={logo} 
                width="200"
                height="50"
                className="d-inline-block align-top"
                alt="Logo navbar" 
                />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="color-font">Home</Nav.Link>
            <Nav.Link href="#link" className="color-font">Productos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown" className='custom-nav-dropdown'>
              <NavDropdown.Item href="#action/3.1">PC/Notebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Periféricos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CardWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;