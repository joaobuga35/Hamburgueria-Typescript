import React from "react";
import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import Global from "./styles/Global";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Global />
      <UserProvider>
        <CartProvider>
          <RoutesMain />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
