import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function OrdersPage() {
  const { data: session } = useSession();

  return (
    <div className="container">
      <div className="mt-4 orders-section">
        {!session ? (
          <p className="text-red-500">Please Login to check your orders.</p>
        ) : (
          <div className="text-center">
            <div className="animated-image">
              {/* <p className="text-red-500 mb-4"></p> */}
              <Image
                src="/products/wipr.jpg"
                alt="In Progress"
                width={300}
                height={300}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          min-height: calc(80vh - 100px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .orders-section {
          border-bottom: 1px solid #ccc;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        .animated-image {
          animation: dance 2s infinite;
        }

        @keyframes dance {
          0%,
          100% {
            transform: translateY(0);
          }
          25%,
          75% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
