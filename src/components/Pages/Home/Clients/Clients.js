import {
        Container,
        ClientBox,
        ClientName,
        ClientReview,
        TomImage,
        JoanImage,
        JuliaImage,
        EmilyImage,
        PeterImage


} from './ClientsStyles';


export const Clients = () => {
        return (

                <Container>
                        <ClientBox>
                                <ClientName>Tom</ClientName>
                                <TomImage />
                                <ClientReview>
                                        I'll start by saying I love Tom Leveen.
                                        He has a great voice and his characters are always fun to "listen" to.
                                </ClientReview>
                        </ClientBox>
                        <ClientBox>
                                <ClientName>Joan</ClientName>
                                <ClientReview>
                                        <JoanImage />
                                        Shoppaholix was founded in 2021 by Xessive Observer,
                                        Shoppahlix has come a long way from its beginnings in e-comm era.

                                </ClientReview>
                        </ClientBox>
                        <ClientBox>
                                <ClientName>Julia</ClientName>
                                <JuliaImage />
                                <ClientReview>

                                        Shoppaholix was founded in 2021 by Xessive Observer,
                                        Shoppahlix has come a long way from its beginnings.
                                </ClientReview>
                        </ClientBox>
                        <ClientBox>
                                <ClientName>Emily</ClientName>
                                <EmilyImage />
                                <ClientReview>
                                        Shoppaholix was founded in 2021 by Xessive Observer,
                                        Shoppahlix has come a long way from its beginnings in e-comm era.
                                        When Xessive Observer first started out,
                                        his passion for Shoppaholix message - was always.
                                </ClientReview>
                        </ClientBox>
                        <ClientBox>
                                <ClientName>Peter</ClientName>
                                <PeterImage />
                                <ClientReview>
                                        Shoppaholix was founded in 2021 by Xessive Observer,
                                        Shoppahlix has come a long way from its beginnings in e-comm era.
                                        When Xessive Observer first started out.
                                </ClientReview>
                        </ClientBox>
                </Container>
        )
}