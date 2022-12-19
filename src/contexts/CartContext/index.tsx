import { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../services/api";

interface iContext {
  children?: React.ReactNode;
}

interface iCartContext {
  products: any[];
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iContext) => {
  const { token } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);
  return (
    <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
  );
};
