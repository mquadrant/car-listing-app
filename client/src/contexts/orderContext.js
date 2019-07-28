import React, { createContext, useReducer } from "react";
import { orderReducer } from "../reducers/orderReducer";

export const OrderContext = createContext();

const OrderContextProvider = props => {
    const [orders, dispatch] = useReducer(orderReducer, [
        { name: "Emmanuel", noOfOrders: 2, id: "1" },
        { name: "Cynthia", noOfOrders: 1, id: "2" },
        { name: "Tolu", noOfOrders: 1, id: "3" },
        { name: "Tega", noOfOrders: 1, id: "4" },
    ]);
    return (
        <OrderContext.Provider value={{ orders, dispatch }}>
            {props.children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;
