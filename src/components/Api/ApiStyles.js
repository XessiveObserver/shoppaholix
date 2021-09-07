import styled from 'styled-components';

export const StyledWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        height: min-content;
        height: '100vh';
        width:  auto;
`;



export const StyledUnOrderedList = styled.ul`
        display: inline-flex;
        flex-wrap: wrap;
        gap: 1.8em;
        text-align: center;
        
        li {          
            list-style: none;
            }
        li img {
            width: 200px;
            height: 200px;
            white-space: nowrap;
        }

`;


