import React,{Component} from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    let navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem('userloggedin');
        localStorage.removeItem('userid');
        localStorage.removeItem('Admin');
        localStorage.removeItem('lastname');
        //alert("Logged out Successfully");
        navigate("/");
    }

    var loggedin;
    const username = localStorage.getItem('userloggedin');
    const last_name = localStorage.getItem('lastname');
    var admin = localStorage.getItem('Admin');

    if (username === null) {
        loggedin = false;
    }
    else {
        loggedin = true;
    }
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/About">
                            About
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Contact">
                            Contact Us
                        </NavLink>
                        {loggedin ?(
                            <>
                            {(username ==="Admin") ?(
                                <>
                                <NavLink className="d-inline p-2 bg-dark text-white" to="/AdminRights">
                            AdminRights
                        </NavLink>
                                </>) : (<div></div>)}</>) :(
                                    <>
                         </>)}
                    </Nav>

                    {loggedin ? (<>
                        <Nav className="justify-content-end" style={{ width: "64%" }}>
                        <NavDropdown title={
                            <span className="text-white my-auto">Hi {username}</span>
                        }>
                            <NavDropdown.Item className="dropdown text-white">
                                <NavLink to="/viewuser" className="nav-link">{username}</NavLink>
                            </NavDropdown.Item>
                            {(username ==="Admin") ? (<>
                                <NavDropdown.Item className="dropdown">
                                    <NavLink to="/Viewuser" className="nav-link" >View Profile</NavLink>
                                </NavDropdown.Item>
                           </> ) :
                                (
                                    <> <NavDropdown.Item className="dropdown">
                                        <NavLink to="/Viewuser" className="nav-link" >View Profile</NavLink>
                                    </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown">
                                            <NavLink to="/Edituser" className="nav-link">Edit Profile</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown">
                                            <NavLink to="/addfunds" className="nav-link" >Add Funds</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="dropdown">
                                            <NavLink to="/Viewordersbyuser" className="nav-link" >Your Orders</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />

                    </>)}

                    <NavDropdown.Item className="dropdown">
                                <NavLink to="/" className="nav-link" onClick={() => logout()}>Logout</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        {(username ==="Admin") ? (
                            <div></div>
                        ) : (<>
                            <NavLink to="/Cart" className="nav-link px-2 text-white">Cart</NavLink>
                            <NavLink to="/UserMedicine" className="nav-link px-2 text-white">Medicines List</NavLink>
                            </> )}
                    </Nav>
                </>
                ) : (
                    <>
                        <Nav className="justify-content-end" style={{ width: "75%" }}>
                            <NavLink to="/login" className="nav-link px-2 text-white">Login</NavLink>
                        </Nav>
                    </>
                )
                }

                </Navbar.Collapse>
                </Navbar>
        )
    }
export default Navigation;