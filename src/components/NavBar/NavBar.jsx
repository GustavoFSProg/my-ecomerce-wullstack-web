import dados from "../../assets/dados.jpg";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";

const NavBarContainer = styled.div`
  display: flex;
  width: 80vw;
  height: auto;
  padding: 10px;
  background: lightgrey;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  background: lightgrey;
  justify-content: center;
  /* align-items: center; */
`;

function NavBar() {
  return (
    <>
      <Container>
        <NavBarContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <img
              style={{ borderRadius: "10px", marginRight: "15px" }}
              src={dados}
              width="70"
              height="60"
              alt="dados"
            />
            <p style={{ fontSize: "24px", fontFamily: "Roboto" }}>SHOOPÉRS</p>
          </div>
          <div
            style={{
              display: "flex",
              width: "220px",
              justifyContent: "space-between",
            }}
          >
            <span>Shop</span>
            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <button style={{ marginRight: "20px" }}>LOGIN</button>
            <IoCartOutline style={{ fontSize: "36px" }} />
          </div>
        </NavBarContainer>
      </Container>
    </>
  );
}

export default NavBar;
