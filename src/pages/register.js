import { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Other form fields (e.g., name, profile picture, etc.)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement user registration logic, e.g., saving user data to the database.
    // Make a POST request to your API route for user registration.
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password /* other user data */ }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Registration success, redirect to the user profile page or any other page.
      router.push("/profile");
    } else {
      // Registration failed, handle the error appropriately.
      const data = await response.json();
      console.error(data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Other form fields */}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
