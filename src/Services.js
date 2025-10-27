   import React from "react";
import { motion } from "framer-motion";
import logo from './logo.png';
import { 
  faPalette, 
  faCode, 
  faGlobe, 
  faMobileAlt, 
  faServer, 
  faLightbulb, 
  faBriefcase, 
  faCloud, 
  faLock 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Services() {
const services = [
  {
    title: "Android App Development",
    desc: "Custom Android applications built with the latest technologies to bring your ideas to life.",
    features: ["Native & Hybrid Apps", "Play Store Deployment", "Maintenance & Support"],
    icon: faMobileAlt,
    color: "bg-purple-500/20 text-purple-600",
  },
  {
    title: "Web Development",
    desc: "Responsive and scalable web applications tailored to your business needs.",
    features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
    icon: faGlobe,
    color: "bg-blue-500/20 text-blue-600",
  },
  {
    title: "UI/UX Development",
    desc: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
    features: ["User Research", "Wireframing", "Brand Identity"],
    icon: faPalette,
    color: "bg-pink-500/20 text-pink-600",
  },
  {
    title: "CRM Software",
    desc: "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
    features: ["Custom Development", "Integration Services", "Training & Support"],
    icon: faBriefcase,
    color: "bg-yellow-500/20 text-yellow-600",
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and migration services for modern businesses.",
    features: ["AWS, Azure, GCP", "Migration Services", "Performance Tuning"],
    icon: faCloud,
    color: "bg-indigo-500/20 text-indigo-600",
  },
  {
    title: "Cybersecurity",
    desc: "Protect your business with robust security solutions and best practices.",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
    icon: faLock,
    color: "bg-red-500/20 text-red-600",
  },
];
return (
  
     <div>

 <section className="text-center py-20 bg-[#448072] text-white rounded-b-[40px] shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-3"
        >Services We Offer
         
        </motion.h1>
        
      </section>

       <section id="services" className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto m-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${service.color}`}>
                <FontAwesomeIcon icon={service.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.desc}</p>
              <ul className="space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm">
                    <span className="w-4 h-4 bg-[#448072] rounded-full mr-2 animate-pulse"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

          <section className="bg-[#448072] text-white py-14 sm:py-20 px-3 sm:px-6 lg:px-10 text-center flex flex-col items-center justify-center">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Ready to Start Your Project?
                </motion.h2>
        
                <motion.p
                  className="max-w-2xl text-blue-100 mb-8 sm:mb-10 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Let's discuss how we can help transform your ideas into reality with
                  cutting-edge technology and expert development.
                </motion.p>
        
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-wrap justify-center gap-4 py-6"
                >
                  <button className="bg-white text-[#448072] font-semibold px-6 py-3 rounded-xl shadow hover:shadow-md transition">
                    Get Free Consultation →
                  </button>
                 
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  
                  <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
                    View Our Services
                  </button>
                </motion.div>
              </section>
              
</div> 
);
};
export default Services;
