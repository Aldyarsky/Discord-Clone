import React from 'react';
import { Container, User, Avatar } from './styles';

const customJson = [
    {
        channelId: 1,
        messages:[
            {
                name: "Aldiyarskiy",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Aldiyarskiy2",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Aldiyarskiy3",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Aldiyarskiy4",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Aldiyarskiy5",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Aldiyarskiy6",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: true,
                marked: true

            },
        ]
    },
    {
        channelId: 2,
        messages:[
            {
                name: "Zhenya 123",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Zhenya 323",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: true,
                marked: false
            },
            {
                name: "Aldiyarskiy3",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: true,
                marked: false
            },
            {
                name: "Zhenya 888",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: true
            },
            {
                name: "Aldiyarskiy5",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Aldiyarskiy6",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false

            },
        ]
    },
    {
        channelId: 3,
        messages:[
            {
                name: "Random 123",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: true,
                marked: false
            },
            {
                name: "Random 323",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Random313",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false
            },
            {
                name: "Random 888",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: true
            },
            {
                name: "Aldiyarskiy5",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: true,
                marked: false
            },
            {
                name: "Random",
                message: "Loren Ipsum Hello",
                date: "08/09/2022",
                isBot: false,
                marked: false

            },
        ]
    }
    
]
export function ServerMessages({channelId}){
    const messagesList = customJson.find(o=> o.channelId===channelId)
    return(
        <Container>
            {messagesList === undefined || messagesList === null ? '' 
            :
            messagesList.messages.map((o, i) => 
                <UserRow name={o.name} isBot={o.isBot} message={o.message} marked={o.marked} />
            )
            }
            
        </Container>
    );
}

export function UserRow({
    name,
    isBot,
    message,
    marked,
    date

}){
    return(

        <User className={marked ? 'marked' : ''}>
            
            <Avatar/>
            <div>
                <strong>{name}  {date && <span>{date}</span>} {isBot && <span className='bot'>Bot</span>}</strong>
                <span>{message}</span>
                
            </div>

            

        </User>

    );
}