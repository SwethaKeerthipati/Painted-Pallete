import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { Remove } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/router";
import axios from "axios";

function CartProduct({
  id,
  title,
  price,
  image,
  quantity,
  category,
  description,
  border,
  disabled,
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const total = price * quantity;
  const addItemToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
        quantity: 1,
        category,
        description,
      })
    );
  };
  const removeItemFromCart = () => dispatch(removeFromCart({ id }));
  const incQty = () =>
    dispatch(
      updateQuantity({
        id,
        title,
        price,
        description,
        category,
        image,
        quantity: quantity + 1,
      })
    );
  const decQty = () =>
    dispatch(
      updateQuantity({
        id,
        title,
        price,
        description,
        category,
        image,
        quantity: quantity - 1,
      })
    );

  const updateQuantity =
    ({ id, title, price, description, category, image, quantity }) =>
    (dispatch) => {
      if (quantity === 0) {
        dispatch(removeFromCart({ id }));
      } else {
        dispatch({
          type: "cart/updateQuantity",
          payload: { id, title, price, description, category, image, quantity },
        });
      }
    };

  return (
    <div
      className={`block bg-white py-6 sm:grid sm:grid-cols-5 ${
        border ? "border-b border-gray-300" : ""
      }`}
    >
      <>
        <div className="text-center sm:text-left my-auto">
          <Image
            src={image}
            width={150}
            height={150}
            objectFit="contain"
            className="cursor-pointer"
            alt=""
            onClick={() => router.push(`/product-details/${id}`)}
          />
        </div>

        <div className="col-span-3 sm:p-4 mt-2 mb-6 sm:my-0">
          <h4 className="mb-3 link lg:text-xl md:text-lg text-base capitalize font-medium">
            {title}
          </h4>
          <p className="lg:text-sm text-xs my-2  mb-4 line-clamp-3 link text-gray-500">
            {description}
          </p>
          <span className="font-medium md:text-base text-sm">
            {quantity} × €{price} =
            <span className="font-bold text-gray-700 mx-1">€{total}</span>
          </span>
        </div>

        <div className="flex flex-col space-y-4 my-auto  justify-self-end">
          <div className="flex justify-between">
            <button
              className={`button sm:p-1 ${disabled ? "opacity-50" : ""}`}
              onClick={decQty}
              disabled={disabled}
            >
              <Remove className="h-5 rounded-2xl text-white" />
            </button>
            <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
              <span className="font-bold md:text-base text-sm text-gray-700">
                {quantity}
              </span>
            </div>
            <button
              className={`button sm:p-1 ${disabled ? "opacity-50" : ""}`}
              onClick={incQty}
              disabled={disabled}
            >
              <Add className="h-5 rounded-2xl text-white" />
            </button>
          </div>
          <button
            className={`button py-2  lg:px-10 md:px-8 px-6 rounded-2xl text-white ${
              disabled ? "opacity-50" : ""
            }`}
            onClick={removeItemFromCart}
            disabled={disabled}
          >
            Remove
          </button>
        </div>
      </>
    </div>
  );
}

export default CartProduct;
