import { actionTypes } from "./actions";

function next(state, action) {
  return {
    ...state,
    currentIndex:
      (state.currentIndex + 1) %
      state.slides.length,
    isPlaying:
      action.type === actionTypes.PROGRESS // not true for "NEXT" (dispatched by nav click)
  };
}

function prev(state, action) {
  return {
    ...state,
    currentIndex:
      (state.currentIndex -
        1 +
        state.slides.length) %
      state.slides.length,
    isPlaying: false
  };
}

function goto(state, action) {
  return {
    ...state,
    currentIndex: action.payload,
    isPlaying: false
  };
}

function play(state, action) {
  return {
    ...state,
    isPlaying: true
  };
}

function pause(state, action) {
  return {
    ...state,
    isPlaying: false
  };
}

// no state=initalState (as in Redux). This reducer is for useReducer Hook
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PROGRESS:
    case actionTypes.NEXT:
      return next(state, action);
    case actionTypes.PREV:
      return prev(state, action);
    case actionTypes.GOTO:
      return goto(state, action);
    case actionTypes.PLAY:
      return play(state, action);
    case actionTypes.PAUSE:
      return pause(state, action);
    default:
      return state;
  }
};

export default reducer;
