import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";
import logo from "../images/spotify-logo.png"

const NavbarElement = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                <Link to="/">
                  <img 
                  src={logo}
                  width="10%"
                  className="d-inline-block align-top" 
                  alt="logo" />
                </Link>
                </Navbar.Brand>
                <Nav className="nav-items">
                  <Link className="link" to="/top-10-artists">
                    <Nav.Link href="#features">Top 10 Artists</Nav.Link>
                  </Link>
                  <Link className="link" to="/top-10-songs">
                    <Nav.Link href="#features">Top 10 Songs</Nav.Link>
                  </Link>
                  <Link className="link" to="/add-song">
                    <Nav.Link href="#features">Add Song</Nav.Link>
                  </Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarElement