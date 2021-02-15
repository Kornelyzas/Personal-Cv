import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';



function Header() {
    
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="home-route">HOME</div>
            </Link>
            <Link to="/cv" style={{ textDecoration: 'none' }}>
                <div className="cv-route">CV</div>
            </Link>
            <Link to="/work" style={{ textDecoration: 'none' }}>
                <div className="work-route">PORTFOLIO</div>
            </Link>
        </div>
    )
}



export default Header
