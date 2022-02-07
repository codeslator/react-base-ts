import { CSSProperties, useContext, useCallback } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  // TODO: maxCount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  // TODO: isMaxReach = useCallback[counter, maxCounter] // true if counter === maxCounter
  const isMaxReach = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);
  

  console.log({maxCount})

  return (
    <div className={`${styles.buttonsContainer} ${className} `} style={style}>
      <div className={styles.buttonsContainer}>
        <button type="button" className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button
          type="button"
          className={`${styles.buttonAdd} ${isMaxReach() && styles.disabled}`}
          onClick={() => increaseBy(+1)}
          disabled={isMaxReach()}
        >+</button>
      </div>
    </div>
  )
}