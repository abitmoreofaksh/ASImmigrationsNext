import React from "react";
import { motion } from "framer-motion";
import { Globe2, Users, Award, Clock } from "lucide-react";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stats = [
    { icon: Users, value: "15k+", label: "Happy Students", delay: 0.2 },
    { icon: Globe2, value: "50+", label: "Destinations", delay: 0.4 },
    { icon: Award, value: "98%", label: "Success Rate", delay: 0.6 },
    { icon: Clock, value: "24/7", label: "Support", delay: 0.8 },
  ];

  return (
    <div className="relative min-h-screen z-50 pointer-events-none">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('/images/world.svg')] bg-no-repeat bg-center bg-cover" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-8">
        {/* Top Badge */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            #1 Rated Immigration Consultancy
          </span>
        </motion.div>

        {/* Hero Text */}
        <div className="text-center mt-16 mb-12">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            <span className="text-gray-900">Your Future</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            Expert guidance for international education and immigration, backed
            by a 98% success rate and 15,000+ successful cases
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Journey →
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg font-medium border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            Watch Success Stories
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              <stat.icon className="w-6 h-6 text-blue-600 mb-2" />
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
