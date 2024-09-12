import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="title-box">
                <span className="back-arrow-icon"><i className="bi bi-arrow-left-short"></i></span>
                <p>Laptop Pass</p>
            </div>
            <div className="search-icon"><i className="bi bi-search"></i></div>
        </nav>
    )
}
