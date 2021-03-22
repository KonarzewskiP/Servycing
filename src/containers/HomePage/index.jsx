import React from 'react';
import {InnerPageContainer, PageContainer} from "../../components/pageContainer";
import TopSection from "./topSection";
import Navbar from "../../components/navbar";
import styled from "styled-components";
import {deviceSize} from "../../components/responsive";
import Services from "./services";
import SpecialistAd from "../../components/specialistAd";
import {Marginer} from "../../components/marginer";
import Footer from "../../components/footer";


const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

    /*  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }*/
`

const HomePage = () => {
    return (
        <PageContainer>
            <TopSection>
                <Navbar/>
            </TopSection>
            <InnerPageContainer>
                <Marginer direction="vertical" margin="2em"/>
                <ContentContainer>
                    <Services/>
                </ContentContainer>
                <Marginer direction="vertical" margin="5em"/>
                <SpecialistAd/>
                <Marginer direction="vertical" margin="5em"/>
            </InnerPageContainer>
            <Footer/>
        </PageContainer>
    );
};

export default HomePage;