import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import photo from '../../../images/photo.jpg';
import {Container} from "../../../../components/Container";
import {S} from './Main_Styles'



export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                <div>
                    <S.SmallText>Hi There</S.SmallText>
                    <S.Name>I am <span>Anastasiya Solovyova</span></S.Name>
                    <S.MainTitle>A Web Developer.</S.MainTitle>
                </div>
                <S.PhotoWrapper>
                <S.Photo src={photo} alt=""/>
                </S.PhotoWrapper>

            </FlexWrapper>
            </Container>
        </S.Main>
    );
};




