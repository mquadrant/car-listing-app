import React, { useState, useContext, useEffect } from "react";
import { OrderContext } from "../contexts/orderContext";

function OrderForm() {
    const { dispatch } = useContext(OrderContext);
    const [name, setName] = useState("");
    const [noOfOrders, setNoOfOrders] = useState(0);
    const [errors, setErrors] = useState("");
    const handleOrderFormSubmit = e => {
        e.preventDefault();
        console.log(name, noOfOrders);
        dispatch({
            type: "ADD_ORDER",
            order: {
                name,
                noOfOrders,
            },
        });
    };

    const nameFieldHandler = e => {
        setName(e.target.value);
    };

    const orderFieldHandler = e => {
        setNoOfOrders(e.target.value);
    };

    useEffect(() => {
        console.log(noOfOrders);

        if (
            typeof parseInt(noOfOrders) !== "number" ||
            isNaN(parseInt(noOfOrders))
        ) {
            setNoOfOrders("");
            setErrors("Please provide a valid no of Orders...");
        } else {
            setErrors("");
        }
    }, [noOfOrders]);

    return (
        <form onSubmit={handleOrderFormSubmit}>
            <div className="error">{errors}</div>
            <input
                type="text"
                placeholder="Your Name..."
                value={name}
                onChange={nameFieldHandler}
            />
            <input
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
