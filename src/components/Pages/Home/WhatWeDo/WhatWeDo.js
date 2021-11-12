import {
        WhatWeDoImage,
        Container,
        WhatWeDoBox,
        WhatWeDoTitle,
        WhatWeDoText,
        ReadMore
    } from './WhatWeDoStyles';


export const WhatWeDo = () => {
    return (
        <Container>
            
            <WhatWeDoBox>
                    <WhatWeDoImage />
            </WhatWeDoBox>
            <WhatWeDoBox>
                <WhatWeDoTitle>Shoppahlix Mystic</WhatWeDoTitle>
                <WhatWeDoText>Your number one source for all things electronic.
                    We're dedicated to providing you the very best of electronics,
                    with an emphasis on customer care,
                    product market fit, custtomer satisfaction.
                    Your number one source for all things electronic.

                    We're dedicated to providing you the very best of electronics,
                    with an emphasis on customer care,
                    product market fit, custtomer satisfaction.
                    Your number one source for all things electronic.

                    We're dedicated to providing you the very best of electronics,
                    with an emphasis on customer care,
                    product market fit, custtomer satisfaction.
                    
                    Your number one source for all things electronic.
                    We're dedicated to providing you the very best of electronics ...
                    <ReadMore Link to ='/About'> read more </ReadMore>
                    </WhatWeDoText>
                    
            </WhatWeDoBox>
            
        </Container>
    )
}