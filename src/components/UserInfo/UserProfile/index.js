import React from 'react';
import { Container, ProfileImage, UserName, UserId } from './styles';

interface Props{
    status: string;
}

export function UserProfile({status}: Props){
    return(
        <Container>
            <ProfileImage className={status}/>

            <div>
                <UserName>Luís Fernando</UserName>
                <UserId>#2689</UserId>
            </div>
        </Container>
    );
}