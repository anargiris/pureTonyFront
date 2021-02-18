import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";

const gallery = () => {
  return (
    <>
      <Head>
        <title>PureTony | Gallery</title>
      </Head>
      <div className="w-full h-1 bg-blue-200"></div>
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <header className="max-w-6xl mx-auto pb-5">
          <h1 className="text-5xl text-gray-800 font-bold text-center">
            PureTony Gallery
          </h1>
        </header>
        <main className="max-w-6xl mx-auto p-5">
          <div className="flex">
            <video
              src="/videos/video1.mp4"
              autoPlay={true}
              className="w-3/5 h-96"
              loop={Infinity}
            ></video>
            <div className="flex flex-col gap-5">
              <p className="text-lg font-medium italic text-gray-700">
                The best urban streetwear in town.
              </p>
              <div className="flex gap-1 shadow-lg">
                <Image src="/gallery/3.jpg" width={330} height={330} />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto flex p-10 gap-4 mt-4 border-t border-gray-600">
            <Image src="/gallery/2.jpg" width={300} height={300} />
            <Image src="/gallery/3.jpg" width={300} height={300} />
            <Image src="/gallery/1.jpg" width={300} height={300} />
          </div>
          <div className="relative w-full h-96 overflow-hidden">
            <video
              src="/videos/video2.mp4"
              autoPlay={true}
              loop={Infinity}
              className="absolute right-0 bottom-0 min-w-full w-auto h-96 bg-cover overflow-hidden"
            ></video>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default gallery;
