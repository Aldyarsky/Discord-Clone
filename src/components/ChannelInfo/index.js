import React from 'react';
import { Container, Title, HashtagIcon, Separator, Description } from './styles';

export function ChannelInfo(props){
    return(
        <Container>
            <HashtagIcon/>
            <Title>{props.title}</Title>
            <Separator/>
            <Description>{props.description}</Description>
        </Container>
    );
}