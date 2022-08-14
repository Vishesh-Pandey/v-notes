import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary bg-opacity-25">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        v Notes
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/v-notes" className="nav-link" aria-current="page" >
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link" aria-current="page" >
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar