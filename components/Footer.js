import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-900 border-t border-gray-400 shadow-md mt-10 py-5">
      <div className="max-w-5xl mx-auto flex gap-5">
        <div className="px-2 border-r border-gray-600">
          <h3 className="text-sm font-semibold pointer-events-none">
            Copyright &copy; 2021 <br /> PureTony Clothing
          </h3>
        </div>
        <div className="flex-col border-r border-gray-600 pr-4">
          <h4 className="font-semibold mb-1">Follow us</h4>
          <ul className="flex-col gap-5">
            <li className="cursor-pointer text-sm">
              <a
                href="https://www.instagram.com/puretony_clothing/?hl=en"
                target="_blank"
              >
                <Image
                  src="/icons/instagram.svg"
                  width={20}
                  height={20}
                  className="transform hover:scale-110 transition duration-75"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            Send us an{" "}
            <a className="underline" href="mailto:anargiriss@hotmail.com">
              email
            </a>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
