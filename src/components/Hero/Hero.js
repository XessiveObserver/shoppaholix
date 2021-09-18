import React from 'react';
import styled from 'styled-components';
import HeroImageSrc from './HeroImage/hero.png';

const HeroImage = styled.div`
    display: felx;
    flex-direction: column;
    background-image: linear-gradient( to top right,
         rgba(11, 10, 10, 0.38),
          rgba(11, 10, 10, 0.19)),
           url(${HeroImageSrc});
           height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    
`;

const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

const HeroHeader = styled.h1`
    font-weight: bold;
`;

const HeroParagraph = styled.p`
    font-size:1.5em;
    font-weight: 0.3em;
`;

const HeroButton = styled.button`
    border: 0.18em solid;
    font-weight: bolder;
    cursor: pointer;
    color:black;
    border-radius: 0.3em;
    font-size: 0.8em;
    padding: 0.5em;
    margin: 1em;
    transition: all .5s ease;
    &:hover{
        background-color: #eaeeea;
        color:darkgreen;
        opacity: 0.7;
        transform:scale(1.08);
    }
`;

export const Hero = () => {
    return (
        <HeroImage>
            <HeroText>
                <HeroHeader>Shoppahloix</HeroHeader>
                <HeroParagraph>Place Your Order Now</HeroParagraph>
                <HeroButton>Shop Now</HeroButton>
            </HeroText>
        </HeroImage>
    )
}

