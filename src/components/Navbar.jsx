import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './DefaultImages/logo.jpg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
            <div className="container-fluid">
                <img className="navbar-brand" src={logo} alt=".." />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/technology">Technology</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/science">Science</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar