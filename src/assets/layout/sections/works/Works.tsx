import React from 'react';
import {SectionTitle} from "../../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../../assets/images/Rectangle-14_1.webp'
import timerImg from './../../../../assets/images/Rectangle-16_1.webp'
import {Container} from "../../../../components/Container";
import {S} from './Works_Styles'


const tabsItems = ["All", "Landing page", "React", "Spa"]

const workData = [
    {
        title: "SocialNetwork",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w)=> {
                        return <Work title={w.title}
                                     src={w.src}
                                     text={w.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


