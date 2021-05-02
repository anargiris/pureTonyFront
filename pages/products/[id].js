import Navbar from "../../components/Navbar";
import { useContext, useState } from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
import Head from "next/head";
import getStrapiMedia from "../../utils/media";
import { useRouter } from "next/router";

import RubberBand from "react-reveal/RubberBand";

import { CartContext } from "../../components/context/CartContext";

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://aqueous-fortress-08267.herokuapp.com/products`
  );
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.id;
  const res = await fetch(
    `https://aqueous-fortress-08267.herokuapp.com/products/` + id
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};

const Product = ({ product }) => {
  console.log(product);
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const [noStock, setNoStock] = useState(false);

  const addItem = (e) => {
    if (product.quantity > 0) {
      if (size) {
        setIsAdded(true);
        setCartItems((prevItems) => [
          ...prevItems,
          {
            product,
            id: cartItems.length + 1,
            size,
            quantity: product.quantity,
          },
        ]);
        product.quantity--;
        setTimeout(() => {
          setIsAdded(false);
        }, 2000);
      } else {
        alert("Please pick a size for your product.");
      }
    } else {
      setNoStock(true);
      setTimeout(() => {
        setNoStock(false);
      }, 2000);
    }
  };

  const changeSize = (e) => {
    setSize(e.target.innerHTML);
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>PureTony | {product.name}</title>
      </Head>
      <div className="w-full h-1 bg-purple-400"></div>
      {noStock ? (
        <RubberBand>
          <div
            className="fixed text-center rounded-md shadow-md w-40 p-2 z-10 bg-red-600 text-white mx-auto"
            style={{ left: "50%" }}
          >
            <p>Can't add more!</p>
          </div>
        </RubberBand>
      ) : (
        ""
      )}
      {isAdded ? (
        <RubberBand>
          <div
            className="fixed rounded-md shadow-md w-40 p-2 z-10 bg-green-600 text-white mx-auto"
            style={{ left: "50%" }}
          >
            <p>Item added to cart!</p>
          </div>
        </RubberBand>
      ) : (
        ""
      )}
      <Navbar />
      <div className="max-w-5xl mx-auto min-h-screen">
        <button
          className="mx-5 px-5 py-2 mt-2 bg-gray-200 border border-gray-700 outline-none focus:outline-none focus:bg-gray-800 hover:bg-gray-800 hover:text-gray-100 transition duration-150"
          onClick={() => router.back()}
        >
          Back
        </button>
        <div className="p-5 flex sm:flex-row flex-col gap-4">
          <Image
            src={getStrapiMedia(product.photo.url)}
            width={400}
            height={400}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-1">
                {product.name}
              </h1>
              <h3 className="text-xl font-semibold text-gray-800">
                {product.description}
              </h3>
              <h3 className="text-lg py-2 font-semibold text-indigo-800">
                <span>&#8364;</span>
                {product.price}
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                Composition: <br />{" "}
                <span className="text-gray-500">{product.composition}</span>
              </p>
              <br />
              <div className="flex gap-3 text-gray-800">
                {product.sizes.sizes.map((size, i) => (
                  <button
                    onClick={changeSize}
                    key={i}
                    className="w-10 h-10 py-1 cursor-pointer rounded-full font-bold p-1 border border-gray-300 hover:border-gray-800 focus:outline-none focus:border-gray-800 focus:bg-gray-800 focus:text-white"
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
              <br />
              <p>In Stock: {product.quantity}</p>
            </div>

            <div className="flex gap-5">
              {product.backphoto ? (
                <Image
                  src={getStrapiMedia(product.backphoto)}
                  width={150}
                  height={150}
                />
              ) : (
                ""
              )}
              {product.extraphoto ? (
                <Image
                  src={getStrapiMedia(product.extraphoto)}
                  width={150}
                  height={150}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="p-5 sm:w-1/3">
          <button
            onClick={addItem}
            className="text-xl w-full p-2 border border-purple-500 bg-purple-200 font-bold hover:bg-purple-400 transition duration-150"
          >
            Add to Cart {size && `(${size})`}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
