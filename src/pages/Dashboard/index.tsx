import { LiStyle } from "../../components/Card/styles";
import { HeaderDash } from "../../components/HeaderDashboard";
import { UlStyle } from "../../components/ListProducts/styles";
import { DivDash } from "./styles";
import { ButtonDefault } from "../../styles/button";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ModalCart } from "../../components/Modal";

export const Dashboard = () => {
  const { products, modal, setModal } = useContext(CartContext);

  return (
    <DivDash>
      {modal ? <ModalCart></ModalCart> : null}
      <HeaderDash></HeaderDash>
      <main>
        <UlStyle>
          {products.map((elem) => (
            <LiStyle key={elem.id} id={elem.id}>
              <div className="divImg">
                <img src={elem.img} alt="burguer" />
              </div>
              <div className="divDescription">
                <h2>{elem.name}</h2>
                <span className="type">{elem.category}</span>
                <span className="price">R$ {elem.price.toFixed(2)}</span>
                <ButtonDefault
                  id={elem.id}
                  width={"10.6rem"}
                  colorBtn={"buttonGreen"}
                >
                  Adicionar
                </ButtonDefault>
              </div>
            </LiStyle>
          ))}
        </UlStyle>
      </main>
    </DivDash>
  );
};
