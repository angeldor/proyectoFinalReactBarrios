import ProductCard from "../../common/productCard/ProductCard";
import React from 'react';


const ItemList = ({ items }) => {
  const maxItemsPerRow = 5;

  // Dividimos los elementos en filas de máximo 5 elementos por fila
  const rows = [];
  for (let i = 0; i < items.length; i += maxItemsPerRow) {
    rows.push(items.slice(i, i + maxItemsPerRow));
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 16 }}
        >
          {row.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
