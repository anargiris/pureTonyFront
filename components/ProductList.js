import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="max-w-7xl flex flex-wrap p-5 m-auto justify-around">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
