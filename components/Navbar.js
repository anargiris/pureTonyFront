import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
import { CartContext } from "../components/context/CartContext";

const Navbar = () => {
  const [session] = useSession();
  const [cartItems, setCartItems] = useContext(CartContext);
  const handleLogin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <nav className="flex justify-between py-2 md:px-40 px-5 max-w-full border-b border-gray-200 shadow-sm">
      <div>
        <ul className="flex gap-5">
          <li className="cursor-pointer">
            <Link href="/">
              <Image
                src="/gallery/logo.png"
                className=""
                height={50}
                width={100}
              />
            </Link>
          </li>

          <li className="mt-3 font-rubik">
            <Link href="/shop">
              <a className="text-gray-800 text-xl cursor-pointer border-b border-gray-50 hover:border-pink-400 transition duration-150 font-semibold">
                SHOP
              </a>
            </Link>
          </li>

          <li className="mt-3 font-rubik">
            <Link href="/cart">
              <a className="text-gray-800 text-xl relative cursor-pointer border-b border-gray-50 hover:border-pink-400 transition duration-150 font-semibold">
                CART{" "}
                {cartItems.length > 0 && (
                  <span className="absolute text-center h-2 w-2 text-sm mt-1 rounded-full bg-red-600 "></span>
                )}
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 text-gray-600 shadow-sm rounded-lg px-4">
        {session ? (
          <>
            <div className="flex gap-4 mt-2 mb-1">
              <img
                src={session.user.image}
                className="user"
                className="w-10 h-10 rounded-full shadow-md "
              />
              <a
                href="#"
                onClick={handleLogout}
                className="logout mt-2 font-rubik"
              >
                Logout
              </a>
            </div>
          </>
        ) : (
          <div className="mt-3">
            <a href="#" onClick={handleLogin} className="logout font-rubik">
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
