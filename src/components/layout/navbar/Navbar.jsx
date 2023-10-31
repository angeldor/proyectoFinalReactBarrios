import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ToysIcon from "@mui/icons-material/Toys";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navBarContainer">
        <Link id="link" to="/">
          <h2>
            <SmartToyIcon fontSize="large" />
            Jugueteria la Niña mimada
            <ToysIcon fontSize="large" />
          </h2>
        </Link>
        <ul className="categories">
          <Link to="/category/peluches">
            <li>Peluches</li>
          </Link>
          <Link to="/category/construccion">
            <li>Construcción</li>
          </Link>
          <Link to="/category/juegosdemesa">
            <li>Juegos de Mesa</li>
          </Link>
          <Link to="/category/educativos">
            <li>Educativos</li>
          </Link>
          <Link to="/category/alairelibre">
            <li>Al Aire Libre</li>
          </Link>
          <Link to="/category/decorativos">
            <li>Decorativos</li>
          </Link>
        </ul>
        <Link to="/cart">
          <CartWidget className="cart" />
        </Link>
      </div>
    </>
  );
};
