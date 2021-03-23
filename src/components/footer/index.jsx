import React from 'react';
import styled from "styled-components";
import BrandLogo from "../brandLogo";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {deviceSize} from "../responsive";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em 0 3em;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 3%;
  }
`

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0 10px;
`

const RightBottomContainer = styled.div`
  display: flex;
`
const LeftBottomContainer = styled.div`
  display: flex;
`
const Title = styled.h2`
  font-size: 1.3em;
  margin: 0 0 0.8em 0;
  font-weight: 600;
  color: #000;
`
const FLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #6f6f6f;
  font-size: 1em;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 0.5em;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0;
    text-align: left;
  }
`
const PrivacyText = styled.h6`
  font-size: 0.8em;
  color: #a3a3a3;
  margin: auto 0 0.3em 0.6em;
`

const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 1.3em;
  cursor: pointer;
  transition: background-color, 200ms, ease-in-out;

  &:not(:last-of-type) {
    margin-right: 5px;
  }

  &:hover {
    color: #777777;
  }
`

const Footer = () => {

    return (
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Title>Categories</Title>
                    <FLink>Car Repair</FLink>
                    <FLink>Carpentry</FLink>
                    <FLink>Landscaping</FLink>
                    <FLink>Home Improvement</FLink>
                    <FLink>Management</FLink>
                    <FLink>Demolition</FLink>
                    <FLink>Cleaning</FLink>
                    <FLink>Others</FLink>
                </ContentContainer>
                <ContentContainer>
                    <Title>Access</Title>
                    <FLink>Login</FLink>
                    <FLink>Join Us</FLink>
                    <FLink>Login as Specialist</FLink>
                    <FLink>Become a Specialist</FLink>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <BrandLogo hideLogo color="#8a8a8a" textSize={25}/>
                    <PrivacyText>&#169; All Rights Reserved. 2021</PrivacyText>
                </LeftBottomContainer>
                <RightBottomContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </SocialIcon>
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>
    );
};

export default Footer;