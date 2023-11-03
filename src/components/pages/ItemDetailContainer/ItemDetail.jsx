import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="detail">
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" />
      <p>{productSelected.description}</p>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};
