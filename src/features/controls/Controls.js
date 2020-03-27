import React from "react";

import {
  useCarouselDispatch,
  useCarouselState
} from "../../store/";
import styled from "styled-components";
import {
  FaPlay,
  FaPause,
  FaBackward,
  FaForward
} from "react-icons/fa";
import colors from "../../common/vars/colors";
import { actionTypes } from "src/store/actions";

const Button = styled.button`
  color: ${colors.opacWhite};
  background: transparent;
  border: none;
  font-size: 3rem;
  width: 2em;
  &:hover,
  &:focus {
    outline: none;
    color: ${colors.lightOpacWhite};
  }
  &:active {
    transform: scale(1.1);
    filter: opacity(1) brightness(1.1)
      drop-shadow(
        0 0 3px hsla(0, 100%, 100%, 0.7)
      );
  }
`;

const StyledControls = styled.div`
  z-index: 1;
  grid-column-start: 3;
  grid-row-start: 3;
  display: flex;
  justify-content: center;
`;

export default function Controls(props) {
  const state = useCarouselState();
  const dispatch = useCarouselDispatch();

  return (
    <StyledControls className="">
      {state.isPlaying ? (
        <Button
          onClick={() =>
            dispatch({ type: actionTypes.PAUSE })
          }
        >
          <FaPause />
        </Button>
      ) : (
        <Button
          onClick={() =>
            dispatch({ type: actionTypes.PLAY })
          }
        >
          <FaPlay />
        </Button>
      )}
      <Spacer width="10px" />
      <Button
        onClick={() =>
          dispatch({ type: actionTypes.PREV })
        }
      >
        <FaBackward />
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: actionTypes.NEXT })
        }
      >
        <FaForward />
      </Button>
    </StyledControls>
  );
}

function Spacer({ width }) {
  return (
    <div
      style={{ display: "incline-block", width }}
    />
  );
}
