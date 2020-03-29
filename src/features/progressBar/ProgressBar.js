import React from "react";
import styled from "styled-components";
import { colors } from "../../common/vars";
import useProgress from "./useProgress";
import { constants } from "../../common/vars";
import { useCarouselState } from "../../store";

// defining width inside template string creates new styled-component instance on every frame.
const StyledProgressBar = styled.div.attrs(props => ({
  style: { width: 100 * props.progress + "%" }
}))`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  background: ${colors.opacWhite};
  height: 1em;
`;
export default function ProgressBar() {
  const state = useCarouselState();
  const progress = useProgress(state.isPlaying, constants.SLIDE_DURATION);
  return <StyledProgressBar progress={progress} />;
}
