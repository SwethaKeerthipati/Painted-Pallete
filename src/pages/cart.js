import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
import Header from "../../components/Header";
import { signIn, useSession } from "next-auth/react";
import { CreditCard } from "@mui/icons-material";
import Image from "next/image";
import { useState, useEffect } from "react";
import cartReducer, { selectTotal, emptyCart } from "../../slices/cartSlice";
import { convert } from "currency-convert";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [disabled, setDisabled] = useState(false);
  const total = useSelector(selectTotal);
  const [subtotal, setSubtotal] = useState(null);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };
  useEffect(() => {
    // Convert the total from your store's currency to euros
    const convertToEuros = async () => {
      try {
        const totalInEuros = await convert(total, { from: "INR", to: "EUR" });
        setSubtotal(totalInEuros);
      } catch (error) {
        console.error("Error converting currency:", error);
      }
    };
    if (cartItems.length > 0) {
      // Calculate the total in your store's currency
      const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setSubtotal(total);
      convertToEuros();
    }
  }, [cartItems]);
  return (
    <>
      <Header />
      <div className="bg-gray-100 py-10 md:px-6 heightFix">
        <main className="max-w-screen-xl mx-auto">
          {cartItems.length ? (
            <div className="my-6 shadow rounded-md">
              <div className="flex flex-col md:p-8  p-6  bg-white">
                <h1 className="sm:text-2xl text-xl  font-semibold border-b-2 border-gray-200 pb-4 text-gray-700">
                  Shopping Cart
                </h1>
                <div className="flex justify-between items-center py-6">
                  <span className="font-medium text-lg text-blue-400">
                    Items
                    <span className="font-semibold text-xl ml-2">
                      {cartItems.length}
                    </span>
                  </span>
                  <button
                    className={`bg-red-300 py-2 px-8 xs:px-10 ${
                      disabled ? "opacity-50" : ""
                    }`}
                    onClick={handleEmptyCart}
                    disabled={disabled}
                  >
                    Empty Cart
                  </button>
                </div>
                {cartItems.map((item, i) => (
                  <CartProduct
                    key={item.id}
                    {...item}
                    border={i !== cartItems?.length - 1}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full px-6 lg:py-20 sm:py-10 py-4">
              <div className="text-center md:max-w-none sm:w-auto mx-auto max-w-xs w-4/5">
                <Image
                  src="/products/empty-cart.gif"
                  alt=""
                  width={350}
                  height={350}
                  objectFit="contain"
                />
              </div>
            </div>
          )}
          {cartItems.length ? (
            <div className="flex flex-col bg-white md:p-10  py-8 px-6 shadow-md rounded-md md:text-xl sm:text-lg text-base my-10">
              <h2 className="whitespace-nowrap font-semibold overflow-x-auto hideScrollBar">
                Subtotal ({cartItems.length} items) :
                <span className="font-bold text-red-500 mx-2">
                  {subtotal && (
                    <span>
                      € <span className="font-bold">{subtotal.toFixed(2)}</span>
                    </span>
                  )}
                </span>
              </h2>
              {session ? (
                <button
                  role="link"
                  className={`button mt-6 flex items-center justify-center lg:text-lg text-base  py-2 ${
                    disabled ? "opacity-50" : ""
                  }`}
                  // onClick={!disabled ? createCheckoutSession : () => {}}
                  // disabled={disabled}
                >
                  <CreditCard className="sm:w-6 w-5" />
                  <span className="ml-2">Proceed to checkout </span>
                </button>
              ) : (
                <button
                  role="link"
                  className="button mt-6 lg:text-lg text-base py-2"
                  onClick={signIn}
                >
                  Sign in to checkout
                </button>
              )}
            </div>
          ) : (
            <></>
          )}
        </main>
      </div>
    </>
  );
}

export default CartPage;
