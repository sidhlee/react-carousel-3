import React from "react";
import styled from "styled-components";

import { useCarouselState, useCarouselDispatch } from "../../store/";

import colors from "../../common/vars/colors";
import { actionTypes } from "src/store/actions";

const StyledSlideNavItem = styled.li`
  button {
    border-radius: 50%;
    height: 1rem;
    margin: 0 1em;
    border: none;
    background: ${colors.lightOpacWhite};
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    &:focus,
    &.active {
      outline: none;
      transform: scale(0.8);
      filter: brightness(1.2) opacity(1);
      box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2);
    }
    &:active {
      transform: scale(1.1);
      filter: opacity(1) brightness(1.2) drop-shadow(0 0 3px white);
    }
  }
`;

function SlideNavItem(props) {
  return (
    <StyledSlideNavItem>
      <button
        className={props.isActive ? "active" : null}
        onClick={props.clicked}
      />
    </StyledSlideNavItem>
  );
}

// need pos:abs to be seen over abs positioned background (slide url)
const StyledSlideNav = styled.div`
  /* position: absolute;
  bottom: 3em;
  left: 1.5em; */
  grid-column: 1 / -1;
  grid-row: 3;
  justify-self: center;
  display: flex;
  list-style-type: none;
`;
export default function SlideNav(props) {
  const state = useCarouselState();
  const dispatch = useCarouselDispatch();
  const slideNavItems = state.slides.map((slide, i) => {
    return (
      <SlideNavItem
        key={slide.id}
        isActive={i === state.currentIndex}
        clicked={() =>
          dispatch({
            type: actionTypes.GOTO,
            payload: i
          })
        }
      />
    );
  });
  return <StyledSlideNav>{slideNavItems}</StyledSlideNav>;
}
