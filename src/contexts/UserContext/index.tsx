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

interface iUserContextType {
  navigate: NavigateFunction;
  loading: boolean;
  userRegister: (form: iRegisterForm) => Promise<void>;
}

export const UserContext = createContext<iUserContextType>(
  {} as iUserContextType
);

export const UserProvider = ({ children }: iContext) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <UserContext.Provider value={{ navigate, loading, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
