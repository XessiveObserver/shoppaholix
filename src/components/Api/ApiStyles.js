import styled from 'styled-components';

export const StyledWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        height: min-content;
        height: '100vh';
        width:  '100vw';
`;



export const StyledUnOrderedList = styled.ul `
        display: inline-flex;
        background-color: azure;
        padding: 0;
        margin: 0;
       

        li {
            list-style: none;
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
                       
            
            }
        li img {
            width: 200px;
            height: 200px;
            white-space: nowrap;
        }

`;
   

