import React from 'react'
import styled from 'styled-components'

const StyledHeader3 = styled.h1`
    text-align: center;
    font-weight: bold;
    color: #172c17;
`;

export const ClientReviewHeader = () => {
    return (
        <div>
            <StyledHeader3>
                What People Say ...
            </StyledHeader3>
        </div>
    )
}

