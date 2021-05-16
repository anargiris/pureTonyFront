import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import OnDelivery from "../components/OnDelivery";
import Footer from "../components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useSession } from "next-auth/client";
import { PayPalButton } from "react-paypal-button-v2";
import { CartContext } from "../components/context/CartContext";

const checkout = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const router = useRouter();
  let products = [];
  const [session] = useSession();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  const [orderDone, setOrderDone] = useState(false);
  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postal: "",
    mobile: "",
    payment: "",
    items: null,
    orderId: "",
    amount: 0,
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      postal: "",
      mobile: "",
      payment: "onDelivery",
    },
    onSubmit: (values) => {
      cartItems.map((item) => products.push([item.product.name, item.size]));
      JSON.stringify(products);
      setStep1(false);
      setStep2(true);
      setOrder((prevOrder) => ({
        ...prevOrder,
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
        email: formik.values.email,
        address: formik.values.address,
        postal: parseInt(formik.values.postal),
        mobile: parseInt(formik.values.mobile),
        payment: formik.values.payment,
        items: products,
        amount: 0,
      }));
    },
  });

  const postOrder = () => {
    console.log(order);
    if (!orderDone) {
      fetch("https://aqueous-fortress-08267.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

      cartItems.map((item) => {
        let newQuantity = item.quantity - 1;
        fetch(
          `https://aqueous-fortress-08267.herokuapp.com/products/${item.product.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwZWJkODk4MDA2MWMxNGEwODY3OCIsImlhdCI6MTYxOTc5MjA3MywiZXhwIjoxNjIyMzg0MDczfQ.3tgFyH_9dwp0MNK2un79mcLq1QSwh-XyhKULAqvtdEA",
            },
            body: JSON.stringify({
              quantity: newQuantity,
            }),
          }
        )
          .then((response) => response.json())
          .then((data) => console.log(data));
      });
      setOrderDone(true);
      setCartItems([]);
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>PureTony | Checkout</title>
        <script src="https://www.paypal.com/sdk/js?client-id=AZwibABPB9iIzF5Os51Ky8MfzHSZhzgm2XCb63DDTsVBA2Zfqe5FfJHCqT1y1PHRqnfL2T8pbTgzNr27&disable-funding=credit,card"></script>
        <script src="https://www.paypalobjects.com/api/checkout.js" />
      </Head>
      <div className="w-full h-1 bg-purple-400"></div>

      <Navbar></Navbar>
      <section className="bg-gradient-to-t from-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto">
          {step1 && !step2 && (
            <div className="max-w-2xl my-10 mx-auto shadow-xl">
              <div className="w-full p-4 bg-gray-500 text-gray-100">
                <h1 className="text-xl font-bold leading-9">
                  Checkout Proccess
                </h1>
              </div>
              {/** FORM START */}
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col flex-wrap gap-4 p-4 text-gray-800 border border-gray-300 shadow-md text-lg"
              >
                <div className="flex flex-col sm:flex-row sm:gap-40 gap-5 w-full">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="firstName"
                      className="font-semibold text-gray-800"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="off"
                      required={true}
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
                      className="border border-gray-400 shadow-sm focus:outline-none focus:border-light-blue-400 focus:ring-2 focus:ring-light-blue-400 transition duration-150"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="lastName"
                      className="font-semibold text-gray-800"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="off"
                      required={true}
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      onBlur={formik.handleBlur}
                      className="border border-gray-400 shadow-sm focus:outline-none focus:border-light-blue-400 focus:ring-2 focus:ring-light-blue-400 transition duration-150"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-40 gap-5 w-full">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="font-semibold text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required={true}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="border border-gray-400 shadow-sm focus:outline-none focus:border-light-blue-400 focus:ring-2 focus:ring-light-blue-400 transition duration-150"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="address"
                      className="font-semibold text-gray-800"
                    >
                      Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="off"
                      required={true}
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      className="border border-gray-400 shadow-sm focus:outline-none focus:border-light-blue-400 focus:ring-2 focus:ring-light-blue-400 transition duration-150"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-40 gap-5 w-full">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="postal"
                      className="font-semibold text-gray-800"
                    >
                      Zip/Postal Code
                    </label>
                    <input
                      id="postal"
                      name="postal"
                      type="text"
                      autoComplete="off"
                      required={true}
                      onChange={formik.handleChange}
                      value={formik.values.postal}
                      className="border border-gray-400 shadow-sm focus:outline-none focus:border-light-blue-400 focus:ring-2 focus:ring-light-blue-400 transition duration-150"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="font-semibold text-gray-800"
                    >
                      Mobile Number
                    </label>
                    <input
                      required={true}
                      id="mobile"
                      name="mobile"
                      type="text"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      value={formik.values.mobile}
                      className="border border-gray-400 shadow-sm focus:outline-none focus:border-light-blue-400 focus:ring-2 focus:ring-light-blue-400 transition duration-150"
                    />
                  </div>
                </div>
                <select
                  name="payment"
                  value={formik.values.payment}
                  onChange={formik.handleChange}
                  required={true}
                  className=" border mt-4 focus:outline-none border-gray-400"
                >
                  <option value="onDelivery" label="On delivery" />
                  <option value="paypal" label="PayPal" />
                </select>

                <button
                  type="submit"
                  className="border rounded-md shadow-sm text-xl font-bold bg-gray-800 text-gray-100 py-3 mt-10 hover:bg-gray-700 focus:outline-none hover:text-gray-50 transition duration-150"
                >
                  {formik.values.payment !== "onDelivery" &&
                  formik.values.payment !== ""
                    ? "To Payment"
                    : "Submit"}
                </button>
              </form>
              {/** FORM END */}
            </div>
          )}
          {!step1 && step2 && formik.values.payment == "paypal" && (
            <div className="max-w-2xl my-10 mx-auto shadow-xl">
              <div className="w-full p-4 bg-gray-600 text-gray-100">
                <h1 className="text-xl font-bold leading-9">
                  Payment Proccess
                </h1>
              </div>
              <p className="text-xl pb-4">
                Continue with your payment to finish your purchase:
              </p>
              <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );

                  // POST the order to the backend

                  fetch("https://aqueous-fortress-08267.herokuapp.com/orders", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(order),
                  })
                    .then((response) => response.json())
                    .then((data) => console.log(data));

                  //Update Product's quantity
                  cartItems.map((item) => {
                    let newQuantity = item.quantity - 1;
                    fetch(
                      `https://aqueous-fortress-08267.herokuapp.com/products/${item.product.id}`,
                      {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwZWJkODk4MDA2MWMxNGEwODY3OCIsImlhdCI6MTYxOTc5MjA3MywiZXhwIjoxNjIyMzg0MDczfQ.3tgFyH_9dwp0MNK2un79mcLq1QSwh-XyhKULAqvtdEA",
                        },
                        body: JSON.stringify({
                          quantity: newQuantity,
                        }),
                      }
                    )
                      .then((response) => response.json())
                      .then((data) => console.log(data));
                  });
                  setCartItems([]);
                  router.push("/");
                }}
              />
            </div>
          )}

          {!step1 && step2 && formik.values.payment == "onDelivery" && (
            <>
              <h3 className="text-3xl font-black text-center mb-5">
                Finalize your order
              </h3>
              <p className="text-xl text-center mb-5">
                Click below to send your order.
              </p>
              <div className="w-24 m-auto">
                <button
                  className="text-center hover:bg-gray-900 hover:text-white transition duration-150 p-1 rounded-md border border-black"
                  onClick={postOrder}
                >
                  Send Order
                </button>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default checkout;
