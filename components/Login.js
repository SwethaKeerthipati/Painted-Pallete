import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Head from "next/head";
import Layout from "./Layout";
import styles from "../src/styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useFormik } from "formik";
import login_validate from "../lib/validate";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });
  console.log(formik.errors);
  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    console.log(status);
    if (status.ok) router.push(status.url);
  }

  const handleGoogleLogin = () => {
    signIn("google");
  };

  const handleGithubLogin = () => {
    signIn("github");
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-2">
        <div className="title">
          <h1 className="text-gray-800 text-xl font-bold py-2">Explore</h1>
          <p className="w-3/4 mx-auto text-black">
            {session
              ? `Welcome Back, ${session.user.name}!`
              : "Welcome Back and Login to Explore Arts!"}
          </p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="email"
              name="email"
              placeholder="email"
              className={styles.input_text}
              //   onChange={formik.handleChange}
              //   value={formik.values.email}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-1">
              <HiAtSymbol size={15} />
            </span>
          </div>
          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className={styles.input_text}
              //   onChange={formik.handleChange}
              //   value={formik.values.password}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-1"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={15} />
            </span>
          </div>

          {/* <div className="mb-4">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div> */}

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input_button">
            <div className={styles.button_container}>
              <button
                type="button"
                onClick={handleGoogleLogin}
                // className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2"
                className={styles.button_custom}
              >
                Sign In with Google
                <Image
                  src={"/products/google.svg"}
                  alt="google"
                  width="20"
                  height={20}
                ></Image>
              </button>
            </div>

            <div className={styles.button_container}>
              <button
                onClick={handleGithubLogin}
                className={styles.button_custom}
                // className="bg-black text-white py-2 px-4 rounded-lg"
              >
                Sign In with GitHub
                <Image
                  src={"/products/github.svg"}
                  alt="github"
                  width="20"
                  height={20}
                ></Image>
              </button>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-400 ">
          Not a Member Yet?{" "}
          <Link href={"/register"} legacyBehavior>
            <a className="text-blue-700">Sign Up</a>
          </Link>
        </p>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
        />
      </section>
    </Layout>
  );
};

export default LoginForm;
