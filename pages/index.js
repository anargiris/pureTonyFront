import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainShowcase from "../components/MainShowcase";
import Image from "next/image";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>PureTony | Urban Streetwear</title>
      </Head>
      <div className="w-full h-1 bg-pink-200"></div>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <header className="w-full flex-col justify-between">
          <div className="p-2 flex justify-between">
            <div>
              <h1 className="text-6xl font-bold text-gray-800">PureTony</h1>
              <p className="text-lg italic pt-2 text-gray-700">
                Urban streetwear based in Thessaloniki, Greece.
              </p>
              <p className="mt-5 text-gray-600 font-semibold">
                Founded in 2020.
              </p>
            </div>
            <div className="">
              <Image src="/icons/logo.jpg" height={150} width={150} />
            </div>
          </div>
        </header>
        <MainShowcase />
      </div>
      <Footer />
    </>
  );
}

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
