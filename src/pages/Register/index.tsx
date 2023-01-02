import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormStyle } from "../../components/Form/styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { DivInputBox } from "../../components/Input/styles";
import { ButtonDefault } from "../../styles/button";
import { DivRegister } from "./styles";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import "animate.css";

interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterForm> = async (data) => {
    await userRegister(data);
  };
  return (
    <DivRegister className="animate__animated animate__zoomInDown">
      <Header></Header>
      <FormStyle
        noValidate
        onSubmit={handleSubmit(submit)}
        height={"50rem"}
        width={"35rem"}
      >
        <div className="divInfoRegister">
          <h3>Cadastro</h3>
          <Link className="redirectedLogin" to={"/"}>
            Retornar para o login
          </Link>
        </div>
        <DivInputBox>
          <Input
            id={"name"}
            type={"text"}
            placeholder={"nome"}
            register={register("name")}
          />
          {errors.name && <p className="errors">{errors.name.message}</p>}
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"email"}
            type={"email"}
            placeholder={"email"}
            register={register("email")}
          />
          {errors.email && <p className="errors">{errors.email.message}</p>}
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"password"}
            type={"password"}
            placeholder={"senha"}
            register={register("password")}
          />
          {errors.password && (
            <p className="errors">{errors.password.message}</p>
          )}
        </DivInputBox>
        <DivInputBox>
          <Input
            id={"confirmPassword"}
            type={"password"}
            placeholder={"confirme sua senha"}
            register={register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="errors">{errors.confirmPassword.message}</p>
          )}
        </DivInputBox>
        <ButtonDefault type="submit" colorBtn={"buttoGrey"} width={"100%"}>
          Cadastrar
        </ButtonDefault>
      </FormStyle>
    </DivRegister>
  );
};
