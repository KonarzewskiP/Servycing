import React from 'react';
import styled from "styled-components";
import BrandLogo from "../brandLogo";
import Button from "../button";
import {Marginer} from "../marginer";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive/src";
import {deviceSize} from "../responsive";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({useTransparent}) => useTransparent ? "transparent" : "#264653"};
`

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const AnchorLink = styled(Link)`
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

const Navbar = ({useTransparent}) => {
    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})


    return (
        <NavbarContainer useTransparent={useTransparent}>
            <BrandLogo/>
            <AccessibilityContainer>
                {!isMobile && <AnchorLink>Specialist Portal</AnchorLink>}
                {!isMobile && <Marginer direction="horizontal" margin={10}/>}
                {!isMobile && <Separator/>}
                <Marginer direction="horizontal" margin={10}/>
                <Link to="/customer/access/signup">
                    <Button size={11}>Register</Button>
                </Link>
                <Marginer direction="horizontal" margin={7}/>
                <AnchorLink to="/customer/access/signin">Login</AnchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    );
};

export default Navbar;