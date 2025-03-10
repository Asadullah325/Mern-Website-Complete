import React, { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!contact.name || !contact.email || !contact.message) {
      alert("All fields are required!");
      return;
    }

    try {
      setLoading(true);
      // Simulate a request
      setTimeout(() => {
        alert("Message sent successfully!");
        setLoading(false);
      }, 2000);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-black h-screen">
        <div className="bg-black w-full max-w-md text-white border p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={contact.name}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-black text-white"
              />
            </div>
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
                value={contact.email}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                autoComplete="off"
                value={contact.message}
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
              {loading ? "Loading..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
