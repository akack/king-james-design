import React from "react";
import {
  CardSlideContainer,
  ContentContainer,
  Line,
  SlideContainer,
  SlideText,
  SlideTextHeader,
  WhatWeDoContainerFlex,
  WhatWeDoTextHeader,
} from "../styles/main.style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CardSlider({ slides }) {
  return (
    <CardSlideContainer>
      <WhatWeDoContainerFlex>
        <Line />
        <WhatWeDoTextHeader>Case studies</WhatWeDoTextHeader>
      </WhatWeDoContainerFlex>
      <Carousel
        responsive={responsive}
        showDots={false}
        arrows={false}
        infinite={true}
        autoPlay={true}
      >
        {slides.map(function (object, i) {
          return (
            <SlideContainer slide={object.imageUrl} key={i}>
              <ContentContainer>
                <SlideTextHeader>{object.title}</SlideTextHeader>
                <SlideText>{object.description}</SlideText>
              </ContentContainer>
            </SlideContainer>
          );
        })}
      </Carousel>
    </CardSlideContainer>
  );
}

export default CardSlider;
