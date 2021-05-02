import React from "react";
import Image from "next/image";

import getStrapiMedia from "../utils/media";

const HomePageCard = ({ imgsrc, text }) => {
  return (
    <div className="bg-white border rounded-lg px-4 py-8 border-gray-300 shadow-sm w-40 h-40 mt-4 hover:bg-pink-50 transition duration-200">
      <div className="w-14 mx-auto">
        <Image src={imgsrc} width={50} height={50} />
      </div>
      <div className="mt-4">
        <p className="text-center font-semibold text-gray-900">{text}</p>
      </div>
    </div>
  );
};

export default HomePageCard;
