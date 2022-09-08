import React, { useContext } from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';
import { ActiveContext } from '..';




export function ChannelButton({ chatName, selected, index }) {
    
    const context = useContext(ActiveContext);
    return (
        <Container 
        className={selected ? 'selected' : ''} 
        onClick={()=>{context.setActiveIndex(index)}}>
            <div>
                <HashtagIcon />
                <span>{chatName}</span>
            </div>

            <div>
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    );
}