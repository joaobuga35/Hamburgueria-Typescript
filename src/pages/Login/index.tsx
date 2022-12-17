import { DivLogin } from "./styles";
import { FormStyle } from "../../components/Form/styles";
import { DivInputBox } from "../../components/Input/styles";
import { ButtonDefault } from "../../styles/button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <DivLogin>
      <Header></Header>
      <FormStyle width={"35rem"} height={"40rem"}>
        <h3>Login</h3>
        {/* <DivInputBox>
          <Input type={"text"} id={"nome"} placeholder={"nome"} />
        </DivInputBox>
        <DivInputBox>
          <Input type={"password"} id={"password"} placeholder={"senha"} />
        </DivInputBox> */}
        <ButtonDefault type="submit" colorBtn={"buttonGreen"} width={"100%"}>
          Logar
        </ButtonDefault>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link className="redirectedBtn" to={"/register"}>
          Cadastrar
        </Link>
      </FormStyle>
    </DivLogin>
  );
};
