import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { addDoc, updateDoc, doc, collection } from "firebase/firestore";
import "./Checkout.css";
import { Button } from "@mui/material";

const Checkout = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    cp: ""
  });

  const [orderId, setOrderId] = useState(null);
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();
  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <div className="contenedorcheck">
          <div className="checked">
            <h2>Gracias por su compra!</h2>
            <h2>N° de comprobante {orderId}</h2>
            <Button variant="contained"><Link to="/">Seguir comprando</Link></Button>
          </div>
        </div>
      ) : (
        <div className="contenedorcheck">
          <form onSubmit={handleSubmit} className="container">
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Ingresa tu telefono"
              name="phone"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Ingresa tu email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Calle"
              name="address1"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Altura"
              name="address2"
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Finalizar Compra
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
