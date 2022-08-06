import React, { createContext, useReducer } from "react";
import { initialState } from "./reducer";

export const StateContext = createContext();

const ContextProvider = ({ reducer, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
