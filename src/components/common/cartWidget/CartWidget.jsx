import { Badge } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useContext } from "react";

const CartWidget = () => {
  const { getTotalQuantity } = userContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to={"/cart"}>
      <Badge badgeContent={total} showZero color="primary">
        <ShoppingBasketIcon fontSize="large" color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
