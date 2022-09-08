import React from 'react';
import {Button} from './styles';
import logo from '../../assets/logo.svg';

import { SelectedServerContext } from '../Layout';


export const ServerButton = ({selected, isDms, hasNotification, mentions, index, imgSource})=>{
    const context = React.useContext(SelectedServerContext);
    return(
        <Button
            isDms={isDms}
            hasNotification={hasNotification}
            mentions={mentions}
            className={selected ? 'active' : ''}
            onClick = {()=>{context.setServerId(index)}}
        >
            {isDms ? <img src={logo}/>: <img src={imgSource}/>}
        </Button>
    );
}