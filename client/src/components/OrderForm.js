import React, { useState, useContext, useEffect } from "react";
import { OrderContext } from "../contexts/orderContext";
import addOrder from "../APIservice/addOrder";
import getOrders from "../APIservice/getOrders";

function OrderForm() {
  const { dispatch } = useContext(OrderContext);
  const [name, setName] = useState("");
  const [noOfOrders, setNoOfOrders] = useState(0);
  const [errors, setErrors] = useState("");

  const handleOrderFormSubmit = async e => {
    e.preventDefault();
    if (name.length <= 3) {
      setErrors(errors + "\nPlease input a valid name");
      document.querySelector("#name").focus();
      document.querySelector("#name").select();
      return;
    }
    if (noOfOrders === 0) {
      setErrors("You must order at least one bottle");
      document.querySelector("#noOfOrders").focus();
      document.querySelector("#noOfOrders").select();
      return;
    }
    console.log(name, noOfOrders);
    const payload = {
      name,
      noOfOrders,
    };

    await addOrder(payload);
    await getOrders(dispatch);
  };

  const nameFieldHandler = e => {
    setName(e.target.value);
  };

  const orderFieldHandler = e => {
    setNoOfOrders(e.target.value);
  };

  useEffect(() => {
    if (name.length > 3) {
      setErrors("");
    }
  }, [name]);

  useEffect(() => {
    console.log(noOfOrders);

    if (
      typeof parseInt(noOfOrders) !== "number" ||
      isNaN(parseInt(noOfOrders))
    ) {
      setNoOfOrders("");
      setErrors("Please provide a number as the no of Orders...");
    } else {
      setErrors("");
    }
  }, [noOfOrders]);

  return (
    <form onSubmit={handleOrderFormSubmit}>
      <div className="error">{errors}</div>
      <input
        id="name"
        type="text"
        placeholder="Your Name..."
        value={name}
        onChange={nameFieldHandler}
      />
      <input
        id="noOfOrders"
        type="text"
        placeholder="How many Fura bottles"
        value={noOfOrders}
        onChange={orderFieldHandler}
      />
      <input type="submit" value="Add order" />
    </form>
  );
}

export default OrderForm;
