import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const shop = ({ products }) => {
  const [productsF, setProductsF] = useState(products);
  const [filters, setFilters] = useState({
    cat: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "start") {
      setProductsF(products);
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, cat: value }));
      const testArr = [...products];
      const filteredProd = testArr.filter(
        (prod) => prod.categories[0].name === value
      );
      setProductsF(filteredProd);
    }
  };

  const handleChangePrice = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "def") {
      const testArr = [...products];
      const filteredProd = testArr.filter(
        (prod) => prod.categories[0].name === filters.cat
      );
      setProductsF(filteredProd);
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, price: value }));
      const testArr = [...products];
      const filteredProd = testArr.filter(
        (prod) => prod.price < value && prod.categories[0].name === filters.cat
      );
      setProductsF(filteredProd);
    }
  };

  return (
    <>
      <Head>
        <title>PureTony | Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="description"
          content="The official PureTony shop page where you can find all available products that you can buy today!"
        />
      </Head>
      <div className="w-full h-1 bg-indigo-300"></div>

      <Navbar />
      <div className="max-w-5xl mx-auto">
        <div className="sm:max-w-3xl overflow-hidden mx-auto bg-gray-200 shadow-sm my-4 px-10 py-2 flex gap-10">
          <div className="flex">
            <h2 className="font-semibold pr-2">Categories:</h2>
            <select
              className="outline-none"
              name="category"
              onChange={handleChange}
            >
              <option value="start">-</option>
              <option value="Hoodie">Hoodie</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Sweatshirt">Sweatshirt</option>
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

export default shop;
