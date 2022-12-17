import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iContext {
  children?: React.ReactNode;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }: iContext) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <UserContext.Provider value={{ navigate, loading }}>
      {children}
    </UserContext.Provider>
  );
};
