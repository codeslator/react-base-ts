import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/";
import { products } from "../data/products";

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
              <ProductImage />
              <ProductTitle />
              <ProductButtons/>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
