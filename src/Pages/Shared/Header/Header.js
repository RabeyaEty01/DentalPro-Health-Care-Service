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

                            <Nav.Link>
                                <h6 class="my-3" type="text" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">My Profile</h6>

                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <h1 className="text-center fw-bold" id="offcanvasRightLabel">My Account <span className="service-text">Details</span>
                                        </h1>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">


                                        {user.email &&
                                            <Navbar.Text>
                                                <span>  <img width="150px" height="150px" className="rounded-circle my-3" src={user.photoURL} alt="" /></span>
                                                <h1>{user.displayName}</h1>
                                                <p>Email: {user.email}</p>
                                                <div className="text-start py-3 mx-2">
                                                    <h3 className="my-4"> <i className="fas fa-user"></i>  Manage My Account</h3>
                                                    <h3 className="my-4"><i class="fas fa-box"></i> My Appointment</h3>
                                                    <h3 className="my-4"><i class="fas fa-heart"></i> My Wishlist</h3>
                                                    <h3><i class="fas fa-grin-hearts"></i> Fllowed Services</h3>
                                                    <h3 className="my-4"><i class="fas fa-star"></i> My Reviews</h3>
                                                    <h3 className="my-4"><i class="fas fa-times-circle"></i> My Cancellations</h3>
                                                    <Button onClick={logOut} variant="danger rounded-pill px-4 text-white"><i class="fas fa-sign-out-alt text-white"></i> Sign Out</Button>
                                                </div>
                                            </Navbar.Text>

                                        }


                                    </div>
                                </div>


                            </Nav.Link>



                        }

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