import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";
import image1 from "./assets/ps5-slim.png";
import api from "./api";
import { Link, useNavigate } from "react-router-dom";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 80vw;
  height: auto;
  /* background: gray; */
  justify-content: center;
  align-items: center;
  /* margin-left: 135px; */
  margin-top: 50px;
  padding-bottom: 100px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 47px; */
  }
`;

const ContainerCard = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  /* background: green; */
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  /* margin-right: 20px; */

  @media screen and (max-width: 800px) {
    margin-right: 22px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 250px;
  height: 400px;
  background: #d9d9d9;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  border-radius: 10px;
`;

function App() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const { data } = await api.get("/get-products");

      setProducts(data);

      alert(productsArray);
    } catch (error) {
      return alert("ERROR!", error);
    }
  }

  function handleStorage(id) {
    const productsArray = [id];

    productsArray.push([...productsArray, id]);

    localStorage.setItem("Id-Product", productsArray);

    // console.log(`ID: ${id}`);

    // const productsArray = ["ABC"];

    // productsArray.push([...productsArray, id]);

    // console.log(productsArray);

    // navigate("/cart");

    return null;
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar />

      <ContainerCard>
        <AppContainer>
          {products.map((items) => {
            return (
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleStorage(items.id)}
              >
                <div key={items.id}>
                  <Card>
                    <img src={items.image} width="200" alt="image1" />
                    <p>{items.name}</p>
                    <p>R$ {items.price}</p>
                  </Card>
                </div>
              </button>
            );
          })}

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
          {/* <Card>
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
          </Card> */}
        </AppContainer>
      </ContainerCard>
    </>
  );
}

export default App;
