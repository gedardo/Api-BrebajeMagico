import ItemDetail from "./ItemDetail";
import { useGetItem } from "./useGetItem";
import { Loading } from "./Loading";

const ItemDetailContainer = () => {
  const item = useGetItem();
  
  if (!item) {
    return <Loading />;
  }

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
