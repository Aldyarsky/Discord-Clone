import styled from 'styled-components';
import {Hashtag} from 'styled-icons/heroicons-outline';

export const Container = styled.div`
    grid-area: CI;

    display: flex;
    align-items: center;

    padding: 0 17px;
    background-color: var(--primary);

    box-shadow: rgba(0,0,0,0.2) 0 1px 0 0;
    z-index: 2;
`;

export const  HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 25px;

    color: var(--symbol);
`;

export const  Title = styled.div`
    font-size: 16px;
    font-weight: bold;

    margin-left: 9px;

    color: var(--white);
`;

export const  Separator = styled.div`
    height: 24px;
    width: 1px;
    background: rgba(79,84,92,0.48);
    margin: 0 13px; 
`;

export const  Description = styled.span`
    font-size: 14px;
    font-weight: 400;

    color: #b9bbbe;
`;