import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-black justify-center h-screen">
        <h1 className="text-4xl text-white font-bold">404</h1>
        <h2 className="text-2xl text-white">Page not found</h2>
        <div className="flex gap-4 mt-4">
            <Link to="/" className="font-bold bg-black text-white w-fit px-4 py-2 rounded-md hover:bg-gray-800 transition">Go Home</Link>
            <Link to="/contact" className="font-bold bg-black text-white w-fit px-4 py-2 rounded-md hover:bg-gray-800 transition">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Error;
