import React from "react";
import { useCarouselState } from "../../store/";

import styled from "styled-components";
import colors from "../../common/vars/colors";
import mixins from "../../common/vars/mixins";

const StyledSlide = styled.li`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  list-style-type: none;
  &[aria-hidden="true"] {
    opacity: 0;
    z-index: -1;
    transition-delay: 200ms;
  }
  .slideText {
    position: absolute;
    ${props =>
      props.isBottom ? "bottom: 8em;" : null}
    background: ${colors.opacWhite};
    padding: 1.5em 2.5em;
    display: inline-block;
    margin: 1.25em;
    ${mixins.shadow}
    h2 {
      font-size: 2rem;
    }
    p {
      ${mixins.p}
    }
  }
`;

export default function Slides(props) {
  const state = useCarouselState();
  const slides = state.slides.map((slide, i) => {
    return (
      <StyledSlide
        aria-hidden={i !== state.currentIndex}
        key={slide.id}
        id={slide.id}
        src={slide.src}
        isBottom={slide.position === "bottom"}
      >
        <div className="slideText">
          <h2>{slide.title}</h2>
          <p>{slide.desc}</p>
        </div>
      </StyledSlide>
    );
  });
  return slides;
}
