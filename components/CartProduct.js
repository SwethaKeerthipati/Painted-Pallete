// CartProduct.js

import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../slices/cartSlice";
import Image from "next/image";

function CartProduct({ id, title, price, image, quantity }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className="cart-product border p-4 rounded-md flex items-center mb-4">
      <div className="image-container w-40 h-40 mr-4">
        <Image
          src={image}
          alt={title}
          height={100}
          width={200}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="product-details">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">Price: €{price}</p>
        <div className="flex items-center mt-2">
          <label htmlFor={`quantity-${id}`} className="mr-2">
            Quantity:
          </label>
          <input
            type="number"
            id={`quantity-${id}`}
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 px-2 py-1 border rounded-md"
          />
        </div>
        <p className="mt-2 font-bold">Total Price: €{totalPrice}</p>
        <button
          onClick={handleRemoveFromCart}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
