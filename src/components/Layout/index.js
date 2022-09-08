import React, { useEffect } from 'react';
import { Grid } from './styles';
import { useState } from "react";

import { ServerList } from '../ServerList';
import { ServerInfo } from '../ServerInfo';
import { UserInfo } from '../UserInfo';
import { UserList } from '../UserList';
import { ChannelData } from '../ChannelData';


export const SelectedServerContext = React.createContext(0);
export const SelectedChannelContext = React.createContext(0);

export function Layout() {
    const [userId, setUserId] = useState(0);
    const [serverId, setServerId] = useState(0);
    const [channelId, setChannelId] = useState(0);

    return (
        <Grid>
            <SelectedServerContext.Provider value={{ serverId, setServerId }}>
                <ServerList userId={1} />
                <SelectedChannelContext.Provider value={{ channelId, setChannelId }}>
                    <ServerInfo serverId={serverId} />
                </SelectedChannelContext.Provider>
            </SelectedServerContext.Provider>
            <UserInfo />
            <UserList />
            <SelectedChannelContext.Provider value={{ channelId, setChannelId }}>
            <ChannelData />
            </SelectedChannelContext.Provider>
        </Grid>
    );
};
