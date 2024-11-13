"use client";
import { motion } from "framer-motion";

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  return (
    <div className="relative">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('/images/world.svg')] bg-no-repeat bg-center bg-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Us</h1>
          <p className="text-lg text-gray-600">
            Your Trusted Partner in Immigration Services - Building Bridges to
            New Opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            {...fadeInUp}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/about1.jpg"
              alt="Team working on laptop"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">OUR MISSION</h2>
              <p className="text-gray-600 leading-relaxed">
                At AS Immigration, we are dedicated to transforming lives
                through expert immigration guidance. Our mission is to simplify
                the complex immigration process for individuals, families, and
                businesses seeking to build their future in a new country. With
                decades of combined experience, we provide personalized
                solutions and unwavering support to ensure your immigration
                journey is smooth and successful.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                READ MORE →
              </motion.button>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-4 mt-12">
            <h2 className="text-2xl font-bold text-gray-900">OUR VALUES</h2>
            <h3 className="text-xl font-semibold text-gray-800">
              Guiding Principles
            </h3>
            <ul className="space-y-3">
              <motion.li {...fadeInUp} className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-600" />
                <p className="text-gray-600">
                  <span className="font-semibold">
                    Professional Excellence:
                  </span>{" "}
                  We maintain the highest standards of expertise in immigration
                  law and policy, ensuring our clients receive accurate,
                  up-to-date guidance throughout their journey.
                </p>
              </motion.li>
              <motion.li {...fadeInUp} className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-600" />
                <p className="text-gray-600">
                  <span className="font-semibold">Client-First Approach:</span>{" "}
                  Your success is our priority. We provide personalized
                  attention and tailored solutions to meet your unique
                  immigration needs and goals.
                </p>
              </motion.li>
              <motion.li {...fadeInUp} className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-600" />
                <p className="text-gray-600">
                  <span className="font-semibold">Transparency:</span> We
                  believe in clear communication and maintaining complete
                  transparency about processes, timelines, and requirements.
                </p>
              </motion.li>
              <motion.li {...fadeInUp} className="flex items-start space-x-2">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-600" />
                <p className="text-gray-600">
                  <span className="font-semibold">Global Perspective:</span>{" "}
                  With experience in multiple immigration systems, we bring a
                  comprehensive understanding of international mobility
                  solutions.
                </p>
              </motion.li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              READ MORE →
            </motion.button>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl md:col-start-2"
          >
            <img
              src="/images/about2.avif"
              alt="Team collaboration"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
