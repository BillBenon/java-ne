import ProductItem from "./ProductItem";

const ProductsList = ({ products, addToCart }) => {
  return (
    <div className="my-4">
      <div className="flex flex-col md:flex-row gap-10 flex-wrap">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.code}
            onAddToCart={(item) => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
