import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  /* background: gray; */
  justify-content: center;
  align-items: center;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <AppContainer>aa</AppContainer>
    </>
  );
}

export default App;
