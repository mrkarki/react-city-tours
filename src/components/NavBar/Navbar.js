import React from 'react'
import logo from '../../logo.svg';
import './navbar.scss';
export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>City Tour</h1>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li>
                    <a href="/tour " className="nav-link active">Tour</a>
                </li>
            </ul>
        </nav>
    )
}
