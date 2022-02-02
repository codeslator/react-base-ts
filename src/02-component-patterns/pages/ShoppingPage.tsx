import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/";
import '../styles/custom-styles.css';

const product = {
  id: '1234',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={product.title} className="text-bold"  />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{
          backgroundColor: '#fff'
        }}>
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0, 0, 00, .2)' }} />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'center' }} />
        </ProductCard>
      </div>
    </div>
  );
};
