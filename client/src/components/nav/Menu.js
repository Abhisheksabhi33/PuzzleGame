
import { NavLink , Link} from "react-router-dom"
import { useAuth } from "../../context/auth"
import { useNavigate } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function Menu(){
    // hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        setAuth({...auth, token: null, user: null});
        localStorage.removeItem("auth");
        navigate("/login");
    }

    return (
        <Navbar className="nav nav-tabs d-flex justify-content-between shadow-sm" sticky="top" bg="dark" expand = "lg">
         <Container fluid>
          
         <Navbar.Brand style={{color: "white"}}  to="/">Puzzle-Game</Navbar.Brand>

        {!auth?.user ?  <Nav
            className="me-auto my-2 my-lg-0 nav-item "
            style={{ maxHeight: '100px' }}
           
          >

            <Link className='mx-3 '  style={{color: "white" , textDecoration:"none"}} to="/">Home</Link>
            <Link style={{color: "white" , textDecoration:"none"}} to="/about">About</Link>


          </Nav> : <Nav className="nav-item ">
            <Link className='mx-3 '  style={{color: "white" , textDecoration:"none", margin: "15px"}} to="/">Home</Link>
            <Link style={{color: "white" , textDecoration:"none", margin: "15px"}} to="/about">About</Link>
            <Link  style={{color: "white" , textDecoration:"none", margin: "15px"}} to={`/score/${auth?.user?.role===1 ? "admin":"user"}`}> {auth?.user?.role===1 ? "Leaderboard" : "Your Status"} </Link>
            </Nav>}

          {!auth?.user ? (
                    <div className="nav-item ">
                        <Button variant="outline-light" className="mx-2" >
                        <NavLink className="nav-link" to="/login">
                                LOGIN
                            </NavLink>
                        </Button>
                        <Button variant="outline-light" className="mx-2" >
                        <NavLink className="nav-link" to="/register">
                                REGISTER
                            </NavLink>
                        </Button>
                    </div>

                      
                ): (
                    <div className="dropdown d-flex flex-column nav-item "> 
                        <>
                            <a style={{color: "white" , margin: "5px"}} >
                                { auth?.user?.username?.toUpperCase() }
                            </a>
                           
                        </>
                                {/* <NavLink className="nav-link pointer" 
                                    to={`/dashboard/${auth?.user?.role===1 ? "admin" : "user"}`}>
                                    Dashboard
                                </NavLink> */}
                            

                                    {/* <a style={{color: "white"}}  onClick={logout} >
                                        Logout
                                    </a>  */}
                                    <Button variant="outline-light" className="mx-2" onClick={logout} >
                                        Logout
                                    </Button>
                           
                     
                    </div>
                )}


            </Container>   

        </Navbar>
    );
    
}