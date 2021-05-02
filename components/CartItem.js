import React, { useContext } from "react";
import Image from "next/image";

import getStrapiMedia from "../utils/media";

import { CartContext } from "../components/context/CartContext";

const CartItem = ({ item }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const remove = (id) => {
    const newitems = cartItems.filter((prod) => prod.id !== id);
    setCartItems(newitems);
  };
  return (
    <div className="flex w-96 h-40 gap-10 p-2 font-rubik shadow-sm bg-gray-100">
      <div>
        <Image
          src={getStrapiMedia(item.product.photo)}
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col p-4 justify-around">
        <h1 className="text-lg font-bold font-rubik mb-1">
          {item.product.name}
        </h1>
        <div className="flex justify-between text-lg text-left">
          <p>{item.size}</p>
          <p className="text-lg text-right">
            <span>&#8364;</span>
            {item.product.price}
          </p>
        </div>
        <button
          className="border mt-4 text-red-500 bg-gray-50 border-gray-600 p-1 hover:bg-red-500 hover:text-white transition duration-150"
          onClick={(e) => remove(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
