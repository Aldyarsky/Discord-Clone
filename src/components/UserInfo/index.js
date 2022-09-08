import React from 'react';
import { Container,  MicrophoneIcon, HeadsetIcon, SettingsIcon } from './styles';
import {UserProfile} from './UserProfile';

export function UserInfo(){
    return(
        <Container>
            <UserProfile status="online"/>

            <div>
                <MicrophoneIcon/>
                <HeadsetIcon/>
                <SettingsIcon />
            </div>
        </Container>
    );
}