import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/";
import { products } from "../data/products";
import '../styles/custom-styles.css';
const product = products[0];

export const ShoppingPage = () => {
  // State initializer debe poder definir el estado inicial y un valor para resetear 
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard
          product={product}
          className="bg-dark text-white"
          key={product.id}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({
            reset,
            count,
            isMaxCountReach,
            increaseBy,
            maxCount
          }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button type="button" onClick={reset}>Reset</button>
              <button type="button" onClick={() => increaseBy(-2)}>-2</button>
              <span>{count} - {maxCount}</span>
              {!isMaxCountReach && (<button type="button" onClick={() => increaseBy(+2)}>+2</button>)}
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
