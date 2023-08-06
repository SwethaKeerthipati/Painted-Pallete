import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <h2 className="text-4xl text-center font-bold mb-4 italic">
          Welcome to Painted Palette
        </h2>

        <div className="bg-gradient-to-r from-indigo-100 to-blue-200 py-1 mb-8"></div>

        <section className="flex flex-col items-center mb-10">
          <div className="w-full max-w-screen-xl">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg shadow-md"
              width={1920}
              height={1080}
            >
              <source src="/products/canvas.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <div className="w-full max-w-screen-xl">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg shadow-md"
              width={1920}
              height={1080}
            >
              <source src="/products/canva.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <Image
              src="/products/cuteimage.jpg"
              alt="Image 2"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex items-center">
            <div className="p-8 bg-white rounded-lg shadow-md w-full h-full italic text-center bg-green-100">
              <h2 className="text-2xl font-bold mb-4">
                Thank you for Visiting!
              </h2>
              <p>
                Thank you for visiting my page and taking the time to explore
                the world of art through my eyes. Your support and appreciation
                mean the world to me. I hope my paintings resonate with you and
                bring a spark of joy to your heart❤️
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-12">
          <div className="flex justify-center">
            <div className="p-6 bg-purple-100 rounded-lg shadow-md">
              <p className="text-lg text-purple-600">
                If you find a piece that speaks to you, it would be an honor to
                know that it found a special place in your home. Let us embark
                on a journey of self-discovery together through the magical
                world of art.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-6">
          <div className="flex justify-center">
            <div className="p-6 bg-pink-100 rounded-lg shadow-md">
              <p className="text-lg text-pink-600">
                Here is to a future filled with color, creativity, and endless
                possibilities. Let us create together and make this world a more
                beautiful place, one brushstroke at a time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 bg-gray-300 text-sm">
        &copy; Painted Palette {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default AboutPage;
