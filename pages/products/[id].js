import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Head from "next/head";
import getStrapiMedia from "../../utils/media";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:1337/products`);
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
  const res = await fetch(`http://localhost:1337/products/` + id);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};

const Product = ({ product }) => {
  const router = useRouter();
  console.log(product);
  return (
    <>
      <Head>
        <title>PureTony | {product.name}</title>
      </Head>
      <div className="w-full h-1 bg-purple-400"></div>
      <div className="max-w-5xl mx-auto min-h-screen">
        <Navbar />
        <button
          className="mx-5 px-5 py-1 bg-gray-100 border border-gray-400 outline-none focus:outline-none focus:bg-gray-300 transition duration-150"
          onClick={() => router.push("/shop")}
        >
          Back
        </button>
        <div className="p-5 flex gap-4">
          <Image src={getStrapiMedia(product.photo)} width={400} height={400} />
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
                Composition: <br /> {product.composition}
              </p>
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
      </div>
      <Footer />
    </>
  );
};

export default Product;
