import Image from "next/image";
import { getStrapiMedia } from "../utils/media";

export default function Home({ products }) {
  console.log(products);
  return (
    <div>
      <div>Pure Tony</div>
      {products.map((product, i) => (
        <div key={i}>
          <h1>{product.name}</h1>
          <Image
            src={getStrapiMedia(product.photo)}
            alt=""
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
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
