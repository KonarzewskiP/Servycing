import React from 'react';
import styled from "styled-components";
import BrandLogo from "../brandLogo";
import Button from "../button";
import {Marginer} from "../marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
`

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const AnchorLink = styled.a`
  color: #fff;
  font-size: 0.85em;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`

const Separator = styled.div`
  width: 1px;
  min-height: 35%;
  background-color: #fff;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <BrandLogo/>
            <AccessibilityContainer>
                <AnchorLink>Specialist Portal</AnchorLink>
                <Marginer direction="horizontal" margin={10}/>
                <Separator/>
                <Marginer direction="horizontal" margin={10}/>
                <Button size={11}>Register</Button>
                <Marginer direction="horizontal" margin={7}/>
                <AnchorLink>Login</AnchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    );
};

export default Navbar;