import React from "react";
import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import Global from "./styles/Global";
import { ToastContainer } from "react-toastify";

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
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
