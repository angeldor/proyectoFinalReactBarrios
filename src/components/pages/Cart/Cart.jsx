import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import "./Cart.css"

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice()

  const clearCartWithAlert = () => {
    Swal.fire({
      title:"Seguro quieres eliminar tu carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si! Eliminar",
      denyButtonText:`¡No!`
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire("Elinimado!","","success")
      }else if(result.isDenied){
        Swal.fire("Ok sigue comprando mas jeje", "", "warning")
      }
    })
  }
  return(
    <div className="contenedorPrincipal">
      <h1>Este es tu carrito</h1>
      <div className="contenedor">
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
          <h3>Cantidad: {product.quantity}</h3>
          <IconButton onClick={()=>deleteProductById(product.id)}>
            <DeleteForeverIcon fontSize="large" className="deleteButton"  />
          </IconButton>
          <div className="divide"></div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="totalButtons">
          <h2>Total a pagar: </h2>
          <h2>{total}</h2>

          <Link to={"/checkout"}>
            <Button >Finalizar Compra</Button>
          </Link>
          <div>
            <Button onClick={clearCartWithAlert}>Vaciar Carrito</Button>
          </div>
          
        </div>
      )}
      </div>
    </div>
  )
};

export default Cart;
