import styled from 'styled-components';

//SL - server list
//SN - Server name
//CI - channel info
//CL - channel list
//CD - channel data
//UL - users list
//UI - user info

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 71px 240px auto 250px;
    grid-template-rows: 46px auto 52px;

    grid-template-areas: 
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

    height: 100vh;
    /* overflow: hidden; */
`;