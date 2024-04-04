import React from 'react';
import {Icon} from "../../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>

    );
};

const StyledSkill = styled.div `
    background-color: rgba(252, 247, 252, 0.38);
    width: 33%;
    margin: 10px;
`
const SkillTitle = styled.h3 `

`
const SkillText = styled.p `

`

