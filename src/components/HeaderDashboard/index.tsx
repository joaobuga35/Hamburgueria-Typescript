import { HeaderMain } from "./styles";
import logoMain from "../../assets/logo.svg";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

export const HeaderDash = () => {
  const { modal, setModal, itemCart } = useContext(CartContext);
  const { remove } = useContext(UserContext);
  return (
    <div className="divHeader">
      <HeaderMain>
        <img src={logoMain} alt="logo da hamburgueria" />
        <div className="divIcons">
          <IconButton className="iconButton" onClick={() => setModal(true)}>
            <Badge badgeContent={itemCart.length} color="success">
              <ShoppingCart className="cartIcon" />
            </Badge>
          </IconButton>

          <Link to={"/"} onClick={() => remove()}>
            <ExitToAppIcon className="cartIcon" />
          </Link>
        </div>
      </HeaderMain>
    </div>
  );
};
