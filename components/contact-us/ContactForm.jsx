"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { SpringModal } from "./SpringModel";
import { IconLoader } from "@tabler/icons-react";
const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${process.env.webURL}/api/contact`, data);
      setData({ ...data, name: "", email: "", course: "", number: "" });
      setLoading(false);
      setIsOpen(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="First Name"
              required
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Email"
            required
            onChange={handleChange}
            name="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent h-32"
            placeholder="Message"
            required
            onChange={handleChange}
            name="message"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex justify-center items-center"
        >
          {loading ? (
            <IconLoader stroke={2} className="animate-spin" />
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
