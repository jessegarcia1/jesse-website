import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-green-300 h-auto py-12 flex flex-col items-center drop-shadow-lg">
      <h1 className="font-bold text-4xl mb-6 text-black">Contact Me!</h1>
      <div className="bg-white w-11/12 lg:w-3/5 p-6 rounded-lg drop-shadow-lg">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
