import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import OrderContextProvider from "./contexts/orderContext";

function App() {
    return (
        <div className="App">
            <OrderContextProvider>
                <Navbar />
                <OrderForm />
                <OrderList />
            </OrderContextProvider>
        </div>
    );
}

export default App;
