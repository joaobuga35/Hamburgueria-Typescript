import { createContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";

interface iContext {
  children?: React.ReactNode;
}

interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface iLoginForm {
  email: string;
  password: string;
}

interface iUserContextType {
  navigate: NavigateFunction;
  loading: boolean;
  userRegister: (form: iRegisterForm) => Promise<void>;
  userLogin: (form: iLoginForm) => Promise<void>;
  token?: string | null;
  remove: () => void;
}

export const UserContext = createContext<iUserContextType>(
  {} as iUserContextType
);

export const UserProvider = ({ children }: iContext) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  const remove = () => {
    localStorage.removeItem("@TOKEN");
  };

  const userLogin = async (form: iLoginForm) => {
    const load = toast.loading("Aguarde um instante...");
    try {
      const response = await api.post("login", form);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast.update(load, {
        render: "Logado com sucesso!",
        type: "success",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.update(load, {
        render: "Email ou senha incorretos!",
        type: "error",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const userRegister = async (form: iRegisterForm) => {
    const load = toast.loading("Aguarde um instante...");
    try {
      const response = await api.post("users", form);
      toast.update(load, {
        render: "Cadastrado com sucesso!",
        type: "success",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    } catch (error) {
      toast.update(load, {
        render: "Usuário já existente!",
        type: "error",
        isLoading: false,
        theme: "light",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ navigate, loading, userRegister, userLogin, token, remove }}
    >
      {children}
    </UserContext.Provider>
  );
};
