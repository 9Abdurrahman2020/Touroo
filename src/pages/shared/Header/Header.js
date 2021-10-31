import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink className="brand-name" to="/">TouRoo</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto links">
                        <NavLink to="/">Home</NavLink>
                        {
                            user && <> 
                            <NavLink to="/my-bookings">My-Bookings</NavLink>
                            <NavLink to="/add-trip">Add New Trip</NavLink>
                            <NavLink to="/manage">Manage All Bookings</NavLink>
                            </>
                            
                            // <NavLink to="/dashboard">Dashboard</NavLink>
                            
                        }
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <p>{user?.displayName}</p>
                        {
                            user ? <button onClick={logOut} className="btn btn-danger">Logout</button> :<NavLink to="/login">Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;