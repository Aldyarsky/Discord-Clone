import React, { useEffect } from 'react';
import { Container, Category, AddCategoryIcon } from './styles'
import { ChannelButton } from './ChannelButton';
import { createContext, useState } from 'react';
import { SelectedChannelContext } from '../../Layout';




const customJson = [
    {
        serverId: 1,
        categories: [
            {
                categoryName: "Gaming",
                categoryId: 1,
                channelList: [
                    {
                        id: 1,
                        channelName: "Very Cool Channel #1 of Server#1",
                    }
                ]
            },
            {
                categoryName: "Crazy stuff",
                categoryId: 2,
                channelList: [
                    {
                        id: 2,
                        channelName: "Very Cool Channel #2 of Server#1",
                    },
                    {
                        id: 3,
                        channelName: "Very Cool Channel #3 of Server#1",
                    }
                ]

            },

        ],
    },
    {
        serverId: 2,
        categories: [
            {
                categoryName: "Welcome",
                categoryId: 1,
                channelList: [
                    {
                        id: 1,
                        channelName: "Very Cool Channel #1 of Server#2 ",
                        serverIcon: "../assets/srv1.png"
                    }
                ]
            },
            {
                categoryName: "Meetups",
                categoryId: 2,
                channelList: [
                    {
                        id: 2,
                        channelName: "Very Cool Channel #2 of Server#2",
                        serverIcon: "../assets/srv1.png"
                    },
                    {
                        id: 3,
                        channelName: "Very Cool Channel #3 of Server#2",
                        serverIcon: "../assets/srv1.png"
                    }
                ]

            },

        ],
    },
    {
        serverId: 3,
        categories: [
            {
                categoryName: "Funny memes",
                categoryId: 1,
                channelList: [
                    {
                        id: 1,
                        channelName: "Very Cool Channel #1 of Server#3 ",
                        serverIcon: "../assets/srv1.png"
                    },
                    {
                        id: 2,
                        channelName: "Very Cool Channel #2 of Server#3",
                        serverIcon: "../assets/srv1.png"
                    }
                ]
            },
            {
                categoryName: "Gaming News",
                categoryId: 2,
                channelList: [
                    {
                        id: 3,
                        channelName: "Very Cool Channel #3 of Server#3",
                        serverIcon: "../assets/srv1.png"
                    }
                ]

            },

        ],
    },

];

export function ChannelList({ serverId }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const channelList = customJson.find(o => o.serverId === serverId)
    const context = React.useContext(SelectedChannelContext);
    useEffect(() => {context.setChannelId(activeIndex)})
    return (
        <Container>
            <ActiveContext.Provider value={{ activeIndex, setActiveIndex }}>
                {channelList === null || channelList === undefined ? '' :
                    (channelList.categories.map((o, i) => {
                        return(<>
                            <Category key={i}>
                                <span>{o.categoryName}</span>
                                <AddCategoryIcon />
                            </Category>
                            {o.channelList.map((oC, iC) => {
                                return <ChannelButton key={iC} index={oC.id} chatName={oC.channelName} selected={activeIndex === oC.id} />
                            })}
                        </>)
                    }
                    ))}
            </ActiveContext.Provider>
        </Container>
    );
}
export const ActiveContext = createContext();