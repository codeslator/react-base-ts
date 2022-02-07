import { createContext, CSSProperties, ReactElement } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css'
import { InitialValues, OnChangeArgs, Product, ProductContextProps, ProductCardHandlers } from '../interfaces/interfaces';


export interface Props {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
};

// Compartir valores dentro de un mismo componente entre padres e hijos sin props, usar Contextos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReach,
    reset
  } = useProduct({ onChange, product, value, initialValues });
  
  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReach, 
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  );
};