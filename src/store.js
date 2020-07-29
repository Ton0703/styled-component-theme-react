import React, { createContext, useReducer } from "react";

const theme =
  window.localStorage.getItem("theme") === null
    ? "light"
    : window.localStorage.getItem("theme");

const initialState = {
  theme,
};

export const ThemeContext = createContext(null);

function ThemeReducer(state, action) {
  switch (action.type) {
    case "THEME_CHANGE": {
      const theme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", theme);
      return {
        ...state,
        theme,
      };
    }
    default:
      return state;
  }
}

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default GlobalContext;
