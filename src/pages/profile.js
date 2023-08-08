import { useSession } from "next-auth/react";
import Image from "next/image";
import Header from "../../components/Header";
import { getSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4 capitalize">
          Hello{" "}
          <span role="img" aria-label="Heart">
            ❤️
          </span>{" "}
          {session?.user?.name.split(" ")[1]}
        </h1>
        {session ? (
          <div className="artistic-background rounded-xl">
            <div className="profile-info">
              <div className="w-24 h-24 rounded-full mx-auto mb-4">
                <Image
                  src={session.user.image}
                  alt="Profile Image"
                  className="object-cover w-full h-full rounded-full"
                  height={300}
                  width={300}
                />
              </div>
              <p className="mb-2 capitalize">
                <span className="font-semibold">Name:</span> {session.user.name}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                {session.user.email}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center">Please sign in to view your profile.</p>
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

        .artistic-background {
          background-image: url("/products/lightt.jpg");
          background-size: cover;
          background-position: center;
          position: relative;
          padding: 40px; // Add some padding to the content
        }

        /* .profile-info {
          background: rgba(255, 255, 255, 0.7);
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        } */
      `}</style>
    </>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
