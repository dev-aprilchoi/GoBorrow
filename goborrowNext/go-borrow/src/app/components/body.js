'use client'
import styled from 'styled-components';
import Goods from './goods';

const Left = styled.div`
    width: 15%;
    height: 100vh;
`;

const Contents = styled.div`
    width: 70%;
    height: 100vh;
`;

const Sidebar = styled.div`
    width: 15%;
    height: 100vh;
`;

const BodyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
`;
const Body = () => {
    return (
        <>
            <BodyContainer>
                <Left></Left>
                <Contents>
                    <Goods />
                </Contents>
                <Sidebar>Sidebar</Sidebar>
            </BodyContainer>
        </>
    )
}

export default Body;