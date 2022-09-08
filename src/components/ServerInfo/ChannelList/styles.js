import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    flex-shrink: 0;

    padding: 24px 9.5px 0 16px;
    background-color: var(--secondary);
    .selected{
        background-color: var(--quinary);

        > div span{
            color: var(--white);
        }
    }


`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;

    > span{
        font-weight: 500;
        font-size: 12px;
        color: var(--gray);
        text-transform: uppercase;
    }
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;

    color: var(--symbol);
    cursor: pointer;
`;
