import React from "react";
import styles from "../src/styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="m-auto bg-slate-50 rounded-md w-full h-3/4 grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.greetImg}></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
