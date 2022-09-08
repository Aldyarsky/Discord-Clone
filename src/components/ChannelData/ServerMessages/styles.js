import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    background-color: transparent;

    overflow-y: auto;
    height: calc(100% - 68px);
    /* max-height: calc(100% - 138px); */

    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #2F3136;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #202225;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #202226;
    }
`;

export const User  = styled.div`
    display: flex;
    align-items: center;

    background-color: transparent;
    transition: background-color .2s;
    cursor: pointer;

    position: relative;

    &:hover{
        background-color: #dcddde13;
        filter: brightness(100%);
    }

    width: 100%;

    > div{
        display: flex;
        flex-direction: column;
    }

    > div strong{
        font-size: 16px;
        font-weight: 500;
        color: var(--white);
    }

    > div strong span{
        font-size: 12px;
        font-weight: 300;

        color: var(--white);
        opacity: .42;

        margin-left: 6px;
    }

    > div span{
        font-weight: 400;
        font-size: 16px;
        color: var(--white);
    }
    .bot{
        font-weight: 700;
        font-size: 9px;

        color: var(--white);

        background-color: var(--discord);
        border-radius: 4px; 

        padding: 2px 5px;

        position: absolute;
        top: 15px;
    }

    &.marked{
        border-left: 2px solid #FFA839;

        background: rgba(255, 168, 57, .1);
    }
`;


export const Avatar  = styled.div`
    width: 40px;
    height: 40px;

    border-radius: 50%;
    background-color: var(--secondary);

    margin: 12px 16px;
`;