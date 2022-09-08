import React from 'react';
import {Container} from './styles'
import { ChatBar } from './ChatBar';
import { ServerMessages } from './ServerMessages';
import { SelectedChannelContext } from '../Layout';

const channelList = [
    {
        channelId: 1,
        channelName: "Very Cool Channel #1 of Server#1",
    },
    {
        channelId: 2,
        channelName: "Very Cool Channel #2 of Server#1",
    },
    {
        channelId: 3,
        channelName: "Very Cool Channel #3 of Server#1",
    }
]

export function ChannelData(){
    const context = React.useContext(SelectedChannelContext);
    if(channelList.find(o=>o.channelId === context.channelId)===undefined){
        
        return(
            <Container>
                <ServerMessages channelId={context.channelId}/>
                <ChatBar channelName={""}/>
            </Container>
        );
    }else{
        const currentChannel = channelList.find(o=>o.channelId === context.channelId)
        console.log(currentChannel)
        return(
            <Container>
                <ServerMessages channelId={context.channelId}/>
                <ChatBar channelName={currentChannel.channelName}/>
            </Container>
        );
    }
    
   
}