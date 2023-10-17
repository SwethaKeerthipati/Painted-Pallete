import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold">Your Orders</h1>
      <div className="mt-4">
        {orders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li key={order.id} className="bg-white p-4 shadow-md rounded-md">
                <p>Order ID: {order.id}</p>
                <p>Total Amount: ${order.totalAmount}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Orders;
