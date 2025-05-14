import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";
import image1 from "./assets/ps5-slim.png";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 80vw;
  height: auto;
  /* background: gray; */
  justify-content: center;
  align-items: center;
  margin-left: 135px;
  margin-top: 50px;
  padding-bottom: 100px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 47px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 250px;
  height: 400px;
  background: gray;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <AppContainer>
        <Card>
          <img src={image1} width="200" alt="image1" />
          <p>Placa Mãe</p>
          <p>R$ 550,00</p>
        </Card>

        <Card>
          <img src={image1} width="200" alt="image1" />
          <p>Placa Mãe</p>
          <p>R$ 550,00</p>
        </Card>
        <Card>
          <img src={image1} width="200" alt="image1" />
          <p>Placa Mãe</p>
          <p>R$ 550,00</p>
        </Card>
        <Card>
          <img src={image1} width="200" alt="image1" />
          <p>Placa Mãe</p>
          <p>R$ 550,00</p>
        </Card>
        <Card>
          <img src={image1} width="200" alt="image1" />
          <p>Placa Mãe</p>
          <p>R$ 550,00</p>
        </Card>
        <Card>
          <img src={image1} width="200" alt="image1" />
          <p>Placa Mãe</p>
          <p>R$ 550,00</p>
        </Card>
        <Card>
          <img src={image1} width="200" alt="image1" />
          <p>Placa Mãe</p>
          <p>R$ 550,00</p>
        </Card>
        <Card>
          <img src={image1} width="200" alt="image1" />
          <p>Placa Mãe</p>
          <p>R$ 550,00</p>
        </Card>
      </AppContainer>
    </>
  );
}

export default App;
