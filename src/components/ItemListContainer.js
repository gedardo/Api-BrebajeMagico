import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// Own components
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";

// Mock
// import Items from "../mocks/wines";
import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export const ItemListContainer = () => {
  // const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "wines");
    getDocs(itemsCollection).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(products);
    });
  }, []);

  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};
