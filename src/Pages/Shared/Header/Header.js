import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo-2.png';
import './Header.css';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    

    return (
        <>
            <Navbar bg="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="justify-content-start" height="50px" width="300px" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Our Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/blog">Blogs</Nav.Link>

                        {user.email &&
                            <Navbar.Text>
                                Signed in as:
                                <span className="fw-bold"> {user.displayName}</span>
                                <span>  <img width="49px" height="49px" className="rounded-circle" src={user.photoURL} alt="" /></span>
                            </Navbar.Text>

                        }



                        {
                            user.email ?
                                <Nav.Link>
                                    <Button onClick={logOut} variant="danger rounded-pill px-4 text-white"><i class="fas fa-sign-out-alt text-white"></i> Sign Out</Button>
                                </Nav.Link>
                                :
                                <>
                                    <Nav.Link as={HashLink} to="/login">
                                        <Button variant=" btn-sign rounded-pill px-4 text-white"><i class="fas fa-sign-in-alt text-white"></i> Sign In</Button>
                                    </Nav.Link>

                                    <Nav.Link as={HashLink} to="/register">
                                        <Button variant=" btn-sign rounded-pill px-4 text-white"><i class="fas fa-sign-in-alt text-white"></i> Sign Up</Button>
                                    </Nav.Link>
                                </>
                        }




                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;