import React from "react";
import { FiPlusSquare } from "react-icons/fi";

import { Container, HeaderDiv, Button, ButtonText, ButtonIcon } from "./styles";
import Logo from "../../assets/logo.svg";

interface HeaderProps {
  openModal: () => void;
}

const Header = ({ openModal }: HeaderProps) => {
  return (
    <Container>
      <HeaderDiv>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <Button type="button" onClick={openModal}>
            <ButtonText className="text">Novo Prato</ButtonText>
            <ButtonIcon className="icon">
              <FiPlusSquare size={24} />
            </ButtonIcon>
          </Button>
        </nav>
      </HeaderDiv>
    </Container>
  );
};

export default Header;
