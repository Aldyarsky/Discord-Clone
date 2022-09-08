import React from 'react';
import {Container, Role, User, Avatar} from './styles'

 

const UserRow = ({nickname, isBot, offline}) => {
    return(
        <User className={offline ? 'off' : ''}>
            <Avatar/>
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

export function UserList(){
    return(
        <Container>
            <Role>Online - 1</Role>
            <UserRow  nickname="Aldiyar Malik"/>

            <Role>Offline - 9</Role>
            <UserRow  nickname="Aldiyarsky" isBot offline/>
            <UserRow  nickname="Aldiyarsky" offline/>
            <UserRow  nickname="Aldiyarsky" offline/>
            <UserRow  nickname="Aldiyarsky" offline/>
            <UserRow  nickname="Aldiyarsky" offline/>
        </Container>
    );
}