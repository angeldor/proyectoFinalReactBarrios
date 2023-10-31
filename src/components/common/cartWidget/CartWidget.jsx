import { Badge } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={0} showZero color="secondary">
        <ShoppingBasketIcon fontSize="large" />
      </Badge>
    </div>
  );
};

export default CartWidget;
