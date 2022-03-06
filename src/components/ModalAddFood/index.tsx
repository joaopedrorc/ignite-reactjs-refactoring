import React, { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form, Title, Button, ButtonText, ButtonIcon } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface FoodProps {
  description: string;
  image: string;
  name: string;
  price: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => {};
  handleAddFood: (data: FoodProps) => {};
}

const ModalAddFood = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}: ModalAddFoodProps) => {
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodProps) => {
    console.log(data);
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Title>Novo Prato</Title>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <Button type="submit" data-testid="add-food-button">
          <ButtonText className="text">Adicionar Prato</ButtonText>
          <ButtonIcon className="icon">
            <FiCheckSquare size={24} />
          </ButtonIcon>
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
