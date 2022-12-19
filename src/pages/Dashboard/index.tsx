import { LiStyle } from "../../components/Card/styles";
import { HeaderDash } from "../../components/HeaderDashboard";
import { UlStyle } from "../../components/ListProducts/styles";
import { DivDash } from "./styles";
import hamburger from "../../assets/hamburger.svg";
import { ButtonDefault } from "../../styles/button";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const Dashboard = () => {
  const { token } = useContext(UserContext);
  return (
    <DivDash>
      <HeaderDash></HeaderDash>
      <main>
        <UlStyle>
          <LiStyle>
            <div className="divImg">
              <img src={hamburger} alt="burguer" />
            </div>
            <div className="divDescription">
              <h2>X-burguer</h2>
              <span className="type">Sanduiche</span>
              <span className="price">R$ 35.00</span>
              <ButtonDefault width={"10.6rem"} colorBtn={"buttonGreen"}>
                Adicionar
              </ButtonDefault>
            </div>
          </LiStyle>

          <LiStyle>
            <div className="divImg">
              <img src={hamburger} alt="burguer" />
            </div>
            <div className="divDescription">
              <h2>X-burguer</h2>
              <span className="type">Sanduiche</span>
              <span className="price">R$ 35.00</span>
            </div>
          </LiStyle>
          <LiStyle>
            <div className="divImg">
              <img src={hamburger} alt="burguer" />
            </div>
            <div className="divDescription">
              <h2>X-burguer</h2>
              <span className="type">Sanduiche</span>
              <span className="price">R$ 35.00</span>
            </div>
          </LiStyle>
          <LiStyle>
            <div className="divImg">
              <img src={hamburger} alt="burguer" />
            </div>
            <div className="divDescription">
              <h2>X-burguer</h2>
              <span className="type">Sanduiche</span>
              <span className="price">R$ 35.00</span>
            </div>
          </LiStyle>
          <LiStyle>
            <div className="divImg">
              <img src={hamburger} alt="burguer" />
            </div>
            <div className="divDescription">
              <h2>X-burguer</h2>
              <span className="type">Sanduiche</span>
              <span className="price">R$ 35.00</span>
            </div>
          </LiStyle>
          <LiStyle>
            <div className="divImg">
              <img src={hamburger} alt="burguer" />
            </div>
            <div className="divDescription">
              <h2>X-burguer</h2>
              <span className="type">Sanduiche</span>
              <span className="price">R$ 35.00</span>
            </div>
          </LiStyle>
          <LiStyle>
            <div className="divImg">
              <img src={hamburger} alt="burguer" />
            </div>
            <div className="divDescription">
              <h2>X-burguer</h2>
              <span className="type">Sanduiche</span>
              <span className="price">R$ 35.00</span>
            </div>
          </LiStyle>
        </UlStyle>
      </main>
    </DivDash>
  );
};
