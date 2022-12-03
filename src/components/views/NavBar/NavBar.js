import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" sticky="top" className="rounded mt-3">
            <Container>
            <Navbar.Brand href="#home">waiterApp</Navbar.Brand>
                <Nav className="justifly-content-end">
                    <Nav.Link as={NavLink} to="/">
                        Home
                    </Nav.Link> 
                </Nav>
            </Container>
        </Navbar>
      );
}
 
export default NavBar;
