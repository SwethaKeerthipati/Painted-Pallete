import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function OrdersPage() {
  const { data: session } = useSession();
  const [orderCount, setOrderCount] = useState(null);

  useEffect(() => {
    const dummyOrderCount = 0;
    setOrderCount(dummyOrderCount);
  }, [session]);

  return (
    <div className="container">
      <div className="mt-4 orders-section">
        {!session ? (
          <p className="text-red-500">Please Login to check your orders.</p>
        ) : orderCount === null ? (
          <p className="text-red-500">Loading orders...</p>
        ) : orderCount === 0 ? (
          <p className="text-green-500 text-center">No orders found.</p>
        ) : (
          <div>{/* Render the orders here */}</div>
        )}
      </div>

      <style jsx>{`
        .container {
          min-height: calc(80vh - 100px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .orders-section {
          border-bottom: 1px solid #ccc;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
