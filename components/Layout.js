import { inter } from "next/font/google";

inter = Inter({
  subsets: ["latin"],
  variable: --font - inter,
});

export default function Applayout({ children }) {
  return (
    <div className={`${inter.variable} font0-sans min-h-screen flex flex-cols`}>
      <header>header</header>
      <main className="flex-grow bg-[#f7f7f7]">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
