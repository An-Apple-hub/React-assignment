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
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-2 animate-pulse"></span>
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
                  className="flex flex-wrap justify-center gap-4"
                >
                  <button className="bg-white text-[#448072] font-semibold px-6 py-3 rounded-xl shadow hover:shadow-md transition">
                    Get Free Consultation →
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
                    View Our Services
                  </button>
                </motion.div>
              </section>

                 {/* Footer */}
                   <footer className="bg-[#3F2C1D] text-white px-8 md:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#7A441B]/40 pb-12">
              
                  {/* Brand Info */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={logo}
                        alt="AppDost"
                        className="w-30 h-12  border-2 border-[#FCB57E]"
                      />
                      <h2 className="text-2xl font-bold text-[#FCB57E]">AppDost</h2>
                    </div>
                    <p className="text-[#FCB57E]/80 leading-relaxed mb-6">
                      Delivering innovative IT solutions since 2025. We transform ideas into
                      powerful digital experiences with cutting-edge technology and expert craftsmanship.
                    </p>
              
                    {/* Stats */}
                    <div className="flex space-x-8 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#FCB57E]">10+</h3>
                        <p className="text-sm text-[#FCB57E]/70">Web Projects</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#FCB57E]">4+</h3>
                        <p className="text-sm text-[#FCB57E]/70">Android Apps</p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#FCB57E]">1</h3>
                        <p className="text-sm text-[#FCB57E]/70">CRM System</p>
                      </div>
                    </div>
              
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a href="https://linkedin.com/company/appdost" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-[#7A441B]/40 rounded-full hover:bg-[#FCB57E]/30 transition">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-[#FCB57E] w-5 h-5" />
              </a>
                    <a
                    href="https://instagram.com/appdost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#7A441B]/40 rounded-full hover:bg-[#FCB57E]/30 transition" >
                    <FontAwesomeIcon icon={faInstagram} className="text-[#FCB57E] w-4 h-4" />
                  </a>
              
                  <a
                    href="https://facebook.com/appdost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#7A441B]/40 rounded-full hover:bg-[#FCB57E]/30 transition"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="text-[#FCB57E] w-4 h-4" />
                  </a>
                    </div>
                  </div>
              
                  {/* Quick Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#FCB57E] border-b border-[#FCB57E]/30 pb-2">
                      Quick Links
                    </h3>
                    <ul className="space-y-3 text-[#FCB57E]/80">
                      {["Home", "Services", "Careers", "Blog", "Contact"].map((link) => (
                        <li key={link}>
                          <a href="#" className="hover:text-[#FCB57E] transition">
                            → {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
              
                  {/* Our Services */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#FCB57E] border-b border-[#FCB57E]/30 pb-2">
                      Our Services
                    </h3>
                    <ul className="space-y-3 text-[#FCB57E]/80">
                      {[
                        "Android App Development",
                        "Web Development",
                        "UI/UX Design",
                        "CRM Software",
                        "Cloud Solutions",
                        "Cybersecurity",
                      ].map((service) => (
                        <li key={service}>
                          <a href="#" className="hover:text-[#FCB57E] transition">
                            → {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
              
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#FCB57E] border-b border-[#FCB57E]/30 pb-2">
                      Contact Info
                    </h3>
                    <ul className="space-y-4 text-[#FCB57E]/80 text-sm">
                      <li>
                        📧 contact@appdost.in
                      </li>
                      <li>
                        ☎️ +91 76350 75422 / +91 11 6929 0750
                      </li>
                      <li>
                        🕒 Mon – Sat: 9:00 AM – 6:00 PM IST
                      </li>
                      <li>
                        📍 <span className="font-semibold">3 Offices:</span> Banka (HQ), Motihari, Patna
                      </li>
                    </ul>
                  </div>
                </div>
              
                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-[#FCB57E]/70 mt-8 text-sm border-t border-[#7A441B]/70 pt-6">
                  <p>© 2025 AppDost – Complete IT Solution. All rights reserved.</p>
                  <div className="flex flex-wrap items-center space-x-4 mt-3 md:mt-0">
                    <a href="#" className="hover:text-[#FCB57E]">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-[#FCB57E]">Terms of Service</a>
                    <span>•</span>
                    <a href="#" className="hover:text-[#FCB57E]">Sitemap</a>
                    <span>•</span>
                    <span>Built with ❤️ in India</span>
                  </div>
                </div>
              </footer>
              
              
</div> 
);
};
export default Services;
