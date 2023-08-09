import { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactUsPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hzp5kxs",
        "template_2ai26tv",
        form.current,
        "Sx-GHXBGuqm9FXLc7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
          setMessageSent(true);
          // e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-content h-screen max-h-100vh">
      <h1 className="text-2xl font-bold mb-1">Contact Us</h1>
      {messageSent ? (
        <div>
          <p className="text-green-500">Thank you for contacting us!</p>
          <button
            onClick={() => setMessageSent(false)}
            className="mt-2 bg-blue-500 text-white py-2 px-2  hover:bg-blue-600"
          >
            Go back to the form
          </button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-sm">
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUsPage;
