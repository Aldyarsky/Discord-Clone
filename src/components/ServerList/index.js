import React, { useContext, useEffect } from 'react';
import { useState } from 'react';

import { Container, Separator } from './styles';
import { ServerButton } from '../ServerButton';
import { SelectedServerContext } from '../Layout';

const customJson = [
    {
        userId: 1,
        serverList: [
            {
                id: 0,
                serverName: "Direct Messages",
                serverIcon: "serv1.svg"
            },
            {
                id: 1,
                serverName: "Very Cool Server #1 of User#1",
                serverIcon: "serv1.svg"
            },
            {
                id: 2,
                serverName: "Very Cool Server #2 of User#1",
                serverIcon: "serv2.svg"
            },
            {
                id: 3,
                serverName: "Very Cool Server #3 of User#1",
                serverIcon: "serv3.svg"
            }
        ]
    },
    {
        userId: 2,
        serverList: [
            {
                id: 0,
                serverName: "Direct Messages",
                serverIcon: "../assets/serv1.png"
            },
            {
                id: 4,
                serverName: "Very Cool Server #1 of User#2 ",
                serverIcon: "../assets/serv1.png"
            },
            {
                id: 5,
                serverName: "Very Cool Server #2 of User#2",
                serverIcon: "../assets/serv1.png"
            },
            {
                id: 6,
                serverName: "Very Cool Server #3 of User#2",
                serverIcon: "../assets/serv1.png"
            }
        ]
    },
];



export function ServerList({ userId }) {
    const context = useContext(SelectedServerContext);
    const serverList = customJson.find(o => o.userId === userId)
    return (
        <Container>
            {
                serverList.serverList.map((oS, iS) => 
                    < ServerButton imgSource={oS.serverIcon} index={oS.id} key={iS} isDms={oS.id === 0 ? true : false} selected={context.serverId === oS.id} />
            )}
        </Container>
    );
}