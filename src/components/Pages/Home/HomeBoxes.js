import React from 'react'
import {
    Container,
    Box,
    BoxTitle,
    BoxText
} from "./HomeBoxesStyles";

export const HomeBoxes = () => {
    return (
        <Container>
            
            <Box>
                <BoxTitle>Eco-friendly delvivery</BoxTitle>
                <BoxText>This drove us to start their own business.
                    We hope you enjoy our products as much as we enjoy offering them to you.
                    If you have any questions or comments,
                    please don't hesitate to contact us.</BoxText>
            </Box>
            <Box>
                <BoxTitle>Welcome to Shoppahlix</BoxTitle>
                <BoxText>Your number one source for all things electronic.
                    We're dedicated to providing you the very best of electronics,
                    with an emphasis on customer care,
                    product market fit, custtomer satisfaction.</BoxText>
            </Box>
        </Container>
    )
}
