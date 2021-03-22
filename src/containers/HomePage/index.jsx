import React from 'react';
import {InnerPageContainer, PageContainer} from "../../components/pageContainer";
import TopSection from "./topSection";
import Navbar from "../../components/navbar";
import styled from "styled-components";
import {deviceSize} from "../../components/responsive";
import Services from "./services";


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
                <ContentContainer>
                    <Services/>
                </ContentContainer>
            </InnerPageContainer>
        </PageContainer>
    );
};

export default HomePage;