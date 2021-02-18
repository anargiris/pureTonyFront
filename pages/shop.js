import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const shop = ({ products }) => {
  const [productsF, setProductsF] = useState(products);

  const handleChange = (val) => {
    if (val === "shirt") {
      const newArr = [...products];
      const filteredProducts = newArr.filter(
        (prod) => prod.categories[0].name === "T-Shirt"
      );
      setProductsF(filteredProducts);
    } else if (val === "hoodie") {
      const newArr = [...products];
      const filteredProducts = newArr.filter(
        (prod) => prod.categories[0].name === "Hoodie"
      );
      setProductsF(filteredProducts);
    } else if (val === "sweatshirt") {
      const newArr = [...products];
      const filteredProducts = newArr.filter(
        (prod) => prod.categories[0].name === "Sweatshirt"
      );
      setProductsF(filteredProducts);
    } else setProductsF(products);
  };

  const handleChangePrice = (val) => {
    if (val === "first") {
      const newArr = [...products];
      const filteredProducts = newArr.filter((prod) => prod.price <= 20);
      setProductsF(filteredProducts);
    } else if (val === "second") {
      const newArr = [...products];
      const filteredProducts = newArr.filter(
        (prod) => prod.price > 20 && prod.price <= 50
      );
      setProductsF(filteredProducts);
    } else if (val === "third") {
      const newArr = [...products];
      const filteredProducts = newArr.filter((prod) => prod.price > 50);
      setProductsF(filteredProducts);
    } else setProductsF(products);
  };

  return (
    <>
      <Head>
        <title>PureTony | Shop</title>
      </Head>
      <div className="w-full h-1 bg-indigo-300"></div>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <div className="max-w-3xl mx-auto bg-gray-200 shadow-sm my-4 px-10 py-2 flex gap-10">
          <div className="flex">
            <h2 className="font-semibold pr-2">Categories:</h2>
            <select
              className="outline-none"
              name="category"
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="def">-</option>
              <option value="hoodie">Hoodie</option>
              <option value="shirt">T-Shirt</option>
              <option value="sweatshirt">Sweatshirt</option>
            </select>
          </div>
          <div className="flex">
            <h2 className="font-semibold pr-2">Price:</h2>
            <select
              className="outline-none"
              name="price"
              onChange={(e) => handleChangePrice(e.target.value)}
            >
              <option value="def">-</option>
              <option value="first">
                <span>&#8364;</span>0-20
              </option>
              <option value="second">
                <span>&#8364;</span>20-50
              </option>
              <option value="third">
                <span>&#8364;</span>50+
              </option>
            </select>
          </div>
        </div>
        <ProductList products={productsF} />
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:1337/products`);
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

export default shop;
