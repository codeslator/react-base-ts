import { useState, useEffect, useRef } from "react";
import { Product, OnChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  console.log(initialValues?.count)
 
  useEffect(() => {
    if(!isMounted.current) return;
    setCounter(value)
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  
  const increaseBy = (value: number) => {
    // console.log(initialValues?.maxCount, counter + value)

    let newValue = Math.max(counter + value, 0);
    if(initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }
    setCounter(newValue);
    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value);
  }


  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReach: !!initialValues?.count && initialValues.maxCount === counter,
    reset,
  };
}

export default useProduct;