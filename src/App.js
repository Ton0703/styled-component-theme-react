import React, { useContext } from "react";
import { ThemeContext } from "./store";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 25px;
  background: ${(props) => props.theme.text};
  position: relative;
  transition: all 0.3s ease;
`;

function App() {
  const { theme, dispatch } = useContext(ThemeContext);

  const Point = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => props.theme.background};
    position: absolute;
    top: 5px;
    cursor: pointer;
    transform: translateX(${theme === "light" ? "5px" : "55px"});
  `;

  const Text = styled.div`
    width: 40px;
    height: 40px;
    font-size: 12px;
    color: ${(props) => props.theme.background};
    position: absolute;
    top: 5px;
    transform: translateX(${theme === "light" ? "55px" : "5px"});
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  `;

  const handleClick = () => {
    dispatch({
      type: "THEME_CHANGE",
    });
  };

  return (
    <Container>
      <Button>
        <Point onClick={handleClick} />
        <Text>
          {theme === 'light' ? 'light' : 'dark'}
        </Text>
      </Button>
    </Container>
  );
}

export default App;
