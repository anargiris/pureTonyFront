import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import OpenerVideo from "../components/OpenerVideo";
import SecondVideo from "../components/SecondVideo";
import { session } from "next-auth/client";
import Zoom from "react-reveal/Zoom";
import HomePageCard from "../components/HomePageCard";

import HeadShake from "react-reveal/HeadShake";

import Bounce from "react-reveal/Bounce";

import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
const CarouselUI = ({ children }) => (
  <div className="check w-full overflow-hidden h-8 relative text-center bg-gradient-to-r from-gray-800 via-black to-gray-800 shadow-md font-rubik text-gray-200">
    {children}
  </div>
);
const Carousel = makeCarousel(CarouselUI);

export default function Home() {
  return (
    <>
      <Head>
        <title>PureTony</title>
      </Head>
      <div className="w-full h-1 bg-pink-200"></div>
      <Navbar />

      <Carousel defaultWait={5000}>
        <Slide left>
          <div className="py-1">
            <h1>PureTony Clothing</h1>
          </div>
        </Slide>
        <Slide left>
          <div className="py-1">
            <h2>Full Stack project by Anargyros Stylidis</h2>
          </div>
        </Slide>
        <Slide left>
          <div className="py-1">
            <h2>Visit my website @ stylidisx.com</h2>
          </div>
        </Slide>
      </Carousel>
      <div className="w-full bg-transparent bg-gradient-to-t from-gray-100 mx-auto z-10 mb-2">
        <header className="max-w-5xl mx-auto border-b ">
          <div className="p-2 flex sm:flex-row flex-col sm:text-left text-center ">
            <div className="rounded-full">
              <Image
                className=" sm:block"
                src="/icons/logo2.png"
                height={260}
                width={260}
              />
            </div>

            <div className="sm:mt-10">
              <p className="text-2xl mt-4 text-gray-800 font-rubik">
                Urban streetwear based in Thessaloniki, Greece.
              </p>
              <p className="text-4xl my-4 text-pink-400 font-inco font-semibold italic">
                <Zoom left cascade>
                  <div style={{ display: "inline-block" }}>Why U </div>
                </Zoom>
                <Zoom right cascade duration={1400}>
                  <div style={{ display: "inline-block" }}> Trippin' ?</div>
                </Zoom>
              </p>
            </div>
          </div>
        </header>
      </div>

      <section className="bg-gradient-to-t from-white via-pink-50 font-rubik">
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
      <main className="flex flex-col overflow-hidden w-full bg-gradient-to-t from-white via-green-100 to-white   mt-5 p-10">
        <HeadShake delay={450}>
          <div className="w-40 h-2 rounded-xl mx-auto mt-10 mb-20 bg-gradient-to-r from-green-500 to-green-700 transform rotate-6"></div>
        </HeadShake>

        <div className="max-w-5xl mx-auto">
          <div className="flex sm:flex-row flex-col gap-10">
            <Bounce left delay={900}>
              <Link href="/shop">
                <div className="relative shadow-md transform hover:scale-105 cursor-pointer hover:-rotate-3 transition duration-300">
                  <Image src="/gallery/3.jpg" width={500} height={500} />
                  <span className="opacity-0 h-full hover:opacity-100 transition duration-300 bg-black bg-opacity-80 absolute pt-20 top-0 left-0 text-center text-white text-3xl font-rubik px-4">
                    CLICK HERE AND GO TO THE SHOP
                  </span>
                </div>
              </Link>
            </Bounce>

            <Bounce right delay={1400}>
              <Link href="/products/602e52e568287f23586e6875">
                <div className="relative shadow-md transform hover:scale-105 cursor-pointer hover:rotate-3 transition duration-300">
                  <Image
                    className="absolute"
                    src="/gallery/1.jpg"
                    width={500}
                    height={500}
                  />

                  <span className="opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-80 absolute w-full pt-20 h-full top-0 left-0 text-center text-white text-3xl font-rubik px-4">
                    CHECK THE LATEST BLACK TEE v2
                  </span>
                </div>
              </Link>
            </Bounce>
          </div>
        </div>
      </main>
      <section className="w-full h-96 relative bg-black overflow-hidden">
        <p className="absolute text-white text-center font-rubik w-full text-3xl">
          NEVER MISS ON ANYTHING.
        </p>
        <SecondVideo />
      </section>
      <Footer />
    </>
  );
}
