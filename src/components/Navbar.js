// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            
            <Link to="/Dashboard" className="nav-link">Dashboard</Link>
            <Link to="/CompanyInfo" className="nav-link">Company Info</Link>
        </nav>
    );
}

export default Navbar;
