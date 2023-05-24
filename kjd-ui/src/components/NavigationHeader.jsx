import React from "react";
import Nav from "react-bootstrap/Nav";
import {
  LetTalkButton,
  LetTalkButtonText,
  NavContainer,
  NavigationHeaderContainer,
} from "../styles/main.style";
import {
  Container,
  Image,
  Navbar,
} from "react-bootstrap";
import logo  from "../kjd-assets/logo.svg";
function NavigationHeader() {
  return (
    <NavigationHeaderContainer>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ minHeight: 80, alignItems: "center" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={logo}
              style={{
                width: 53.29,
                height: 32,
              }}
              alt="kjd logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavContainer className="me-auto">
              <NavContainer.Link href="#features" style={style.text}>
                Services
              </NavContainer.Link>
              <NavContainer.Link href="#pricing" style={style.text}>
                Industries
              </NavContainer.Link>
              <NavContainer.Link href="#pricing" style={style.text}>
                Cases
              </NavContainer.Link>
              <NavContainer.Link href="#pricing" style={style.text}>
                Contact
              </NavContainer.Link>
            </NavContainer>
            <Nav>
              <LetTalkButton>
                <LetTalkButtonText>Let's Talk</LetTalkButtonText>
              </LetTalkButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavigationHeaderContainer>
  );
}
const style = {
  text: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 14,
    color: "#FFFFFF",
  },
  center: {
    justifyContent: "center",
    flex: 1,
  },
};

export default NavigationHeader;
