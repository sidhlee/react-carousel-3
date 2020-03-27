import React, { useEffect } from "react";
import styled from "styled-components";

import {
  CarouselStateProvider,
  useCarouselState,
  useCarouselDispatch
} from "./store/";
import { SLIDE_DURATION } from "./common/vars/constants";

import Slides from "./features/slides/Slides";
import SlideNav from "./features/slideNav/SlideNav";
import Controls from "./features/controls/Controls";
import ProgressBar from "./features/progressBar/ProgressBar";
import { actionTypes } from "./store/actions";

const StyledCarousel = styled.section``;

function Carousel(props) {
  const state = useCarouselState();
  const dispatch = useCarouselDispatch();
  useEffect(() => {
    if (state.isPlaying) {
      let timeout = setTimeout(() => {
        dispatch({ type: actionTypes.PROGRESS });
      }, SLIDE_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [state, dispatch]);

  return (
    <StyledCarousel>
      <Slides />
      <SlideNav />
      <Controls />
      <ProgressBar />
    </StyledCarousel>
  );
}

export default function App() {
  return (
    <CarouselStateProvider>
      <Carousel />
    </CarouselStateProvider>
  );
}
