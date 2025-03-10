import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!user.email || !user.password) {
      alert("All fields are required!");
      return;
    }

    try {
      setLoading(true);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-black h-screen">
        <div className="bg-black w-full max-w-md text-white border p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={user.email}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="off"
                value={user.password}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-black text-white"
              />
            </div>
            <button
              type="submit"
              name="submit"
              disabled={loading}
              className={`w-full border text-white py-2 rounded transition duration-300 
              ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black hover:bg-white hover:text-black hover:border-black cursor-pointer"
              }
            `}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
