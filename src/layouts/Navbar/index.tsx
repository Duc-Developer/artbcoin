import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from 'assets/icons/logo.svg';
import bgToggle from 'assets/images/mobile/bg-menu-toggle.png';
import toggleIcon from 'assets/icons/menu.svg';
import './style.scss';

const toggleStyled = {
    backgroundImage: `url(${bgToggle})`,
    backgroundSize: 'cover',
};

const MainNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar id="main-navbar" style={!isOpen ? {} : toggleStyled} color="light" light expand="md">
            <div className="header">
                <NavbarBrand href="/">
                    <img src={logo} alt="" />
                </NavbarBrand>
                <NavbarToggler id="toggle-button" onClick={toggle}>
                    <img src={toggleIcon} alt="toggle" />
                </NavbarToggler>
            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem active>
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
