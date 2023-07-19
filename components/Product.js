import Image from "next/image";

export default function Product({ name, description, price, image }) {
  // console.log(price);
  return (
    <div className="w-64">
      <div className="bg-blue-100 p-5 rounded-xl">
        <Image src={image} width={200} height={300} alt="Rabbit" />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <p className="text-sm mt-2 leading-5">{description}</p>
      <div className="flex mt-1">
        <div className="text-2xl font-bold grow">${price}</div>
        <button className="bg-blue-400 text-white py-1 px-3 rounded-xl">
          +
        </button>
      </div>
    </div>
  );
}
