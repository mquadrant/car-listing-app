import React, { useContext } from "react";
import OrderDetails from "./OrderDetails";
import { OrderContext } from "../contexts/orderContext";

function OrderList() {
    const { orders } = useContext(OrderContext);
    console.log(orders);

    return orders.length ? (
        <div className="order-list">
            <ul>
                {orders.map(order => {
                    return <OrderDetails order={order} key={order.id} />;
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            No orders yet. Make the first order today and stand a chance to win
            a free drink at the end of the week
        </div>
    );
}

export default OrderList;
