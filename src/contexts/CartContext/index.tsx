import { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";
/*eslint-disable react-hooks/rules-of-hooks */

interface iContext {
  children?: React.ReactNode;
}

interface iCartContext {
  products: any[];
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  add: (element: iProducts, elementId: number) => void;
  removeProducts: (elementId: number) => void;
  removeOne: (element: iProducts, elementId: number) => void;
  removeAll: () => void;
  itemCart: iProducts[];
  totalValue: () => string | 0;
}

interface iProducts {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  quant?: number;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

export const CartProvider = ({ children }: iContext) => {
  const { token, navigate } = useContext(UserContext);
  const [itemCart, setItemCart] = useState<iProducts[]>([] as iProducts[]);
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [values, setValues] = useState<number>(0);

  const add = (element: iProducts, elementId: number) => {
    const newProducts = itemCart.find((elem) => elem.id === elementId);
    if (newProducts) {
      const index = itemCart.findIndex((elem) => elem.id === elementId);
      const cartProducts = itemCart.splice(index, 1);
      cartProducts[0].quant! += 1;
      setItemCart([...itemCart, cartProducts[0]]);
    } else {
      element.quant = 1;
      setItemCart((oldProducts) => [...oldProducts, element]);
      toast.success("Produto adicionado ao carrinho");
    }
  };

  const removeProducts = (elementId: number) => {
    const index = itemCart.findIndex((elem) => elem.id === elementId);

    if (index >= 0) {
      const newItem = [...itemCart];
      newItem.splice(index, 1);
      setItemCart(newItem);
      toast.success("Produto removido...");
    }
  };

  const removeOne = (element: iProducts, elementId: number) => {
    const newProducts = itemCart.find((elem) => elem.id === elementId);

    if (newProducts?.quant! >= 2) {
      const index = itemCart.findIndex((elem) => elem.id === elementId);
      const cartProducts = itemCart.splice(index, 1);
      cartProducts[0].quant! -= 1;
      setItemCart([...itemCart, cartProducts[0]]);
    } else {
      const index = itemCart.findIndex((elem) => elem.id === elementId);
      itemCart.splice(index, 1);
      setItemCart([...itemCart]);
      toast.success("Produto removido ao carrinho");
    }
  };

  const removeAll = () => {
    setItemCart([]);
    toast.success("Todos os produtos foram removidos");
  };

  const totalValue = () => {
    if (itemCart.length === 0) {
      return 0;
    }
    useEffect(() => {
      const actualValues = itemCart.map((elem) => {
        if (elem.quant) {
          return elem.price * elem.quant;
        } else {
          return elem.price;
        }
      });
      const total = actualValues.reduce(
        (previous, current) => previous + current,
        0
      );
      setValues(total);
    }, [itemCart]);
    return values.toFixed(2);
  };

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
    <CartContext.Provider
      value={{
        removeAll,
        totalValue,
        products,
        modal,
        setModal,
        add,
        itemCart,
        removeOne,
        removeProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
