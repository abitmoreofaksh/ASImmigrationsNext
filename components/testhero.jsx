import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe,
  Plane,
  GraduationCap,
  Users,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Clock,
  Shield,
  ArrowRight,
  Star,
  MessageCircle,
} from "lucide-react";

const ModernImmigrationWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.2]);
  const y = useTransform(scrollY, [0, 100], [0, -50]);

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

  const testimonials = [
    {
      name: "Sarah Chen",
      country: "China",
      text: "Successful admission to Stanford University",
      rating: 5,
    },
    {
      name: "Raj Patel",
      country: "India",
      text: "Seamless visa process for Canada",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      country: "Mexico",
      text: "Got into Harvard Business School",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Ultra Modern Navbar */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isMenuOpen
            ? "rgba(255,255,255,0.9)"
            : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
        }}
        className="fixed w-full z-50 border-b border-slate-200/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="text-2xl font-black"
              animate={{
                color: ["#3b82f6", "#8b5cf6", "#3b82f6"],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                },
              }}
            >
              AS Immigration
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "Home",
                "Services",
                "Universities",
                "Success Stories",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm font-medium ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-blue-600/20"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative pt-20 overflow-hidden">
        <motion.div
          style={{ opacity, y }}
          className="absolute top-0 right-0 w-1/2 h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 backdrop-blur-3xl rounded-l-[100px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                #1 Rated Immigration Consultancy
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-bold text-center mb-8 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                Transform
              </span>
              <br />
              Your Future
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-12"
            >
              Expert guidance for international education and immigration,
              backed by a 98% success rate and 15,000+ successful cases
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-blue-600/20 flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium text-slate-700 border border-slate-200 hover:border-blue-600/20 hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Watch Success Stories
                <MessageCircle className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { number: "15k+", label: "Happy Students", icon: Users },
              { number: "50+", label: "Destinations", icon: Globe },
              { number: "98%", label: "Success Rate", icon: GraduationCap },
              { number: "24/7", label: "Support", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 backdrop-blur-lg hover:border-blue-100 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                    {stat.number}
                  </p>
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
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

        {/* Testimonials Section */}
        <div className="bg-slate-50 py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">
                Success Stories
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                Hear from our students who achieved their dreams
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.country}
                      </p>
                    </div>
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernImmigrationWebsite;
