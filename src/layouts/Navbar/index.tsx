import React from 'react';
import logo from 'assets/icons/logo.svg';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} alt="" />
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mr-auto" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <span className="nav-link">지갑</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">백서</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link">전자도록</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
