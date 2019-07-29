import React, { useContext } from "react";
import { OrderContext } from "../contexts/orderContext";

function Navbar() {
  const { orders } = useContext(OrderContext);
  console.log(orders);

  return (
    <div className="navbar">
      <h1>
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          THe FURA aPP
        </a>
      </h1>
      <p>There are currently {orders.length || "no"} orders</p>
    </div>
  );
}

export default Navbar;
