import { createContext, CSSProperties, ReactElement } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css'
import { Product, ProductContextProps } from '../interfaces/interfaces';

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: CSSProperties;
};

// Compartir valores dentro de un mismo componente entre padres e hijos sin props, usar Contextos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();
  
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};