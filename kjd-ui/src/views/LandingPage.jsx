import React, { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import NavigationHeader from "../components/NavigationHeader";
import WhatWeDo from "../components/WhatWeDo";
import CardSlider from "../components/CardSlider";
import Clients from "../components/Clients";
import NavigationFooter from "../components/NavigationFooter";
import { Container } from "react-bootstrap";
import { ApiService } from "../service/api.service";

export default function LandingPage() {
  const [slides, setSlides] = useState([]);
  const apiService = new ApiService();

  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = async () => {
    try {
      const slides = await apiService.getSlides();
      setSlides(slides);
    } catch (error) {console.log(error)}
  };

  return (
    <>
      <NavigationHeader />
      <HeroBanner />
      <Container>
        <WhatWeDo />
        <CardSlider slides={slides} />
        <Clients />
      </Container>
      <NavigationFooter />
    </>
  );
}
