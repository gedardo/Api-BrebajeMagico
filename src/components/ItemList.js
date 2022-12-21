import Item from "./Item";

export const ItemList = ({ products }) => {
  return (
    <ul className="container">
      {products.map((product) => (
        <Item  key={product.nombre} product={product} />
      ))}
    </ul>
  );
};
