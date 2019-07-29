import React, { useContext } from "react";
import { OrderContext } from "../contexts/orderContext";

function OrderDetails({ order }) {
  const { dispatch } = useContext(OrderContext);
  // console.log(order);

  return (
    <li
      style={{ margin: "5px", padding: "5px" }}
      onClick={e => dispatch({ type: "REMOVE_ORDER", id: order.id })}
    >
      <div className="title">{order.name}</div>
      <div className="noOfOrder">
        {order.noOfOrders}{" "}
        {order.noOfOrders > 1 ? "Fura Bottles" : "Fura Bottle"}
      </div>
    </li>
  );
}

export default OrderDetails;
