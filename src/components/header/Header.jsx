import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';



function Header() {
    
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="home-route"><b>HOME</b></div>
            </Link>
            <Link to="/cv" style={{ textDecoration: 'none' }}>
                <div className="cv-route"><b>CV</b></div>
            </Link>
        </div>
    )
}



export default Header
