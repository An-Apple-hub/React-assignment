import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Teams from "./Teams";
import Contact from "./Contact";
import logo from './logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    
   <>
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-6 bg-white/20 backdrop-blur-md shadow-md">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="AppDost" className="w-30 h-12 border-2 border-[#7A441B]" />
            <h1 className="text-2xl font-bold text-[#3F2C1D]">AppDost</h1>
          </div>

          <nav className="space-x-8 hidden md:flex text-[#3F2C1D] font-medium">
            <Link to="/" className="hover:text-[#FCB57E] transition">Home</Link>
            <Link to="/about" className="hover:text-[#FCB57E] transition">About</Link>
            <Link to="/services" className="hover:text-[#FCB57E] transition">Services</Link>
            <Link to="/portfolio" className="hover:text-[#FCB57E] transition">Portfolio</Link>
             <Link to="/teams" className="hover:text-[#FCB57E] transition">Teams</Link>

            <Link to="/contact" className="hover:text-[#FCB57E] transition">Contact</Link>
          </nav>

          <div className="md:hidden text-[#3F2C1D] font-semibold">☰</div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

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
      </>
   
  );
}

export default App;
