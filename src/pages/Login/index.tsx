import { DivLogin } from "./styles";
import { FormStyle } from "../../components/Form/styles";
import { DivInputBox } from "../../components/Input/styles";
import { ButtonDefault } from "../../styles/button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { registerSchema } from "./registerSchemaLogin";

interface iLoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginForm>({
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iLoginForm> = async (data) => {
    await userLogin(data);
    reset();
  };
  return (
    <DivLogin>
      <Header></Header>
      <FormStyle
        noValidate
        onSubmit={handleSubmit(submit)}
        width={"35rem"}
        height={"40rem"}
      >
        <h3>Login</h3>
        <DivInputBox>
          <Input
            type={"email"}
            id={"email"}
            placeholder={"email"}
            register={register("email")}
          />
          {errors.email && <p className="errors">{errors.email.message}</p>}
        </DivInputBox>
        <DivInputBox>
          <Input
            type={"password"}
            id={"password"}
            placeholder={"senha"}
            register={register("password")}
          />
          {errors.password && (
            <p className="errors">{errors.password.message}</p>
          )}
        </DivInputBox>
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
