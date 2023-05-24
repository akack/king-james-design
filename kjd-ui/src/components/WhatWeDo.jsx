import React from "react";
import {
  Line,
  ServiceContainer,
  ServiceHeader,
  ServiceImage,
  ServiceText,
  TextWhatWeDo,
  WhatWeDoContainer,
  WhatWeDoContainerFlex,
  WhatWeDoTextHeader,
  WhatWeDoContainerFlexContent
} from "../styles/main.style";
import { Col, Row } from "react-bootstrap";
const web = require("../kjd-assets/web.png");
const app = require("../kjd-assets/App.png");
const blockchain = require("../kjd-assets/blockchain.png");
const ux = require("../kjd-assets/UX.png");

function WhatWeDo({ servicesData }) {
  return (
    <WhatWeDoContainer>
      <WhatWeDoContainerFlex>
        <Line />
        <WhatWeDoTextHeader>What we do</WhatWeDoTextHeader>
      </WhatWeDoContainerFlex>

      <TextWhatWeDo>
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </TextWhatWeDo>

      <WhatWeDoContainerFlexContent service={true}>
        <Row>
          <Col xs>
            <ServiceContainer>
              <ServiceImage src={web} />
              <ServiceHeader>Web Development</ServiceHeader>
              <ServiceText>
                We use cutting-edge web development technologies to help our
                clients fulfill their business goals through functional,
                reliable solutions.
              </ServiceText>
            </ServiceContainer>
          </Col>
          <Col xs>
            <ServiceContainer>
              <ServiceImage src={ux} />
              <ServiceHeader>User experience & design</ServiceHeader>
              <ServiceText>
                Our complete web design services will bring your ideas to life
                and provide you with a sleek, high-performing product that
                elevates your business.
              </ServiceText>
            </ServiceContainer>
          </Col>
          <Col>
            <ServiceContainer>
              <ServiceImage src={app} />
              <ServiceHeader>Mobile app development</ServiceHeader>
              <ServiceText>
                Our extensive mobile development experience allows us to create
                custom native and cross-platform iOS and Android mobile
                solutions for our clients.
              </ServiceText>
            </ServiceContainer>
          </Col>
          <Col xs>
            <ServiceContainer>
              <ServiceImage src={blockchain} />
              <ServiceHeader>Blockchain solutions</ServiceHeader>
              <ServiceText>
                We conduct market research to determine the optimal
                blockchain-based solutions to help you grow your company and
                achieve your business goals.
              </ServiceText>
            </ServiceContainer>
          </Col>
        </Row>
      </WhatWeDoContainerFlexContent>
    </WhatWeDoContainer>
  );
}

export default WhatWeDo;
