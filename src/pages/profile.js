import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>User Profile</h1>
      {session ? (
        <>
          <p>Name: {session.user.name}</p>
          <p>Email: {session.user.email}</p>
          {/* Display other user information */}
        </>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
