import React, { useEffect } from 'react';
import {Container, AtIcon} from './styles';


export function ChatBar(props){
    return(
        <Container>
            <form>
            <AtIcon/>
                <input  type="text" placeholder={"Message #" + props.channelName} autoFocus/>
            </form>
        </Container>
    )
}