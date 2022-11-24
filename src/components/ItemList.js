import Item from "./Item";

export const ItemList = ({ products }) => {
  return (
    <ul className="container">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};
