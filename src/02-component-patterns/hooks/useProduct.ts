import { useState, useEffect, useRef } from "react";
import { Product, OnChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => setCounter(value), [value]);

  const isControlled = useRef(!!onChange);
  
  
  const increaseBy = (value: number) => {
    if(isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product })
  }


  return {
    counter,
    increaseBy,
  };
}

export default useProduct;