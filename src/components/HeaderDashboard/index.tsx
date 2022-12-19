import { HeaderMain } from "./styles";
import logoMain from "../../assets/logo.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const HeaderDash = () => {
  const { remove } = useContext(UserContext);
  return (
    <div className="divHeader">
      <HeaderMain>
        <img src={logoMain} alt="logo da hamburgueria" />
        <div className="divIcons">
          <IconButton
            className="iconButton"
            onClick={() => console.log("fui clicado")}
          >
            <BiSearchAlt2 className="cartIcon" />
          </IconButton>
          <IconButton
            className="iconButton"
            onClick={() => console.log("fui clicado")}
          >
            <Badge badgeContent={4} color="success">
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
