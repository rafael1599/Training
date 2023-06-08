import React from "react";
import styled from "styled-components"
import logo from "../../assets/images/logo.svg";
import { colorPrimario } from "../UI/variables";


const StyleHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.nav`
  height: 50px;
  width: 50px;
`
const BotonHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: ${({primary}) => primary ? "white" : colorPrimario};
  background: ${({primary}) => primary ? "transparent" : "white"};
`



const Header = () => {
  return (
    <StyleHeader>
      <Logo src={logo} alt="Logo Smart Bank" />
      <div>
        <BotonHeader href="https://google.com">
          Ayuda
        </BotonHeader>
        <BotonHeader primary href="https://google.com">
          Salir
        </BotonHeader>
      </div>
    </StyleHeader>
  );
};

export default Header;
