import { Button, Col, Nav, Row } from "react-bootstrap";
import styled from "styled-components";
export const Container = styled.section`
  max-width: 90%;
  align-self: center;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

export const HeroBannerContainer = styled.section`
  width: 100%;
  min-height: 700px;
  left: 0px;
  top: 80px;
  background-image: url(${(props) => props.banner});
  background-size: cover;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  background-position: center center;
`;

export const HeroBannerDiv = styled.div`
  min-height: 150px;
  position: absolute;
  top: 500px;
`;

export const TextH1 = styled.h1`
  position: relative;
  left: 0%;
  right: 2.94%;
  top: 0%;
  bottom: -15.52%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  color: #fafafa;
`;

export const BannerTextP = styled.p`
  width: 80%;
  min-height: 50px;
  left: 80px;
  top: 456px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #f5f5f5;
  word-wrap: wrap;
`;

export const BannerButton = styled(Button)`
  align-items: center;
  padding: 10px 20px;
  width: 127px;
  height: 41px;
  background: #70259b;
  border-radius: 25px;
  flex: 1;
  border-color: #70259b;
`;

export const BannerButtonText = styled.p`
  width: 87px;
  height: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  flex: none;
  flex-grow: 0;
  position: relative;
  top: -4px;
`;

export const NavigationHeaderContainer = styled.section`
  width: 100%;
  min-height: 80px;
  left: 0px;
  top: 0px;
  align-items: center;
  justify-content: center;
  background: #70259b;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  z-index: 999;
`;

//What we do section
export const WhatWeDoContainer = styled.section`
  background-color: #ffffff;
  margin-top: 60px;
`;

export const Line = styled.hr`
  width: 40px;
  height: 4px;
  left: 85px;
  top: 779px;
  background: ${(props) => (props.footer ? "#D100C9" : "#d100c9")};
`;

export const WhatWeDoTextHeader = styled.p`
  min-width: 135px;
  height: 29px;
  left: 145px;
  top: 764px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: ${(props) => (props.footer ? "#FFFFFF" : "#000000")};
  margin-left: 20px;
`;

export const TextWhatWeDo = styled.h1`
  min-height: 225px;
  left: 85px;
  top: 839px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #242424;
`;

export const WhatWeDoContainerFlex = styled.section`
  display: flex;
  margin-top: ${(props) => (props.service ? "60px" : "20px")};
`;
export const WhatWeDoContainerFlexContent = styled.div`
  margin-top: ${(props) => (props.service ? "60px" : "20px")};
`;

export const ServiceContainer = styled.div`
  width: 25%;
  min-height: 150px;
  text-align: left;
`;

export const ServiceText = styled.p`
  width: 290px;
  height: 212px;
  left: 85px;
  top: 1328px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #000000;
`;

export const ServiceImage = styled.img`
  width: 64px;
  height: 64px;
  color: white;
`;

export const ServiceHeader = styled.h1`
  font-family: "Inter";
  width: 290px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const LetTalkButton = styled(Button)`
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 110px;
  height: 37px;
  background: #ffffff;
  border-radius: 50px;
  border-color: #ffffff;
`;

export const LetTalkButtonText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #70259b;
`;

export const NavContainer = styled(Nav)`
  justify-content: center;
  flex: 1;
`;

//card slide section
export const CardSlideContainer = styled.section`
  background-color: #ffffff;
  margin-top: 40px;
`;

//Card slides
export const SlideContainer = styled.div`
  width: 399px;
  height: 399px;
  background: url(${(props) => props.slide}) no-repeat;
  background-size: cover;
  padding: 16px;
  margin-right: 10px;
  background-position: center center;
`;

export const ContentContainer = styled.div`
  min-height: 150px;
  position: absolute;
  top: 280px;
`;

export const SlideTextHeader = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  color: #ffffff;
`;

export const SlideText = styled.p`
  font-family: "Inter";
  width: 351px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  word-wrap: wrap;
`;

//Footer
export const FooterContainer = styled.section`
  background-color: #ffffff;
  margin-top: 60px;
  min-height: 500px;
  left: 0px;
  top: 2810px;
  background: #430964;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const FooterContentContainer = styled(Row)`
  background-color: transparent;
  margin-top: ${(props) => (props.links ? "90px" : "20px")};
`;

export const FooterItem = styled(Col)`
  background-color: transparent;
`;

export const FooterH1 = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #f5f5f5;
`;

export const FooterText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  margin: 0px;
`;
export const FooterEmail = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  text-decoration: ${(props) => (props.email ? "underline" : "none")};
  list-style-type: none;
`;

export const Footerli = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  list-style-type: none;
`;

//clients
export const ClientsContainer = styled.section`
  background-color: #ffffff;
  margin-top: 60px;
`;

export const ClientsContentContainer = styled.section`
  background-color: #ffffff;
  display: flex;
  margin-top: 60px;
`;

export const ClientsItem = styled.section`
  display: inline;
  width: 20%;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
export const ClientImage = styled.img`
  width: 100%;
  height: 40px;
`;

export const ClientTextH1 = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #242424;
`;
