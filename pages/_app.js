import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { CartProvider } from "../components/context/CartContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Provider>
    </>
  );
}

export default MyApp;
