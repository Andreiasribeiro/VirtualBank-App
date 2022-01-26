import React from 'react';
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon, NavBtn, NavBtnLink } from './NavBarElements';
import { FaBars } from "react-icons/fa";

const NavBar = ({toggle}) => {

    
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        RJS Bank
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                         <FaBars/>  {/*icon */}
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks> {/*id to scroll through the page */}
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )

};

export default NavBar;
