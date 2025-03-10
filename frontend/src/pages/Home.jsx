import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-3 gap-4 p-4">
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Home</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium vel ipsum iure repellat saepe itaque voluptas, vero
              provident. Neque eligendi officia ducimus libero sapiente
              aspernatur nesciunt at assumenda saepe deleniti!
            </p>
            <div className="flex gap-4">
              <Link
                to="/about"
                className="font-bold bg-black text-white w-fit px-4 py-2 rounded-md hover:bg-gray-800 transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-bold bg-black text-white w-fit px-4 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img
            src="/assets/home.jpg"
            alt="Home"
            className="w-50 h-50 rounded-lg shadow"
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-4 p-4 bg-black text-white">
        <div className="p-2 border-r-2">
          <h2>50+</h2>
          <p>Lorem ipsum.</p>
        </div>
        <div className="p-2 border-r-2">
          <h2>50+</h2>
          <p>Lorem ipsum.</p>
        </div>
        <div className="p-2 ">
          <h2>50+</h2>
          <p>Lorem ipsum.</p>
        </div>
        <div className="p-2">
          <h2>50+</h2>
          <p>Lorem ipsum.</p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-4 p-4">
      <div className="col-span-1">
          <img
            src="/assets/home.jpg"
            alt="Home"
            className="w-50 h-50 rounded-lg shadow"
          />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Home</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium vel ipsum iure repellat saepe itaque voluptas, vero
              provident. Neque eligendi officia ducimus libero sapiente
              aspernatur nesciunt at assumenda saepe deleniti!
            </p>
            <div className="flex gap-4">
              <Link
                to="/about"
                className="font-bold bg-black text-white w-fit px-4 py-2 rounded-md hover:bg-gray-800 transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-bold bg-black text-white w-fit px-4 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
