
         import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAsia, FaGraduationCap, FaRocket, FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-center py-24 bg-gradient-to-r from-[#3F2C1D] via-[#448072] to-[#FCB57E] text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Empowering Rural India with Technology
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl opacity-90"
        >
          Making professional IT solutions affordable and accessible for rural businesses, educational institutions, and startups across India.
        </motion.p>
      </section>

    
      <section className="py-16 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#3F2C1D]"
        >
          Our Mission: Digital Inclusion for All
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaGlobeAsia className="text-4xl mb-4 text-[#3F2C1D]" />,
              title: "Rural Businesses",
              desc: "Helping local businesses transform digitally with affordable websites, mobile apps, and e-commerce solutions.",
            },
            {
              icon: <FaGraduationCap className="text-4xl mb-4 text-[#448072]" />,
              title: "Education",
              desc: "Empowering schools, colleges, and coaching centers with digital tools, management systems, and special discounts.",
            },
            {
              icon: <FaRocket className="text-4xl mb-4 text-[#FCB57E]" />,
              title: "Startups",
              desc: "Supporting new entrepreneurs with affordable MVPs, technical mentorship, and scalable architecture.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white shadow-lg rounded-2xl transition-all duration-300 hover:shadow-2xl"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section className="py-16 px-6 md:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#322318]"
          >
            Our Story
          </motion.h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Founded in 2025, AppDost was born from a simple yet powerful vision: to bridge the digital divide in rural India. 
            We noticed that quality IT services were often too expensive or inaccessible for small businesses, schools, and startups in rural areas. 
            <br /><br />
            Our mission is to empower these communities with world-class technology at fair prices, ensuring equal access to digital tools and opportunities. 
            Today, we’re proud to serve clients across India, providing scalable, reliable, and affordable solutions that truly make a difference.
          </p>
        </div>
      </section>

  
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-indigo-100 via-[#448072] to-white-500 text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: "50+", label: "Rural Businesses Served" },
            { stat: "15+", label: "Projects Completed" },
            { stat: "10+", label: "Educational Institutions" },
            { stat: "40%", label: "Lower Than Market Rates" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-[#448072]">{item.stat}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default About;
