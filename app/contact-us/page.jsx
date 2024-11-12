"use client";
import ContactForm from "@/components/contact-us/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 opacity-10 -z-10">
          <div className="w-full h-full bg-[url('/images/world.svg')] bg-no-repeat bg-center bg-cover " />
        </div>
        <div className="max-w-7xl mx-auto px-4 my-8 py-8 grid md:grid-cols-2 gap-8 rounded shadow bg-white/60">
          {/* Left Section - Form */}
          <div className=" p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              We are deeply committed to delivering unparalleled service and
              unwavering support to ensure your experience exceeds expectations.
            </p>
            <ContactForm />
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-indigo-600 text-white p-6 rounded-lg"
            >
              <h3 className="font-medium mb-2">Address</h3>
              <p>
                SCO 65, First Floor of, Surindra & Co. Property Advisor, Pipli
                Rd, opposite Tejas Diagnostic, Mohan Nagar, Kurukshetra, Haryana
                136118
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-2">Contact</h3>
              <p>Talk to us and see how we can work</p>
              <p className="text-indigo-600">94166-54780</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-2">Email</h3>
              <p>We&apos;re usually replaying within 24 hours</p>
              <p className="text-indigo-600">info@asimmigrations.com</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="font-medium mb-2">Working Hours</h3>
              <p>Mon To Sat - 9 am To 6 pm</p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
