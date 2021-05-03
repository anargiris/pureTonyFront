import Image from "next/image";
import getStrapiMedia from "../utils/media";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="sm:w-auto shadow-sm mb-4 mr-1 border-b border-l pb-2 border-gray-300 cursor-pointer">
      <div className="w-full h-1 bg-indigo-300"></div>
      <Link href={"/products/" + product.id}>
        <Image
          src={getStrapiMedia(product.photo)}
          width={300}
          height={300}
          alt={`Product Card showcase for PureTony shop page. This one is for the product named ${product.name}`}
          className="hover:opacity-95 transform hover:scale-110 hover:rotate-2 transition duration-150"
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
        <Link href={"/products/" + product.id}>
          <button className="bg-indigo-100 shadow-sm font-semibold mx-2 p-1 mt-2 hover:bg-blue-200 transition duration-150">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
