import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="w-full relative border-t border-gray-400 text-white shadow-md py-5"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-5xl mx-auto flex gap-5 relative">
        <div className="px-2 flex-col border-r border-gray-600">
          <h3 className="text-sm font-semibold mb-2 pointer-events-none">
            Copyright &copy; 2021 <br /> PureTony Clothing
          </h3>
          <a
            href="https://www.instagram.com/puretony_clothing/?hl=en"
            target="_blank"
            className="cursor-pointer"
          >
            <Image
              src="/icons/instagram.svg"
              width={20}
              height={20}
              className="transform bg-white rounded-md hover:scale-105 transition duration-75"
              alt="Instagram link footer image."
            />
          </a>
        </div>

        <div className="flex flex-col justify-between border-r border-gray-600 pr-2">
          <h4>
            <span className="font-semibold">Contact:</span>
            <br />
          </h4>
          <a className="" href="mailto:anargiriss@hotmail.com">
            <Image
              src="/icons/mail-outline.svg"
              width={20}
              height={20}
              className="transform bg-white rounded-md hover:scale-105 transition duration-75"
              alt="Send mail footer image."
            />
          </a>
        </div>
        <div className="flex flex-col justify-between border-r border-gray-600 pr-2">
          <p>
            <span className="font-semibold">Made with:</span>
            <br />
          </p>
          <p className="text-sm">
            NextJS, Strapi,
            <br /> Tailwind, MongoDB
          </p>
        </div>
      </div>
      <div className="absolute text-yellow-100 bottom-0 right-0 p-1 text-xs">
        Anargyros Stylidis
      </div>
    </footer>
  );
};

export default Footer;
