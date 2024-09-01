// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import ai from '../assets/tos.png'
import ji from '../assets/ji.png'
import ta from '../assets/tabel.png'
const Contact = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8ntqheo", // replace with your service ID
        "template_ysnzad3", // replace with your template ID
        formData,
        "a_l6VVvshh9vBVJkM" // replace with your user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Message failed to send.");
        }
      );

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div
      className={`w-full h-fit relative overflow-y-auto  flex items-center iu  justify-center transition-colors ${
        darkMode ? " bg-black text-white" : "bg-white text-black"
      }`}
    >
      {
        darkMode ? <>
        <img className=" absolute  bottom-0 right-0 yu " src={ai} alt="" />
        <img className=" absolute scale-0 md:scale-[1]   bottom-0 left-10 yu " src={ji} alt="" />
        </>  :        <img className=" absolute  bottom-0 left-0 yu ij" src={ta} alt="" />
      }
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full z-10 max-w-4xl mx-auto px-4  md:p-9 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-4 lg:gap-8 overflow-y-auto  mt-14  ">
        {/* Contact Information */}
        <div className="flex flex-col justify-center   md:space-y-4 lg:space-y-4">
          <span className="text-xl  z-1 lg:text-5xl font-bold">Contact Us</span>
          <span className="text-lg font-normal flex-nowrap ">
            mudassarrasoolchishti@gmail.com
          </span>
          <span className="text-xl font-bold">Based In</span>
          <span className="text-lg font-normal">Pakistan / Pakpattan</span>
          <div className="flex space-x-4 text-2xl mt-4">
            <FaFacebook className="hover:text-blue-600 transition-colors" />
            <FaInstagram className="hover:text-pink-500 transition-colors" />
            <FaGithub className="hover:text-gray-700 transition-colors" />
          </div>
        </div>

        {/* Form */}
        <div className="  mt-4  md:mb-0 lg:mb-0 ">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`py-3 text-xl border-b-2 outline-none transition-colors ${
                darkMode
                  ? "bg-gray-800 bg-transparent border-white placeholder:text-gray-400"
                  : "border-black bg-transparent "
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              required
              onChange={handleChange}
              className={`py-3 text-xl border-b-2 outline-none transition-colors bg-transparent p-2 ${
                darkMode
                  ? "bg-gray-800 border-white placeholder:text-gray-400 bg-transparent  "
                  : "border-black bg-transparent "
              }`}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={` bg-transparent py-3 text-xl border-b-2 outline-none transition-colors ${
                darkMode
                  ? "bg-gray-800 border-white bg-transparent placeholder:text-gray-400"
                  : "border-black"
              }`}
            />
            <textarea
              name="message"
              placeholder="Some Details"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className={ ` bg-transparent py-3 text-xl border-b-2 outline-none transition-colors ${
                darkMode
                  ? "bg-gray-800 border-white placeholder:text-gray-400 bg-transparent "
                  : "border-black"
              }`}
            />
            <button
              type="submit"
              className={`w-full py-4 rounded-xl text-xl mb-8 transition-colors ${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
