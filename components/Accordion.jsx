import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Globe, Users, Clock } from "lucide-react";

const AccordionItem = ({
  title,
  content,
  icon: Icon,
  isOpen,
  setOpenIndex,
  index,
}) => {
  return (
    <motion.div
      layout
      className="overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <motion.div
        className={`
          border-l-4 transition-colors duration-300 ease-out
          ${
            isOpen
              ? "border-blue-400 bg-blue-50/50"
              : "border-transparent bg-white hover:bg-gray-50"
          }
        `}
      >
        <motion.button
          onClick={() => setOpenIndex(isOpen ? -1 : index)}
          className="w-full px-6 py-4 flex items-center gap-4 text-left"
        >
          <div
            className={`
            p-2 rounded-lg transition-colors duration-300
            ${
              isOpen
                ? "bg-blue-100/80 text-blue-600"
                : "bg-gray-100 text-gray-600"
            }
          `}
          >
            <Icon className="w-5 h-5" />
          </div>

          <h3
            className={`
            flex-1 text-lg font-medium transition-colors duration-300
            ${isOpen ? "text-blue-700" : "text-gray-700"}
          `}
          >
            {title}
          </h3>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`
              w-6 h-6 flex items-center justify-center rounded-full 
              transition-colors duration-300
              ${
                isOpen
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-400"
              }
            `}
          >
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.3, ease: "easeOut" },
                  opacity: { duration: 0.2, delay: 0.1 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.3, ease: "easeIn" },
                  opacity: { duration: 0.2 },
                },
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-11"
                >
                  <div className="bg-white p-4 rounded-lg border border-blue-100 text-gray-600 leading-relaxed">
                    {content}
                  </div>

                  <motion.div
                    className="mt-3 flex gap-6 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {["Fast Processing", "24/7 Support", "Expert Team"].map(
                      (feature, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-blue-400" />
                          {feature}
                        </div>
                      )
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      icon: GraduationCap,
      title: "Educational Consulting",
      content:
        "Get personalized guidance for your educational journey. Our expert counselors help you choose the right university and program, ensuring your academic goals align with your career aspirations.",
    },
    {
      icon: Globe,
      title: "Visa Assistance",
      content:
        "Navigate the visa process with ease. Our experienced team provides comprehensive support for documentation, application submission, and interview preparation to maximize your approval chances.",
    },
    {
      icon: Users,
      title: "Immigration Services",
      content:
        "Make your immigration journey smooth and successful. We offer expert guidance on permanent residence applications, work permits, and citizenship processes with a focus on your specific needs.",
    },
    {
      icon: Clock,
      title: "Fast Track Processing",
      content:
        "Save time with our expedited processing services. Our dedicated team ensures quick turnaround times while maintaining the highest quality standards for all your applications.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3 className="text-6xl font-semibold text-center mb-2">FAQ&apos;s</h3>
      <p className="text-center mb-4">Frequently Asked Questions</p>
      <div className="space-y-3 bg-white rounded-xl shadow-sm border border-gray-100">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            {...item}
            index={index}
            isOpen={index === openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
