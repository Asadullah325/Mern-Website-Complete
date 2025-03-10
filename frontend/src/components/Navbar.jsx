import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between p-3 bg-black text-white">
        <div>
          <Link to="/" className="font-bold text-2xl">Mern Website</Link>
        </div>
        <nav className="flex gap-4">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="font-bold border-b-2 hover:font-bold hover:border-b-2">Home</Link>
            </li>
            <li>
              <Link to="/about" className="font-bold border-b-2 hover:font-bold hover:border-b-2">About</Link>
            </li>
            <li>
              <Link to="/contact" className="font-bold border-b-2 hover:font-bold hover:border-b-2">Contact</Link>
            </li>
            <li>
              <Link to="/services" className="font-bold border-b-2 hover:font-bold hover:border-b-2">Service</Link>
            </li>
            <li>
              <Link to="/login" className="font-bold border-b-2 hover:font-bold hover:border-b-2">Login</Link>
            </li>
            <li>
              <Link to="/register" className="font-bold border-b-2 hover:font-bold hover:border-b-2">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
