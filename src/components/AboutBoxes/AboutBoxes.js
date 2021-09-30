import React from 'react'
import {
    Container,
    Box,
    BoxTitle,
    BoxText
} from "./AboutBoxesStyles";

export const AboutBoxes = () => {
    return (
        <Container>
            <Box bgColor='#bbb9c0'>
                <BoxTitle>Foundation</BoxTitle>
                <BoxText>Shoppaholix was founded in 2021 by Xessive Observer,
                    Shoppahlix has come a long way from its beginnings in e-comm era.
                    When Xessive Observer first started out,
                    his passion for Shoppaholix message - was always.</BoxText>
            </Box>
            <Box bgColor='#c9b6b6'>
                <BoxTitle>Eco-friendly delvivery</BoxTitle>
                <BoxText>This drove us to start their own business.
                    We hope you enjoy our products as much as we enjoy offering them to you.
                    If you have any questions or comments,
                    please don't hesitate to contact us.</BoxText>
            </Box>
            <Box bgColor='#b8b7a4'>
                <BoxTitle>Welcome to Shoppahlix</BoxTitle>
                <BoxText>Your number one source for all things electronic.
                    We're dedicated to providing you the very best of electronics,
                    with an emphasis on customer care,
                    product market fit, custtomer satisfaction.</BoxText>
            </Box>
        </Container>
    )
}
