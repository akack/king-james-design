import React from "react";
import {
  ClientsContainer,
  Line,
  WhatWeDoContainerFlex,
  WhatWeDoTextHeader,
  ClientsContentContainer,
  ClientsItem,
  ClientImage,
  ClientTextH1,
} from "../styles/main.style";

import { Row } from "react-bootstrap";
import { clients } from "../data/clients";

function Clients() {
  return (
    <ClientsContainer>
      <WhatWeDoContainerFlex>
        <Line />
        <WhatWeDoTextHeader>You’ll be in good company</WhatWeDoTextHeader>
      </WhatWeDoContainerFlex>
      <ClientTextH1>Trusted by leading brands</ClientTextH1>
      <ClientsContentContainer>
        <Row>
          {clients.map(function (client, i) {
            console.log(client.image);
            return (
              <ClientsItem>
                <ClientImage src={client.image} />
              </ClientsItem>
            );
          })}
        </Row>
      </ClientsContentContainer>
    </ClientsContainer>
  );
}

export default Clients;
