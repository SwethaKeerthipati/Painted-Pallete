import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
import Header from "../../components/Header";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <Header />
      <div className="cart-page container mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.map((item) => (
          <CartProduct key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default CartPage;
