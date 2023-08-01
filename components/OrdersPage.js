import { useSession } from "next-auth/react";
import Link from "next/link";

export default function OrdersPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-2xl font-bold">Orders</h1>
      <div className="mt-4">
        {!session ? (
          <p className="text-red-500">Please Login to check your orders.</p>
        ) : (
          <div>
            <p>Order 1</p>
            <p>Order 2</p>
          </div>
        )}
      </div>
      <div className="mt-4">
        <Link href="/">
          <a className="text-blue-600 hover:underline">Go back to homepage</a>
        </Link>
      </div>
    </div>
  );
}
