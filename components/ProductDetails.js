import Image from "next/image";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Bolt } from "@mui/icons-material";
import Header from "./Header";
import { generateUniqueId } from "../utils/uuid";
import addedToCartToast from "../utils/Toast/addedToCart";

function ProductDetails({ title, price, description, category, image }) {
  const router = useRouter();
  const uniqueId = generateUniqueId();
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = {
      id: uniqueId,
      title,
      description,
      price,
      image,
      quantity: 1,
      toast: true,
    };
    dispatch(addToCart(product));
    addedToCartToast(image, title);
  };

  const handleBuyNow = () => {
    const product = {
      id: uniqueId,
      title,
      description,
      price,
      image,
      quantity: 1,
      toast: false,
    };
    dispatch(addToCart(product));
    router.push("/cart");
  };

  return (
    <>
      <Header />
      <div className="heightFix px-6 lg:py-32 md:py-28 py-12 pb-20">
        <div className="max-w-screen-xl flex items-center mx-auto">
          <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
            {router.isFallback ? (
              <Skeleton width={400} height={400} />
            ) : (
              <div className="mx-auto">
                <Image
                  src={image}
                  alt=""
                  width={400}
                  height={400}
                  objectFit="contain"
                />
              </div>
            )}
            <div className="flex-grow xl:max-w-2xl lg:max-w-xl  md:max-w-md">
              {router.isFallback ? (
                <Skeleton count={12} />
              ) : (
                <>
                  <h3 className="font-bold xl:text-3xl  lg:text-3xl text-2xl mb-2 capitalize">
                    {title}
                  </h3>
                  <p className="text-blue-400 capitalize italic mb-4 font-medium">
                    {category}
                  </p>
                  <p className="text-justify text-sm lg:text-base my-6">
                    {description}
                  </p>
                  <p className="text-2xl font-semibold text-gray-700">
                    €{price}
                  </p>
                  <div className="mt-10 flex xs:flex-row sm:gap-8 gap-6">
                    <button
                      className="bg-blue-400 px-10  py-2 flex items-center justify-center"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCartIcon className="w-4" />
                      <span className="ml-2">Add to Cart</span>
                    </button>
                    <button
                      className=" bg-green-500 px-10 py-2 flex items-center justify-center"
                      onClick={handleBuyNow}
                    >
                      <Bolt className="w-4" />
                      <span className="ml-2">Buy Now</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
