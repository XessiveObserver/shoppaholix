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
        margin: 0;
        padding: 0 3em;
`;



export const StyledUnOrderedList = styled.ul`
        display: inline-flex;
        flex-wrap: wrap;
        gap: 1.8em;
        text-align: center;
        padding: 0.8em;
        margin: 0.8em;
        border-radius:0.85em;
        opacity: 1;
         
        li {
                    
            list-style: none;
            padding: 0.5em;
            margin: 0.5em;
            border-radius: 0.8em;
            cursor: pointer;
        }

        li img {
            width: 200px;
            height: 200px;
            white-space: nowrap;
            border-radius: 0.8em;
            border: #eee7e0 0.1em solid;
        }
        div {
            margin: 0.3em;
        }

`;


export const AddCartButton = styled.button`
    opacity: 0.9;
    background-color: #0b2864b8;
    font-weight: bolder;
    cursor: pointer;
    color:black;
    margin-right: 1em;
    border-radius: 0.3em;
    border: 0.1em solid;
    font-size: 0.8em;
    padding: 0.5em;
    margin: 0.5;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.06);
        background-color: #7e7ed4;
        color:black;
        opacity: 0.7;
    }
`;
export const RemoveCartButton = styled.button`
    opacity: 0.9;
    background-color: #530e17b9;
    font-weight: bolder;
    cursor: pointer;
    color:black;
    border-radius: 0.3em;
    border: 0.1em solid;
    font-size: 0.8em;
    padding: 0.5em;
    margin: 0.5;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.06);
        background-color: #cf4d4d;
        color:black;
        opacity: 0.7;
    }
`;

// Shoping Cart

export const CartTotal = styled.div`
`;
export const ShoppingCart = styled.div`
`;