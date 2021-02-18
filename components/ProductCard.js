import Image from "next/image";
import getStrapiMedia from "../utils/media";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className=" shadow-sm mb-4 mr-1 border-b border-l pb-2 border-gray-300 cursor-pointer ">
      <div className="w-full h-1 bg-indigo-300"></div>
      <Link href={"/products/" + product.id}>
        <Image
          src={getStrapiMedia(product.photo)}
          width={300}
          height={300}
          className="hover:opacity-90 transition duration-150"
        />
      </Link>
      <div className="flex justify-between px-2">
        <Link href={"/products/" + product.id}>
          <h1 className="text-lg font-bold text-gray-800">{product.name}</h1>
        </Link>

        <p className="text-indigo-300 font-semibold text-lg">
          <span>&#8364;</span>
          {product.price}
        </p>
      </div>
      <p className="text-md px-2 text-gray-600">{product.description}</p>
      <div className="flex justify-between">
        <button className="bg-red-500 font-semibold mx-2 p-1 mt-2 hover:bg-red-600 transition duration-150">
          Add to Cart
        </button>
        <Link href={"/products/" + product.id}>
          <button className="bg-blue-500 font-semibold mx-2 p-1 mt-2 hover:bg-blue-600 transition duration-150">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
