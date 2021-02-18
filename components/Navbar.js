import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex justify-between p-2">
      <ul className="flex gap-5">
        <li className="cursor-pointer text-lg border-b hover:border-pink-500">
          <Image
            src="/icons/home.svg"
            width={20}
            height={20}
            alt="Link to home page"
            className="mt-10"
          />
          <Link href="/">
            <a className="">Home</a>
          </Link>
        </li>

        <li className="cursor-pointer text-lg border-b hover:border-pink-500">
          <Image
            src="/icons/shop.svg"
            width={20}
            height={20}
            alt="Link to shop page"
          />
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>

        <li className="cursor-pointer text-lg border-b hover:border-pink-500">
          <Image
            src="/icons/cart.svg"
            width={20}
            height={20}
            alt="Link to cart page"
          />
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </li>

        <li className="cursor-pointer text-lg border-b hover:border-pink-500">
          <Image
            src="/icons/gallery.svg"
            width={20}
            height={20}
            alt="Link to cart page"
          />
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
