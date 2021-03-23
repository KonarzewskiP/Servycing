import React from 'react';
import {InnerPageContainer, PageContainer} from "../../components/pageContainer";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {AccountBox} from "../../components/accountBox";
import styled from "styled-components";
import {useParams} from "react-router";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`

const CustomerAccessPage = () => {
const { action } = useParams();

    return (
        <PageContainer>
            <Navbar/>
            <StyledInnerContainer>
                <AccountBox initialActive={action}/>
            </StyledInnerContainer>
            <Footer/>
        </PageContainer>
    );
};

export default CustomerAccessPage;