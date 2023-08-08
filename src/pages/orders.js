import React from "react";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OrdersPage from "../../components/OrdersPage";

const Orders = () => {
  const loginLinkStyle = {
    cursor: "pointer",
    color: "blue",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  const { data: session } = useSession();

  return (
    <>
      <Header />
      <div className="orders-page">
        <h1 className="text-xl font-semibold ml-5 mt-4 mb-2 ">Your Orders</h1>
        <hr className="mb-2 border-t-2 border-gray-300" />
        {!session ? (
          <div className="login-message flex flex-col items-center justify-center">
            <p className="text-lg mb-2">
              Please{" "}
              <span
                style={loginLinkStyle}
                onClick={() => signIn()}
                className="cursor-pointer"
              >
                Login
              </span>{" "}
              to view your orders.
            </p>
            <div className="flex justify-center mt-4">
              <Image
                src="/products/creditsss.jpg"
                alt="Orders Image"
                width={500}
                height={500}
              />
            </div>
          </div>
        ) : (
          <OrdersPage session={session} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Orders;
