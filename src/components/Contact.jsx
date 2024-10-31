import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "betchie_service";
    const templateID = "template_y7yn0gb";
    const publicKey = "-O6v3gfJg64AwOaeQ";

    // contains the template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jesse Garcia",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent succesfully", response);
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sendin email", error);
      });
  };

  return (
    <div className="w-full bg-green-300 h-auto py-12 flex flex-col items-center drop-shadow-lg">
      <h1 className="font-bold text-4xl mb-20 text-black">Contact Me!</h1>
      <div className="bg-white w-11/12 lg:w-3/5 p-6 rounded-lg drop-shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
