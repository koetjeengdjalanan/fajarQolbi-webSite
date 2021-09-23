import {
  Form,
  Nav,
  Navbar,
  NavDropdown,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const NavigationBarTop = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      fixed="top"
      style={{ maxWidth: "100vw" }}
    >
      <Container>
        <Navbar.Brand href="/">Yaysan Fajar Qolbi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="/blogs">Kegiatan</Nav.Link>
            <NavDropdown title="Program" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mx-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBarTop;
