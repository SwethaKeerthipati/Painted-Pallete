import { CheckCircle } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";

function Success() {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  if (sessionStatus === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Head>
        <title>Painted Palette | Order Placed Successfully</title>
      </Head>
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:p-10 sm:p-8 p-6 bg-white shadow-md rounded-md animate-fade-in animate-bounce animate-color-change">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircle className="text-green-500 lg:h-10 md:h-8 h-6" />
            <h1 className="sm:text-2xl xxs:text-xl text-lg font-medium ml-2">
              Order Placed Successfully
            </h1>
          </div>
          <p className="sm:text-base text-sm">
            Thank you for shopping with us. Your order will be delivered soon.
          </p>
          <button
            className="button mt-8 lg:text-lg text-base text-white rounded-xl p-2"
            onClick={() => router.replace("/orders")}
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
