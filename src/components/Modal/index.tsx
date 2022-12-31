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
  const {
    modal,
    setModal,
    products,
    itemCart,
    add,
    removeOne,
    removeProducts,
    removeAll,
    totalValue,
  } = useContext(CartContext);
  return (
    <ModalWrapper>
      <ModalContainer>
        <DivTitleModal>
          <h2>Carrinho de Compras</h2>
          <ButtonCloseModal onClick={() => setModal(false)}>X</ButtonCloseModal>
        </DivTitleModal>
        {itemCart.length === 0 ? (
          <img
            className="divNull"
            src={imgNull}
            alt="Não existem compras no carrinho"
          />
        ) : (
          <section className="sectionList">
            <ListCart>
              {itemCart.map((elem) => (
                <CartItem key={elem.id}>
                  <img src={elem.img} alt="" />
                  <div className="divAlign">
                    <div className="divTitleItem">
                      <h2>{elem.name}</h2>
                      <button
                        className="btnTrash"
                        onClick={() => removeProducts(elem.id)}
                      >
                        <FaTrash className="trash" />
                      </button>
                    </div>
                    <div className="divBtnAddRemove">
                      <button onClick={() => removeOne(elem, elem.id)}>
                        -
                      </button>
                      <span>{elem.quant}</span>
                      <button onClick={() => add(elem, elem.id)}>+</button>
                    </div>
                  </div>
                </CartItem>
              ))}
            </ListCart>
            <div className="divBtnRemoveAll">
              <div className="divTotal">
                <h3>Total </h3>
                <span>R$ {totalValue()}</span>
              </div>
              <ButtonDefault
                onClick={() => removeAll()}
                colorBtn={"buttoGrey"}
                width={"100%"}
              >
                Remover Todos{" "}
              </ButtonDefault>
            </div>
          </section>
        )}
      </ModalContainer>
    </ModalWrapper>
  );
};
