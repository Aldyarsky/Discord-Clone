import React from 'react';
import {Container, Title, ExpandIcon} from './styles'


export function ServerName({serverName}){
    return(
        <Container>
            <Title>{serverName}</Title>
            <ExpandIcon/>
        </Container>
    );
}