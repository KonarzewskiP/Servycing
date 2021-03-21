import React from 'react';
import {InnerPageContainer, PageContainer} from "../../components/pageContainer";
import TopSection from "./topSection";
import Navbar from "../../components/navbar";
import styled from "styled-components";
import {deviceSize} from "../../components/responsive";
import ServiceCard from "../../components/serviceCard";


const Title = styled.h1`
  font-weight: 900;
  color: #000;
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const service = {
    "id": 2,
    "title": "I will paint your car from top to bottom",
    "thumbnailUrl": "http://localhost:9000/car.jpg",
    "rate": 50,
    "rating": 3,
    "specialist": {
        "id": 1,
        "fullName": "Mark brone"
    }
}

const HomePage = () => {
    return (
        <PageContainer>
            <TopSection>
                <Navbar/>
            </TopSection>
            <InnerPageContainer>
                <ContentContainer>
                    <Title>Most used services & More</Title>
                    <ServiceCard {...service}/>
                </ContentContainer>
            </InnerPageContainer>
        </PageContainer>
    );
};

export default HomePage;