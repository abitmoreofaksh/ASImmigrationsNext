import { IconChevronRight } from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Shield } from "lucide-react";
const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const service = [
    {
      imgsrc: "/images/spokenenglish.jpg",
      title: "Spoken English",
      description:
        "Our Learn Speaking English course is designed meticulously to assist students in speaking fluent English.",
    },
    {
      imgsrc: "/images/ielts.jpg",
      title: "IELTS",
      description:
        "The International English Language Testing System (IELTS) is the most coveted English language test that helps you make your dream of studying abroad come true.",
    },
    {
      imgsrc: "/images/pte.jpg",
      title: "PTE",
      description:
        "PTE is a computer-based academic English language test for non-native English speakers who wish to study abroad.",
    },
  ];
  return (
    <>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        id="our-services"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">
            Our Services
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Comprehensive support at every step of your journey
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Visa Processing",
              description:
                "End-to-end visa application support with expert guidance",
              icon: Shield,
              features: [
                "Document Preparation",
                "Application Filing",
                "Interview Coaching",
              ],
            },
            {
              title: "University Admissions",
              description:
                "Strategic university selection and application assistance",
              icon: GraduationCap,
              features: [
                "University Selection",
                "SOP Writing",
                "Application Management",
              ],
            },
            {
              title: "Settlement Services",
              description: "Comprehensive support for your transition abroad",
              icon: MapPin,
              features: ["Accommodation", "Banking Setup", "Local Guidance"],
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-blue-100 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-violet-600/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              <service.icon className="w-8 h-8 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="relative">
        {" "}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('/images/world.svg')] bg-no-repeat bg-center bg-cover" />
        </div>
        <section class="py-8 ">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-2">
              <div class="relative w-full text-center">
                <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem]">
                  Learn English
                </h2>
              </div>
              <div class="relative w-full text-center">
                <p class="text-lg font-normal text-gray-500 mb-5">
                  The exchange of ideas and information is an excellent catalyst
                  for the development of brighter minds. From preparation to
                  examination, avail of a plethora of services by the best
                  career consultant for those who wish to get admission to top
                  foreign universities.
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              {service.map((item, index) => (
                <div class="bg-white rounded-lg max-w-sm mb-5" key={index}>
                  <img class="rounded-lg" src={item.imgsrc} alt="" />

                  <div class="p-5">
                    <a href="#">
                      <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                        {item.title}
                      </h5>
                    </a>
                    <p class="font-normal text-gray-700 mb-3">
                      {item.description}
                    </p>
                    <a class="text-blue-600 flex items-center gap-2" href="#">
                      Learn More <IconChevronRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
