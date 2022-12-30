import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import imgNull from "../../assets/divNull.svg";
import {
  ButtonCloseModal,
  DivTitleModal,
  ModalContainer,
  ModalWrapper,
} from "./styles";

export const ModalCart = () => {
  const { modal, setModal } = useContext(CartContext);
  return (
    <ModalWrapper>
      <ModalContainer>
        <DivTitleModal>
          <h2>Carrinho de Compras</h2>
          <ButtonCloseModal onClick={() => setModal(false)}>X</ButtonCloseModal>
        </DivTitleModal>
        <img
          className="divNull"
          src={imgNull}
          alt="Não existem compras no carrinho"
        />
      </ModalContainer>
    </ModalWrapper>
  );
};
