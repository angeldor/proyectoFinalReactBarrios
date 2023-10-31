import { Link } from "react-router-dom";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ToysIcon from "@mui/icons-material/Toys";

const Cart = () => {
  return (
    <div>
      <h1>Hola! Este es el carrito</h1>
      <p>
        Aqui se verán todos los articulos que agregaste a tu carrito de compra
      </p>
      <Link to="/">
          <h2>
            <SmartToyIcon fontSize="large" />
            Volver a la pagina principal
            <ToysIcon fontSize="large" />
          </h2>
        </Link>
    </div>
  );
};

export default Cart;
