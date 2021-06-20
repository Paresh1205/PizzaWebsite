import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import { FaPizzaSlice } from 'react-icons/fa';
import './Navigate.css'

const Navbar = ({toggle}) => {
    return (
        <Nav activeKey="/home">
            <Router>
                <NavLink className="pizzaHead" to='/'>Pizza</NavLink>
                <NavLink className="menuSideBar" to="/menu">
                <p onClick={toggle}>Menu</p>
                <FaPizzaSlice />
                </NavLink>
            </Router>
        </Nav>
    
    )
}

export default Navbar
