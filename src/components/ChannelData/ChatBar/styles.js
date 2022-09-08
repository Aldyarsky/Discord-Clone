import styled from 'styled-components';
import { At } from 'styled-icons/evaicons-solid';

export const Container = styled.div`
    background-color: var(--primary);
    width: 100%;
    

    position: absolute;
    bottom: 0;

    padding: 13px 16px 13px;

    > form{
        width: 100%;
        position: relative;
    }

    > form input{
        width: 100%;
        padding: 13px 0  13px 57px;

        font-weight: 400;
        font-size: 16px;

        background-color: #40444B;
        border-radius: 7px;

        color: #b2b2b2;

        
    }
    > form input::placeholder{
        color: #b2b2b2;
    }
`;

export const AtIcon = styled(At)`
    color: #b2b2b2;

    position: absolute;
    left: 16px;
    top: 11px;

    height: 25px;
    width: 25px;


`;