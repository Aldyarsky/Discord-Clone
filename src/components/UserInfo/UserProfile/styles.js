import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    > div{
        display: flex;
        flex-direction: column;

        gap: 2px;
    }
    
`;

export const ProfileImage  = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--gray);
    position: relative;

    margin-right: 9px;

    &.online::before{
        border-radius: 50%;
        width: 10px;
        height: 10px;

        position: absolute;
        bottom: 0px;
        right: 0px;

        background-color: var(--rocketseat);
        content: '';
    }
`;

export const UserName  = styled.h2`
    color: var(--white);

    font-weight: 700;
    font-size: 13px;
`;
export const UserId = styled.span`
    color: var(--gray);
    font-weight: 400;
    font-size: 13px;
`;

