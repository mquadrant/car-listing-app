import React, { createContext, useReducer, useEffect } from "react";
import { orderReducer } from "../reducers/orderReducer";

import getOrders from "../APIservice/getOrders";
export const OrderContext = createContext();

const OrderContextProvider = props => {
  const [orders, dispatch] = useReducer(orderReducer, [
    { name: "Emmanuel", noOfOrders: 2, id: "1" },
    { name: "Cynthia", noOfOrders: 1, id: "2" },
    { name: "Tolu", noOfOrders: 1, id: "3" },
    { name: "Tega", noOfOrders: 1, id: "4" },
  ]);

  useEffect(() => {
    getOrders(dispatch);
    document.querySelector("#name").focus();
    document.querySelector("#name").select();
  }, []);
  return (
    <OrderContext.Provider value={{ orders, dispatch }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
