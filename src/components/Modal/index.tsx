import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import imgNull from "../../assets/divNull.svg";
import hamburguer from "../../assets/hamburger.svg";
import { FaTrash } from "react-icons/fa";
import { ButtonDefault } from "../../styles/button";
import {
  ButtonCloseModal,
  DivTitleModal,
  ModalContainer,
  ModalWrapper,
} from "./styles";
import { ListCart } from "../ListCart/styles";
import { CartItem } from "../CartItem/styles";

export const ModalCart = () => {
  const { modal, setModal } = useContext(CartContext);
  return (
    <ModalWrapper>
      <ModalContainer>
        <DivTitleModal>
          <h2>Carrinho de Compras</h2>
          <ButtonCloseModal onClick={() => setModal(false)}>X</ButtonCloseModal>
        </DivTitleModal>
        {/* <img
          className="divNull"
          src={imgNull}
          alt="Não existem compras no carrinho"
        /> */}
        <ListCart>
          <CartItem>
            <img src={hamburguer} alt="" />
            <h2>Hamburguer</h2>
            <button>
              <FaTrash className="trash" />
            </button>
            <div>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </CartItem>
          <div>
            <div>
              Total: <span>R$ 50.00</span>
            </div>
            <ButtonDefault colorBtn={"buttoGrey"} width={"100%"}>
              Remover Todos{" "}
            </ButtonDefault>
          </div>
        </ListCart>
      </ModalContainer>
    </ModalWrapper>
  );
};
