import { HeaderStyle } from "./styles";
import logo from "../../assets/logoburguer.svg";
import { FiShoppingBag } from "react-icons/fi";

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <img src={logo} alt="logo" />
        <div className="divContent">
          <h2>
            <FiShoppingBag className="icon" />
          </h2>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </div>
      </HeaderStyle>
    </>
  );
};
