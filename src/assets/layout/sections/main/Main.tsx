import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import photo from '../../../images/photo.jpg';
import {Container} from "../../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                <div>
                    <S.SmallText>Hi There</S.SmallText>
                    <S.Name>I am <span>Anastasiya Solovyova</span></S.Name>
                    <S.MainTitle>
                        <p>A Web Developer.</p>
                        <Typewriter
                            options={{
                                strings: ['A Web Developer.'],
                                autoStart: true,
                                loop: true,
                                delay: 150
                            }}
                        />
                    </S.MainTitle>
                </div>
                <Tilt>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </Tilt>
            </FlexWrapper>
            </Container>
        </S.Main>
    );
};




