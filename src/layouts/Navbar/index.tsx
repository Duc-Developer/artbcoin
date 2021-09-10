import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from 'assets/icons/logo.svg';
import './style.scss';

const MainNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="main-navbar" color="light" light expand="md">
            <NavbarBrand href="/">
                <img src={logo} alt="" />
            </NavbarBrand>
            <NavbarToggler id="toggle-button" onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">지갑</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">백서</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">전자도록</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default MainNavbar;
