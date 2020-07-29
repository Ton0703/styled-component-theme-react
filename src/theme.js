import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./store";

const GlobalStyle = createGlobalStyle`
   *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
   html{
    -webkit-font-smoothing: antialiased;
    font-size: 16px; 
}
body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all .3s ease;
}
`;

const darkTheme = {
  background: "#000",
  text: "#fff",
};

const lightTheme = {
  background: "#fff",
  text: "#000",
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
