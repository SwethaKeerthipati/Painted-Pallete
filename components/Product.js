import Image from "next/image";

function Product({ _id, title, price, description, category, image }) {
  return (
    <div className="relative flex flex-col bg-white z-20  md:p-8 p-6 rounded-md shadow-lg">
      <Image
        src={image}
        height={200}
        width={200}
        alt=""
        objectFit="contain"
        className="cursor-pointer w-80 h-60 object-cover rounded-xl"
      />
      <div className="mt-2">
        <h3 className="font-medium capitalize">{title}</h3>
      </div>

      <p className="text-xs  mb-2 line-clamp-2 text-gray-500 link">
        {description}
      </p>
      <div className="mb-5 mt-2 font-bold text-gray-700"> €{price}</div>
    </div>
  );
}

export default Product;
