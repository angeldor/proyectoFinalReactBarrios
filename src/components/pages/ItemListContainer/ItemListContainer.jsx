import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Skeleton from "@mui/material/Skeleton";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Button } from "@mui/material";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  // const cargarDB = () =>{

  //   const productCollection = collection(db,"products")
    
  //   products.forEach((elemento)=>{
  //     addDoc(productCollection, elemento)
  //   })
  // }

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = undefined;

    if(!categoryName){
      consulta = productsCollection;
    } else{
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      let arrayConStock = newArray.filter((elemento)=> elemento.stock > 0)
      setItems(arrayConStock);
    });
  }, [categoryName])
  return (
    <div>
      {/* <Button variant="contained" onClick={cargarDB}>Cargar productos</Button> */}
      {items.length === 0 ? (
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={250} height={120} />
            <Skeleton variant="text" width={80} height={40} />
            <Skeleton variant="text" width={150} height={30} />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  )
};

export default ItemListContainer;
