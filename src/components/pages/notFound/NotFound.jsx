import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h1>Ohh no, algo no ocurrio como debía</h1>
      <Link to="/" className="link">
        Volver a la pagina principal
      </Link>
    </div>
  );
};

export default NotFound;
