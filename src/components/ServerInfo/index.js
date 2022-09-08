import React from 'react';

import { ChannelList } from '../ServerInfo/ChannelList';
import { ServerName } from '../ServerInfo/ServerName';
import { ChannelInfo } from '../ChannelInfo';

const customJson = [
    {
        serverId: 1,
        serverName: "Very Cool Server #1 of User#1",
    },
    {
        serverId: 2,
        serverName: "Very Cool Server #2 of User#1",
    },
    {
        serverId: 3,
        serverName: "Very Cool Server #3 of User#1",
    },
];
export function ServerInfo({serverId}){
    const serverInfo = customJson.find(o => o.serverId === serverId)
    return(<>
        <ServerName serverName={serverInfo === null || serverInfo === undefined ?  '' : serverInfo.serverName}></ServerName>
        <ChannelList serverId = {serverId}></ChannelList>
        <ChannelInfo/>
    </>)
}