import React from 'react';
import {
  FooterContainer,
  FooterWrapper, FooterLinksContainer,
  FooterLinksWrapper, FooterLinkItems,
  FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo , WebsiteRights,SocialIcons,SocialIconLink
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome =()=>{
    scroll.scrollToTop();
}
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About us</FooterLinkTitle>
                <FooterLink to="/howitworks">How it works</FooterLink>
                <FooterLink to="/testimonials">Testimonials</FooterLink>
                <FooterLink to="/careers">Careers</FooterLink>
                <FooterLink to="/investors">Investors</FooterLink>
                <FooterLink to="/termsofservices">Terms of Services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contact Us</FooterLinkTitle>
                <FooterLink to="/howitworks">Contact</FooterLink>
                <FooterLink to="/testimonials">Support</FooterLink>
                <FooterLink to="/careers">Destination</FooterLink>
                <FooterLink to="/investors">Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Videos</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrapper>
              <SocialLogo to="/" onClick={toggleHome}>
                RJS Bank
              </SocialLogo>
              <WebsiteRights>RJS Bank © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" targer="_banck" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" targer="_banck" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" targer="_banck" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" targer="_banck" aria-label="Twitter">
                <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href="/" targer="_banck" aria-label="LinkedIn">
                <FaLinkedIn/>
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrapper>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;