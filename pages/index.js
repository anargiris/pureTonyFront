import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import OpenerVideo from "../components/OpenerVideo";
import SecondVideo from "../components/SecondVideo";
import Zoom from "react-reveal/Zoom";
import HomePageCard from "../components/HomePageCard";

import HeadShake from "react-reveal/HeadShake";

import Bounce from "react-reveal/Bounce";

import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
const CarouselUI = ({ children }) => (
  <div className="max-w-full overflow-hidden h-8 relative text-center bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-md font-rubik text-gray-200">
    {children}
  </div>
);
const Carousel = makeCarousel(CarouselUI);

export default function Home() {
  return (
    <>
      <Head>
        <title>PureTony | Urban Streetwear</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="description"
          content="PureTony is an urban streetwear brand located in Thessaloniki, Greece. Since 2019, it delivers high quality shirts, hats and even Covid-19 masks."
        />
        <link rel="canonical" href="https://puretony-main.vercel.app/" />
      </Head>

      <div className="w-full h-1 bg-pink-200"></div>
      <Navbar />

      <Carousel defaultWait={5000}>
        <Slide left>
          <div className="py-1">
            <h1>PureTony Clothing - Urban Streetwear</h1>
          </div>
        </Slide>
        <Slide left>
          <div className="py-1">
            <p>Full Stack project by Anargyros Stylidis</p>
          </div>
        </Slide>
        <Slide left>
          <div className="py-1">
            <p>Visit my website @ stylidis.io</p>
          </div>
        </Slide>
      </Carousel>
      <div className="w-full bg-transparent bg-gradient-to-t from-gray-100 mx-auto z-10 mb-2">
        <header className="max-w-5xl mx-auto border-b relative">
          <div className="absolute w-5 h-5 rounded-b-full rounded-tl-full bg-gradient-to-tr from-pink-300 to-pink-600 top-5 right-0 opacity-20"></div>
          <div className="absolute w-5 h-5 rounded-t-full rounded-br-full bg-gradient-to-br from-pink-600 to-pink-300 bottom-5 left-0 opacity-20"></div>
          <div className="p-2 flex sm:flex-row flex-col sm:text-left text-center ">
            <div className="rounded-full">
              <Image
                className=" sm:block"
                src="/icons/logo2.png"
                height={260}
                width={260}
                alt="PureTony logo"
                quality={100}
                priority
              />
            </div>

            <div className="sm:mt-10">
              <h2 className="text-2xl mt-4 text-gray-800 font-rubik">
                Urban streetwear based in Thessaloniki, Greece.
              </h2>
            </div>
          </div>
        </header>
      </div>
      <section className="bg-gradient-to-t mt-10 from-white via-pink-100 font-rubik">
        <div className="flex flex-wrap max-w-5xl mx-auto gap-5 justify-around">
          <HomePageCard imgsrc="/icons/star-outline.svg" text="TOP QUALITY" />
          <HomePageCard imgsrc="/icons/time-outline.svg" text="FAST SHIPPING" />
          <div className="hidden sm:block">
            <OpenerVideo />
          </div>
          <HomePageCard imgsrc="/icons/heart-outline.svg" text="BONUS GIFTS!" />
          <HomePageCard imgsrc="/icons/organic-cotton.png" text="100% COTTON" />
        </div>
      </section>

      <section
        style={{ backgroundColor: "#0C0C0C" }}
        className="text-white py-10 my-20 text-center font-rubik"
      >
        <Zoom right>
          <p
            className="text-3xl font-bold"
            style={{ textShadow: "-2px -1px 0px rgba(252, 231, 243, 0.1)" }}
          >
            BE BETTER THAN YOUR BEST SELF
          </p>
        </Zoom>
        <Zoom left>
          <Link href="/shop">
            <button
              className="bg-white p-2 focus:outline-none mt-5 hover:bg-pink-100 transition duration-300"
              style={{ color: "#0C0C0C" }}
            >
              SHOP NOW
            </button>
          </Link>
        </Zoom>
      </section>
      <main className="flex flex-col overflow-hidden w-full bg-gradient-to-t from-white via-green-200 to-white p-10">
        <HeadShake delay={450}>
          <div className="w-40 h-1 rounded-xl mx-auto mb-20 bg-gradient-to-r from-green-300 to-green-400 transform rotate-6"></div>
        </HeadShake>

        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex sm:flex-row flex-col gap-10">
            <Bounce left delay={800}>
              <Link href="/shop">
                <div className="relative transform hover:scale-105 cursor-pointer hover:-rotate-3 transition duration-300">
                  <Image
                    src="/gallery/3.jpg"
                    width={500}
                    height={500}
                    alt="Promotional home page image that links to the shop page."
                    quality={100}
                  />
                  <span className="opacity-0 h-full hover:opacity-100 transition duration-300 bg-black bg-opacity-80 absolute pt-20 top-0 left-0 text-center text-white text-3xl font-rubik px-4">
                    CLICK HERE AND GO TO THE SHOP
                  </span>
                </div>
              </Link>
            </Bounce>

            <Bounce right delay={1000}>
              <Link href="/products/602e52e568287f23586e6875">
                <div className="relative transform hover:scale-105 cursor-pointer hover:rotate-3 transition duration-300">
                  <Image
                    src="/gallery/1.jpg"
                    width={500}
                    height={500}
                    alt="Promotion Image for Home page, Black Tee v2"
                    quality={100}
                  />
                  <span className="opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-80 absolute w-full pt-20 h-full top-0 left-0 text-center text-white text-3xl font-rubik px-4">
                    CHECK THE LATEST BLACK TEE v2
                  </span>{" "}
                </div>
              </Link>
            </Bounce>
          </div>
        </div>
      </main>

      <section className="w-full h-96 relative bg-black overflow-hidden">
        <h4 className="absolute text-white text-center font-rubik w-full text-3xl">
          WHY U TRIPPIN' ?
        </h4>
        <SecondVideo />
      </section>
      <Footer />
    </>
  );
}
