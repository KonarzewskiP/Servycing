import React from 'react';
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/landing-page.jpg"
import TheBestSpecialistImg from "../../images/Work only with the best.png"
import BrandLogo from "../../components/brandLogo";
import {Marginer} from "../../components/marginer";
import Button from "../../components/button";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) 0px -150px;
  background-size: cover;
`

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.9);
  display: flex;
  flex-direction: column;
`

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const StandoutImage = styled.div`
  width: 44em;
  height: 34em;

  img {
    width: 100%;
    height: 100%;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
const SloganText = styled.h3`
  margin: 0;
  color: #fff;
  line-height: 1.4;
  font-weight: 500;
  font-size: 1.7em;
`

const TopSection = (props) => {

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                {props.children}
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <BrandLogo logoSize={65} textSize={50}/>
                       <Marginer direction="vertical" margin={8}/>
                        <SloganText>Find the right specialist</SloganText>
                        <SloganText>For the right job</SloganText>
                        <Marginer direction="vertical" margin={15}/>
                        <Button>Join now</Button>
                    </LogoContainer>
                    <StandoutImage>
                        <img src={TheBestSpecialistImg} alt="best in the field"/>
                    </StandoutImage>
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    );
};

export default TopSection;