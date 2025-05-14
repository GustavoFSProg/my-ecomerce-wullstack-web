import dados from "../../assets/dados.jpg";
import styled from "styled-components";

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
  background: gray;
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
            <p style={{ fontSize: "27px", fontFamily: "Roboto" }}>SHOOPÉRS</p>
          </div>
        </NavBarContainer>
      </Container>
    </>
  );
}

export default NavBar;
