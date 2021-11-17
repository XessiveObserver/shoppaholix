import {
    FooterSection,
    FooterContainer,
    FooterNewsletter,
    FooterNewsletterTitle,
    FooterNewsletterText,
    FooterNewsletterForm,
    FooterNewsletterInput,
    FooterBtn,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    FooterCopyRight,
    FooterLabel
} from './FooterStyles';
export const Footer = () => {
    return (
        <div>
            <FooterSection>
                <FooterContainer>
                    <FooterNewsletter>
                        <FooterNewsletterTitle>Join our listing for execlusive discounts and new gadgets</FooterNewsletterTitle>
                        <FooterNewsletterText>We have new give aways every month</FooterNewsletterText>
                        <FooterNewsletterForm>
                            <FooterLabel htmlFor="email">Email address</FooterLabel>
                           <FooterNewsletterInput name="email" id="email" type="email" placeholder="Email address" />
                           <FooterBtn>Submit</FooterBtn>
                        </FooterNewsletterForm>
                    </FooterNewsletter>
                    <FooterLinkContainer>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>Staff</FooterLink>
                                <FooterLink to='/'>Mission</FooterLink>
                                <FooterLink to='/'>Vision</FooterLink>
                                <FooterLink to='/'>Terms and conditions</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to='/about'>How we do it</FooterLink>
                                <FooterLink to='/events'>up coming events</FooterLink>
                                <FooterLink to='/'>Gift cards</FooterLink>
                                <FooterLink to='/'>Orders</FooterLink>
                            </FooterLinks>

                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>Resources</FooterLinkTitle>
                                <FooterLink to='/'>New Devices</FooterLink>
                                <FooterLink to='/'>Black Friday</FooterLink>
                                <FooterLink to='/'>FAQ &amp; Support</FooterLink>
                                <FooterLink to='/'>Affiliate Program</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                                <FooterLink to='/'>Linkedin</FooterLink>
                            </FooterLinks>

                        </FooterLinksWrapper>
                    </FooterLinkContainer>
                    <FooterCopyRight to='https://github.com/xessiveobserver'> &copy; Copyright 2021, Designed and coded with 💛 by Xessive Observer</FooterCopyRight>
                </FooterContainer>
            </FooterSection>

        </div>
    )
}



