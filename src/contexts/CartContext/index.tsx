import { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../services/api";

interface iContext {
  children?: React.ReactNode;
}

interface iCartContext {
  products: any[];
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iContext) => {
  const { token, navigate } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        if (token) {
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [token, products]);
  return (
    <CartContext.Provider value={{ products, modal, setModal }}>
      {children}
    </CartContext.Provider>
  );
};
