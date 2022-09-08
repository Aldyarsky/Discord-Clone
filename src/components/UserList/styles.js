import styled from 'styled-components';

export const Container  = styled.div`
    grid-area: UL;

    padding: 0 8px 23px 8px;
    background-color: var(--secondary);
`;
export const Role  = styled.div`
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;

    margin-bottom: 10px;

    color: var(--white);
    opacity: .45;

    margin-top: 23px;
`;
export const User  = styled.div`
    display: flex;
    align-items: center;

    transition: background-color .2s;

    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    > strong{
        font-weight: 400;
        font-size: 16px;

        color: var(--white);
    }

    > span{
        background-color: var(--discord);

        color: var(--white);
        font-size: 9px;
        font-weight: 700;

        border-radius: 4px;

        padding: 2px 5px;

        margin-left: 8px;
    }

    &.off{
        opacity: .3;
    }

    &:hover{
        background-color: #dcddde13;
        opacity: 1;
    }
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;

    background-color: var(--primary);

    border-radius: 50%;
    margin-right: 13px;
`;