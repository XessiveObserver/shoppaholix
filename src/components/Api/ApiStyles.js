import styled from 'styled-components';

export const StyledWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        height: min-content;
        height: '100vh';
        width:  auto;
        margin-top: 0.8em;
`;



export const StyledUnOrderedList = styled.ul`
        display: inline-flex;
        flex-wrap: wrap;
        gap: 1.8em;
        text-align: center;
        background-color: #f3e2cc;
        padding: 0.8em;
        margin: 0.8em;
        border-radius:0.85em;
        opacity: 1;
        
        li {          
            list-style: none;
            }
        li img {
            width: 200px;
            height: 200px;
            white-space: nowrap;
            border-radius: 0.8em;
        }

`;


export const AddCartButton = styled.button`
    opacity: 0.9;
    background-color: #975122;
    font-weight: bolder;
    cursor: pointer;
    color:white;
    border-radius: 0.8em;
    font-size: 0.8em;
    padding: 0.5em;
    margin: 0.5;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.06);
        background-color: #ccc77d;
        color:black;
        opacity: 0.7;
    }
`;

