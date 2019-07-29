import React, { useContext, useEffect, useState, useCallback } from "react";
import OrderDetails from "./OrderDetails";
import { OrderContext } from "../contexts/orderContext";

function OrderList() {
  let { orders } = useContext(OrderContext);
  let [list, setList] = useState([]);

  const resolveOrders = useCallback(async () => {
    let ordersList = await orders;
    setList(ordersList);
  }, [orders]);

  useEffect(() => {
    resolveOrders();
  }, [orders, resolveOrders]);

  return list.length > 0 ? (
    <div className="order-list">
      <ul>
        {list.map(order => {
          return <OrderDetails order={order} key={order._id || order.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      No orders yet. Make the first order today and stand a chance to win a free
      drink at the end of the week
    </div>
  );
}

export default OrderList;
