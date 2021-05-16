import React, { useState, useContext } from "react";

import { CartContext } from "./context/CartContext";

const OnDelivery = ({ order }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [orderDone, setOrderDone] = useState(false);

  const postOrder = () => {
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
    }
  };
  console.log(order);

  return (
    <div>
      hello
      {postOrder()}
    </div>
  );
};

export default OnDelivery;
