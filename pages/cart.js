import React, { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/context/CartContext";
import CartItem from "../components/CartItem";

const cart = ({ products }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  let total = 0;
  {
    cartItems.map((item) => (total = total + item.product.price));
  }
  return (
    <>
      <Head>
        <title>PureTony | Cart</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Your cart info. Is it empty? Then, you better go check the shop page and fill it!"
        />
      </Head>
      <div className="w-full h-1 bg-yellow-200"></div>

      <Navbar />
      <div className="w-full">
        {cartItems.length > 0 ? (
          <div className="flex flex-col sm:flex-row max-w-5xl h-screen mx-auto justify-evenly">
            <div className="flex flex-col py-10 gap-5">
              {cartItems && cartItems.map((item) => <CartItem item={item} />)}
            </div>
            <div className="max-h-80 border max-w-full bg-gray-50 my-10 shadow-sm">
              <h1 className="text-3xl py-1 px-5 border-b bg-gray-800 text-gray-100 border-gray-400 shadow-sm font-bold ">
                Summary
              </h1>
              <div className="p-10 ">
                <h3 className="py-4 text-gray-700 text-xl font-semibold ">
                  Total: <span>&#8364;</span>
                  {total}
                </h3>
                <Link href="/checkout">
                  <button className="text-xl mt-20 bg-gray-100 border-2 border-gray-900 shadow-md p-2 hover:bg-gray-800 hover:text-gray-100 transition duration-150">
                    To Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-screen bg-gradient-to-tr from-gray-100">
            <div className="max-w-5xl mx-auto p-10">
              <h3 className="text-3xl text-gray-800">
                Oops! Looks like your cart is empty.
              </h3>
              <p className="text-xl py-5 text-gray-700">
                You might want to check our{" "}
                <Link href="/shop">
                  <span className="font-semibold text-purple-500 cursor-pointer">
                    Shop page!
                  </span>
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(
    `https://aqueous-fortress-08267.herokuapp.com/products`
  );
  const products = await res.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
  };
}

export default cart;
