import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLocalLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn("email", { email, password });
      console.log("Login Response:", response);
      toast.success("Login successful!"); // Show success toast
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Invalid email, username, or password."); // Show error toast
    }
    // signIn("email", { email, password });
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  const handleGithubLogin = () => {
    signIn("github");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLocalLogin} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Sign in
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2"
        >
          Login with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="bg-black text-white py-2 px-4 rounded-lg"
        >
          Login with GitHub
        </button>
      </div>
      <p className="mt-4">
        New here?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </p>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default LoginForm;
