import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
  // Objeto que procesa cualquier cantidad de llaves con objetos de tipo ProductInCart
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    setShoppingCart((oldShoppingCart) => {
      
      if(count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      };
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
};

export default useShoppingCart;