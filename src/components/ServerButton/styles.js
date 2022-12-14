import styled from 'styled-components';



export const Button = styled.button`
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    width: 48px;
    height: 48px;
    margin-bottom: 8px;

    background-color: ${props => props.isDms ? 'var(--rocketseat)' : 'var(--primary)'};

    cursor: pointer;
    position: relative;
    border-radius: 50%;

    > img{
        width: 24px;
        height: 24px;
    }

    &::before{
        content: '';
        width: 9px;
        height: 9px;

        position: absolute;
        left: -15px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;

        display: ${props => props.hasNotification ? 'block' : 'none'};
    }
    &::after{
        content: '${props => props.mentions}';
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        background-color: var(--notification);
        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        display: ${props => props.mentions ? 'inline' : 'none'};
    }
    

    transition: border-radius .2s, background-color .2s;
    &:hover,
    &:active{
        border-radius: 16px;
        background-color: ${props => props.isDms ? 'var(--rocketseat)' : 'var(--discord)'};
    }
`