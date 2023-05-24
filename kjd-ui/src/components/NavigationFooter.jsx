import React from "react";
import {
  FooterContainer,
  FooterContentContainer,
  FooterEmail,
  FooterH1,
  FooterItem,
  FooterText,
  Footerli,
  Line,
  WhatWeDoContainerFlex,
  WhatWeDoTextHeader,
} from "../styles/main.style";
import { Container } from "react-bootstrap";

function NavigationFooter() {
  return (
    <FooterContainer>
      <Container>
        <WhatWeDoContainerFlex>
          <Line footer={true} />
          <WhatWeDoTextHeader footer={true}>Contact us</WhatWeDoTextHeader>
        </WhatWeDoContainerFlex>

        <FooterContentContainer>
          <FooterItem sm={8}>
            <FooterH1>Have a project in mind?</FooterH1>
            <FooterH1>Let's make it happen</FooterH1>
          </FooterItem>
          <FooterItem>
            <FooterText> 22 Lawley Road, Woodstock, 7925</FooterText>
            <FooterText>Cape Town, South Africa</FooterText>
            <FooterText>+27 21 469 1500</FooterText>
            <FooterEmail href="mailto:enquirie@kingjames.co.za" email={true}>
              enquirie@kingjames.co.za
            </FooterEmail>
          </FooterItem>
        </FooterContentContainer>
        <FooterContentContainer links={true}>
          <FooterItem>
            <Footerli>
              <FooterEmail href="#">Terms of service</FooterEmail>
            </Footerli>
            <Footerli>
              <FooterEmail href="#">Privacy policy</FooterEmail>
            </Footerli>
            <Footerli>
              <FooterEmail href="#">Impressum</FooterEmail>
            </Footerli>
          </FooterItem>
          <FooterItem>
            <Footerli>
              <FooterEmail href="#">Facebook</FooterEmail>
            </Footerli>
            <Footerli>
              <FooterEmail href="#">Instagram</FooterEmail>
            </Footerli>
            <Footerli>
              <FooterEmail href="#">Twitter</FooterEmail>
            </Footerli>
          </FooterItem>
          <FooterItem>
            <Footerli>
              <FooterEmail href="#">Github</FooterEmail>
            </Footerli>
            <Footerli>
              <FooterEmail href="#">Linkedin</FooterEmail>
            </Footerli>
            <Footerli>
              <FooterEmail href="#">Teams</FooterEmail>
            </Footerli>
          </FooterItem>
          <FooterItem>
            <Footerli>
              <FooterEmail href="#">Youtube</FooterEmail>
            </Footerli>
            <Footerli>
              <FooterEmail href="#">Bahance</FooterEmail>
            </Footerli>
            <Footerli>
              <FooterEmail href="#">Dribbie</FooterEmail>
            </Footerli>
          </FooterItem>
          <FooterItem sm={4}>
            <Footerli>
              <FooterEmail href="#">Explore open jobs</FooterEmail>
            </Footerli>
            <br />
            <Footerli>©2000—2022 King James Digital</Footerli>
          </FooterItem>
        </FooterContentContainer>
      </Container>
    </FooterContainer>
  );
}

export default NavigationFooter;
