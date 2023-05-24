import React from "react";
import {
  BannerButton,
  BannerButtonText,
  BannerTextP,
  HeroBannerContainer,
  HeroBannerDiv,
  TextH1,
} from "../styles/main.style";
import { Container } from "react-bootstrap";
const image = require("../kjd-assets/confidence.jpeg");

function HeroBanner() {
  return (
    <HeroBannerContainer banner={image}>
      <Container>
        <HeroBannerDiv>
          <TextH1>Live with Confidence</TextH1>
          <BannerTextP>
            José Mourinho brings confidence to pan-African Sanlam campaign.
          </BannerTextP>
          <BannerButton>
            <BannerButtonText>View project</BannerButtonText>
          </BannerButton>
        </HeroBannerDiv>
      </Container>
    </HeroBannerContainer>
  );
}

export default HeroBanner;
