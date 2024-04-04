import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from '../../../../components/FlexWrapper';
import photo from '../../../images/photo.jpg';



export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Anastasiya Solovyova</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>

        </StyledMain>
    );
};
const StyledMain = styled.div `
min-height: 100vh;
    background-color: snow;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`

`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

