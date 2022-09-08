import styled from 'styled-components';
import { Settings, Headphones } from 'styled-icons/material';
import { Mic } from'styled-icons/evaicons-solid'

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 18px 10px 10px;

    background-color: var(--quaternary);
    
`;

export const MicrophoneIcon  = styled(Mic)`

    width: 20px;
    height: 20px;

    margin-right: 6px;

    color: var(--gray);
    cursor: pointer;

`;

export const HeadsetIcon  = styled(Headphones)`
    width: 20px;
    height: 20px;

    margin-right: 6px;

    color: var(--gray);
    cursor: pointer;

`;

export const SettingsIcon = styled(Settings)`
    width: 20px;
    height: 20px;

    color: var(--gray);
    cursor: pointer;
`;

