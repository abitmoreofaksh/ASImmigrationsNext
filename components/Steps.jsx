import React from "react";
import { motion } from "framer-motion";
import { IconFile, IconClipboard, IconCreditCard } from "@tabler/icons-react";
const steps = [
  {
    icon: (
      <IconFile className="w-6 h-6 text-blue-400 transition-all duration-300 group-hover:text-white" />
    ),
    title: "Complete Online Registration",
    description:
      "Begin your visa application process by filling out our comprehensive online form.",
    details: [
      "Provide personal information",
      "Specify travel dates and purpose",
      "Upload a digital passport photo",
      "Review and confirm all entered data",
    ],
  },
  {
    icon: (
      <IconClipboard className="w-6 h-6 text-blue-400 transition-all duration-300 group-hover:text-white" />
    ),
    title: "Submit Documents and Payment",
    description:
      "Gather and submit required documents, then complete the application fee payment.",
    details: [
      "Upload passport scan and supporting documents",
      "Schedule a biometrics appointment if required",
      "Pay the non-refundable application fee",
      "Receive confirmation of submission and payment",
    ],
  },
  {
    icon: (
      <IconCreditCard className="w-6 h-6 text-blue-400 transition-all duration-300 group-hover:text-white" />
    ),
    title: "Receive Your Visa",
    description:
      "Track your application status and receive your visa upon approval.",
    details: [
      "Check application status online",
      "Respond to any additional information requests",
      "Receive decision notification via email",
      "Collect or receive your visa by mail",
    ],
  },
];

const VisaApplicationSteps = () => {
  return (
    <section class="py-24 relative">
      <div class="absolute h-[36.5rem] w-full top-0 bg-gradient-to-b from-blue-400 to-white -z-10"></div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="font-manrope text-5xl text-center font-bold text-white mb-4">
            Get your visa approved in 3 easy simple steps
          </h2>
        </div>

        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          {steps.map((item, index) => (
            <div class="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  ">
              <div class="border-b border-solid border-gray-200 pb-9 mb-9">
                <div class="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-blue-600">
                  {item.icon}
                </div>
                <div className="flex justify-center">
                  <span class="font-manrope text-4xl font-medium text-gray-900">
                    Step&nbsp;{index + 1}
                  </span>
                </div>
              </div>

              <ul class="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                <li class="flex items-center space-x-3.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>AI advisor for a day</span>
                </li>
                <li class="flex items-center space-x-3.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>2 auto tracking</span>
                </li>
                <li class="flex items-center space-x-3.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>7 Day transaction clearing </span>
                </li>
                <li class="flex items-center space-x-3.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>24/7 Customer support</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaApplicationSteps;
