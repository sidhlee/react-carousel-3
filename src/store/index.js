import React, {
  createContext,
  useReducer,
  useContext
} from "react";
import slides from "../features/slides/images/";

import stateReducer from "./reducer";

// Most of the time default values for createContext are not necessary or useful.
// https://kentcdodds.com/blog/how-to-use-react-context-effectively
const CarouselStateContext = createContext({});
const CarouselDispatchContext = createContext({});

const initialState = {
  currentIndex: 2,
  slides,
  isPlaying: false
};

// HOC that takes children (via props | nesting) and wrap it with StateContext.Provider
const CarouselStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    stateReducer,
    initialState
  );
  return (
    // if you pass an object to value prop (value={{state, dispatch}}),
    // Nesting components will be re-rendered every time StateProvider gets re-rendered.
    <CarouselStateContext.Provider value={state}>
      <CarouselDispatchContext.Provider
        value={dispatch}
      >
        {children}
      </CarouselDispatchContext.Provider>
    </CarouselStateContext.Provider>
  );
};

function useCarouselState() {
  const context = useContext(
    CarouselStateContext
  );
  if (context === undefined) {
    throw new Error(
      "useCarouselState must be used within a CarouselStateProvider"
    );
  }
  return context;
}

function useCarouselDispatch() {
  const context = useContext(
    CarouselDispatchContext
  );
  if (context === undefined) {
    throw new Error(
      "useCarouselDispatch must be used iwhtin a CarouselStateProvider"
    );
  }
  return context;
}

export {
  CarouselStateProvider,
  useCarouselState,
  useCarouselDispatch
};
