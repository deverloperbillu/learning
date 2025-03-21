import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">Kababjees</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Menu</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </nav>
        <FaShoppingCart className="text-2xl cursor-pointer text-gray-600" />
      </header>
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <Image src="/hero.jpg" alt="Hero Image" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Delicious Food at Your Doorstep</h2>
          <p className="text-lg">Order now and enjoy the best dishes from Kababjees</p>
          <button className="mt-4 bg-red-600 px-6 py-2 rounded text-white font-semibold hover:bg-red-700">
            Order Now
          </button>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Special Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <Image
                src={`/food${item}.jpg`}
                alt="Food Item"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-2">Delicious Dish</h3>
              <p className="text-gray-500">Tasty and fresh meal just for you.</p>
              <button className="mt-3 bg-red-600 px-4 py-2 text-white rounded hover:bg-red-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>© 2025 Kababjees. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
