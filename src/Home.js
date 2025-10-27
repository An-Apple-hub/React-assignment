import React from "react";

import { motion } from "framer-motion";
import { Laptop, Rocket, Smartphone, Target  } from "lucide-react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPalette, faCode, faGlobe, faMobileAlt, faServer, faLightbulb, faBriefcase, faCloud, faLock 
} from "@fortawesome/free-solid-svg-icons";




function Home() {
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
const values = [
    { emoji: "🎯", title: "Innovation First", description: "Encouraging creative problem-solving" },
    { emoji: "🤝", title: "Collaborative Environment", description: "Cross-functional teamwork" },
    { emoji: "📚", title: "Continuous Learning", description: "Regular training & workshops" },
    { emoji: "🌱", title: "Growth Mindset", description: "Diverse projects & new technologies" },
    { emoji: "⚖️", title: "Work-Life Balance", description: "Flexible arrangements" },
    { emoji: "🏆", title: "Recognition & Rewards", description: "Celebrating achievements" },
  ];

  const contact = {
    website: "www.appdost.in",
    emails: ["contact@appdost.in", "hr@appdost.in"],
    locations: "HQ-Patna, Motihari, Banka",
    phones: ["+91 76350 75422", "+91 11 6929 0750"]
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-[#FCB57E] via-[#448072] to-[#3F2C1D] text-[#3F2C1D]">
    
   
   {   /* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/30 px-6 py-3 rounded-full shadow-lg mb-8 flex items-center space-x-3"
        >
          <Rocket className="text-[#7A441B]" />
          <span className="font-semibold text-[#3F2C1D]">
            Complete IT Solution Provider Since 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-[#3F2C1D] mb-6 leading-tight"
        >
          Transform Your <span className="text-[#FCB57E]">Ideas</span> Into{" "}
          <span className="text-[#876042]">Digital Reality</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-2xl text-[#3F2C1D]/80 text-lg leading-relaxed"
        >
          Your trusted partner for comprehensive IT solutions. From mobile apps
          to enterprise software, we bring innovation and excellence to every
          project with our expert team of developers.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.25 }}
          className="mt-8 px-8 py-3 mb-10 rounded-full bg-[#7A441B] text-white font-semibold shadow-lg hover:bg-[#FCB57E] transition"
        >
          Get Started
        </motion.button>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-2xl text-[#3F2C1D]/80 text-lg leading-relaxed flex justify-center gap-8 px-4 py-2"
        >
<span>100% Client Satisfaction.</span>
  <span>Secure & Scalable</span>
  <span>24/7 Support</span>
        </motion.p>
      </section>


<section className="flex flex-wrap justify-center gap-8 px-6 pb-20">
  {[
    {
      icon: <Laptop className="w-20 h-20 text-[#448072]" />,
      title: "Web Development",
      count: "+10 Projects",
    },
    {
      icon: <Smartphone className="w-20 h-20 text-[#7A441B]" />,
      title: "Mobile Apps",
      count: "+4 Apps",
    },
    {
      icon: <Rocket className="w-20 h-20 text-[#c48c61]" />,
      title: "Fast Delivery",
      count: "On-Time Always",
    },
  ].map((card, i) => (
    <motion.div
      key={i}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 10, delay: i * 0.1 }}
      whileHover={{
        scale: 1.1,
        rotate: 2, 
        y: -5,
        boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
        backgroundColor: "rgba(255,255,255,0.9)",
        transition: { type: "spring", stiffness: 300, damping: 12 }
      }}
      className="w-64 bg-white/70 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center space-y-3 cursor-pointer"
    >
      {card.icon}
      <h3 className="font-semibold text-lg text-[#3F2C1D]">{card.title}</h3>
      <p className="text-[#7A441B] font-bold">{card.count}</p>
    </motion.div>
  ))}
  </section>

<section className="px-6 py-20 bg-gradient-to-b from-[#fdfaf6] to-[#fff8f2]">

  <div className="flex flex-wrap justify-center gap-8 mb-16">
    {[ 
      { icon: <Laptop className="w-20 h-20 text-[#448072]" />, label: "Web Projects", value: "10+" },
      { icon: <Smartphone className="w-20 h-20 text-[#7A441B]" />, label: "Mobile Apps", value: "4+" },
      { icon: <Target className="w-20 h-20 text-[#c48c61]" />, label: "CRM Projects", value: "1" }
    ].map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 10 }}
        whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" }}
        className="flex flex-col items-center justify-center bg-white/60 backdrop-blur-md rounded-xl p-6 w-44 cursor-pointer transition-all"
      >
        {stat.icon}
        <h3 className="mt-2 text-xl font-semibold text-[#3F2C1D]">{stat.value}</h3>
        <p className="text-[#7A441B] text-sm mt-1">{stat.label}</p>
      </motion.div>
    ))}
  </div>
  </section>

 

<section className="px-6 py-20 bg-gradient-to-b from-[#fdfaf6] to-[#fff8f2]">


  {/* About Section  it is*/}
  <div className="max-w-4xl mx-auto text-center mb-16">
   
    
    <h2 className="text-3xl font-bold text-[#3F2C1D] mb-4">
      Empowering Your Business with <span className="text-[#448072]">AppDost</span>
    </h2>
               <p className="text-[#7A441B] text-lg">
          Your Trusted Partner for Complete Digital Transformation
AppDost is your trusted partner for complete digital transformation. We are a dynamic, innovation-driven IT solutions provider specializing in turning visionary ideas into powerful, 
market-ready products. Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences, and create lasting digital impact.
  </p>
       
  </div>

<div className="max-w-4xl mx-auto text-center mb-16">
   
    
    <h2 className="text-3xl font-bold text-[#3F2C1D] mb-4">
     <span className="text-[#448072]">What We Do</span>
    </h2>
               <p className="text-[#7A441B] text-lg">
                Our Core Expertise
           </p>
       
  </div>

{/* Services Gri */}
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
  {[
    { title: "UI/UX Design", desc: "Creating intuitive and modern interfaces that delight users.", icon: faPalette },
    { title: "Custom Software", desc: "Tailored enterprise solutions that scale with your business.", icon: faCode },
    { title: "Web Development", desc: "High-performance, responsive websites using modern frameworks.", icon: faGlobe },
    { title: "Mobile Apps", desc: "Cross-platform apps for Android & iOS that engage users.", icon: faMobileAlt },
    { title: "Full-Stack Solutions", desc: "End-to-end development covering front-end, backend & cloud.", icon: faServer },
    { title: "Digital Strategy", desc: "Consulting to transform your business digitally and efficiently.", icon: faLightbulb }
  ].map((service, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="bg-white/70 backdrop-blur-md rounded-2xl p-6 flex flex-col items-start space-y-3 cursor-pointer"
    >
      <div className="bg-white/30 p-3 rounded-full">
        <FontAwesomeIcon icon={service.icon} className="text-[#448072] w-6 h-6" />
      </div>
      <h3 className="font-semibold text-lg text-[#3F2C1D]">{service.title}</h3>
      <p className="text-[#7A441B] text-sm">{service.desc}</p>
    </motion.div>
  ))}
</div>

  
  <div className="max-w-4xl mx-auto text-center mb-6">
    <h2 className="text-3xl font-bold text-[#3F2C1D] mb-4">
<span className="text-[#000000]">Our Services</span>
    </h2>
    <p className="text-[#7A441B] ">We deliver end-to-end IT solutions that drive business growth and digital transformation.</p>
</div>
    

  {/* Services Sectionn */}
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

<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
  <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 sm:p-10">
    <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center flex items-center justify-center gap-2">
      🌟 Why Choose <span className="text-[#5a3e29]">AppDost?</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          title: "Complete Lifecycle Expertise",
          desc: "From ideation to deployment and beyond.",
        },
        {
          title: "Cutting-Edge Technology Stack",
          desc: "We work with the latest tools and frameworks.",
        },
        {
          title: "Agile Development Process",
          desc: "Fast iterations, continuous feedback, rapid delivery.",
        },
        {
          title: "Quality-First Approach",
          desc: "Rigorous testing and code reviews ensure excellence.",
        },
        {
          title: "Scalable Solutions",
          desc: "Built to grow with your business.",
        },
        {
          title: "Client-Centric Focus",
          desc: "Your success is our success.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition border border-gray-200"
        >
          <div className="flex items-start gap-3">
            <span className="text-green-600 text-2xl">✅</span>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



 
    <section className="bg-gradient-to-br from-[#FCB57E] via-[#448072] to-[#3F2C1D] text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
        <p className="text-teal-100 mb-12">
          A proven methodology that ensures quality, efficiency, and client satisfaction
        </p>

        <div className="space-y-10">
     
          <div className="relative bg-white text-gray-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto hover:shadow-2xl transition-shadow">
            <div className="absolute -left-6 top-8 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
            <p className="text-gray-600 leading-relaxed">
              We deep dive into your requirements, understand your business goals,
              analyze competitors, and create a comprehensive project roadmap with
              clear milestones.
            </p>
          </div>

       
          <div className="relative bg-white text-gray-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto hover:shadow-2xl transition-shadow">
            <div className="absolute -left-6 top-8 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Design & Prototype</h3>
            <p className="text-gray-600 leading-relaxed">
              Our design team creates intuitive wireframes, stunning UI mockups, and
              interactive prototypes that bring your vision to life before
              development begins.
            </p>
          </div>

          <div className="relative bg-white text-gray-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto hover:shadow-2xl transition-shadow">
            <div className="absolute -left-6 top-8 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Development & Testing</h3>
            <p className="text-gray-600 leading-relaxed">
              Expert developers write clean, scalable code while our QA team performs
              rigorous testing to ensure flawless functionality across all devices and
              platforms.
            </p>
          </div>

          <div className="relative bg-white text-gray-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto hover:shadow-2xl transition-shadow">
            <div className="absolute -left-6 top-8 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">
              4
            </div>
            <h3 className="text-xl font-semibold mb-3">Deployment & Support</h3>
            <p className="text-gray-600 leading-relaxed">
              We handle the complete deployment process and provide ongoing
              maintenance, updates, and 24/7 technical support to keep your solution
              running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>

  <section className="bg-[#ffffff] py-20 flex justify-center items-center">
 
  <div className="relative w-[92%] md:w-[85%] lg:w-[75%] bg-[#ffffff] rounded-[3rem] shadow-2xl overflow-hidden border border-[#2d2721]">
    <div
      className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] bg-center bg-cover opacity-10"
      aria-hidden="true"
    ></div>

 
    <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 text-center">
  
      <div className="mb-14">
        <h2 className="text-4xl font-bold mb-3 text-[#FCB57E]">Our Featured Projects</h2>
        <p className="text-gray-300 text-lg mb-12">
          Real solutions for real businesses — explore our successful projects
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
      
        <div className="bg-[#2a2520] border-t-4 border-[#FCB57E] rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-1 text-[#FCB57E]">
            AI-Powered Educational Platform
          </h3>
          <p className="text-sm text-gray-400 mb-2">BEU Mate - Bihar Engineering</p>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            An AI-powered study companion for B.Tech students offering personalized
            learning, career guidance, and placement preparation.
          </p>
          <div className="flex flex-wrap gap-2 text-[#FCB57E] text-sm mb-3 justify-center">
            <span>React Native</span>•<span>Node.js</span>•<span>AI/ML</span>
          </div>
          <div className="flex gap-4 text-sm justify-center font-medium">
            <a href="#" className="  text-[#FCB57E]  hover:text-[#FCB57E] transition">📱 Play Store</a>
            <a href="#" className=" text-[#FCB57E] hover:text-[#FCB57E] transition">🌐 Website</a>
          </div>
        </div>

        <div className="bg-[#2a2520] border-t-4 border-[#448072] rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-1 text-[#448072]">
            Educational Platform
          </h3>
          <p className="text-sm text-gray-400 mb-2">Devskillquest</p>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            An interactive learning platform designed for aspiring developers to master
            coding skills through hands-on projects and challenges.
          </p>
          <div className="flex flex-wrap gap-2 text-[#448072] text-sm mb-3 justify-center">
            <span>Next.js</span>•<span>TypeScript</span>•<span>PostgreSQL</span>
          </div>
          <a href="#" className=" text-[#448072] hover:text-[#448072] transition text-sm font-medium">
            🌐 Website
          </a>
        </div>

        
        <div className="bg-[#2a2520] border-t-4 border-[#3F2C1D] rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-1 text-[#8f745f]">
            Wedding Planning Portal
          </h3>
          <p className="text-sm text-gray-400 mb-2">The Weddings Chapter</p>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            A premium wedding planning platform connecting couples with top vendors,
            venues, and services. Features vendor portfolios, pricing, and reviews.
          </p>
          <div className="flex flex-wrap gap-2 text-[#8f745f] text-sm mb-3 justify-center">
            <span>PHP</span>•<span>Laravel</span>•<span>MySQL</span>
          </div>
          <a href="#" className=" text-[#8f745f] hover:text-[#8f745f] transition text-sm font-medium">
            🌐 Website
          </a>
        </div>
      </div>

     
      <div className="text-center mb-20">
        <a
          href="./portfolio"
          className="inline-block bg-[#FCB57E] text-[#1f1b16] font-semibold px-6 py-3 rounded-full hover:bg-[#ffd1a6] transition"
        >
          View All Projects →
        </a>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2 text-[#FCB57E]">
          Open Source & Innovation Projects
        </h3>
        <p className="text-gray-300 text-lg">
          Explore our contributions to AI, automation, and educational technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      
        <div className="bg-[#2b2927] border-l-4 border-[#FCB57E] p-6 rounded-xl shadow-md hover:bg-[#2f2b27] transition">
          <div className="text-4xl mb-3">🤖</div>
          <h4 className="text-xl font-semibold mb-1 text-[#FCB57E]">DeepFake Detection</h4>
          <p className="text-[#FCB57E] text-sm mb-3">AI/ML Summer Internship Project</p>
          <p className="text-gray-300 text-sm mb-4">
            Advanced deep learning model for detecting manipulated media using computer
            vision and neural networks.
          </p>
          <a href="https://github.com" className="text-[#fddfbd] hover:underline font-medium">
            View on GitHub →
          </a>
        </div>

       
        <div className="bg-[#2b2927] border-l-4 border-[#448072] p-6 rounded-xl shadow-md hover:bg-[#2f2b27] transition">
          <div className="text-4xl mb-3">🐍</div>
          <h4 className="text-xl font-semibold mb-1 text-[#448072]">NooBot</h4>
          <p className="text-[#448072] text-sm mb-3">Intelligent Python Automation Bot</p>
          <p className="text-gray-300 text-sm mb-4">
            Smart automation bot built with Python for task scheduling, data processing,
            and intelligent workflow automation.
          </p>
          <a href="https://github.com" className="text-[#fddfbd] hover:underline font-medium">
            View on GitHub →
          </a>
        </div>

     
        <div className="bg-[#2b2927] border-l-4 border-[#3F2C1D] p-6 rounded-xl shadow-md hover:bg-[#2f2b27] transition">
          <div className="text-4xl mb-3">📚</div>
          <h4 className="text-xl font-semibold mb-1 text-[#8f745f]">EduTools</h4>
          <p className="text-[#8f745f] text-sm mb-3">Educational Web Platform</p>
          <p className="text-gray-300 text-sm mb-4">
            Collection of educational tools and utilities for students and teachers.
            Interactive learning resources and study aids.
          </p>
          <a href="https://github.com" className="text-[#fddfbd] hover:underline font-medium">
            View on GitHub →
          </a>
        </div>

        <div className="bg-[#2b2927] border-l-4 border-[#FCB57E] p-6 rounded-xl shadow-md hover:bg-[#2f2b27] transition">
          <div className="text-4xl mb-3">💬</div>
          <h4 className="text-xl font-semibold mb-1 text-[#FCB57E]">DialogFlow Chatbot</h4>
          <p className="text-[#FCB57E] text-sm mb-3">Conversational AI Assistant</p>
          <p className="text-gray-300 text-sm mb-4">
            Intelligent chatbot using Google's DialogFlow ES for natural language
            processing and automated customer support.
          </p>
          <a href="https://github.com" className="text-[#fddfbd] hover:underline font-medium">
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


 <div className="min-h-screen bg-gray-50 p-2 flex flex-col md:flex-row  justify-center items-center gap-40">
    
  {/* Work Culture wala Section */}
      <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">💼 Work Culture & Values</h2>
        <p className="text-gray-600 mb-6">At AppDost, we believe in:</p>
        <ul className="space-y-4">
          {values.map((item, index) => (
            <li key={index} className="flex items-start gap-3 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>




      {/* Contact Section */}
      <div className="flex-1 bg-gradient-to-br from-[#FCB57E] via-[#448072] to-[#3F2C1D] text-[#3F2C1D] rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">📞 Get In Touch</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">🌐 Website:</h4>
            <a href={`https://${contact.website}`} className="underline">{contact.website}</a>
          </div>
          <div>
            <h4 className="font-semibold">📧 Email:</h4>
            {contact.emails.map((email, i) => (
              <p key={i}>{email}</p>
            ))}
          </div>
          <div>
            <h4 className="font-semibold">📍 Locations:</h4>
            <p>{contact.locations}</p>
          </div>
          <div>
            <h4 className="font-semibold">📞 Phone:</h4>
            {contact.phones.map((phone, i) => (
              <p key={i}>{phone}</p>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button className="bg-white text-[#448072] font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">
            Join Our Team
          </button>
          <button className="bg-transparent border border-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#448072] transition">
            Start Your Project
          </button>
        </div>
      </div>
    </div>

 <div className="bg-gray-50 text-gray-800">
  
      <section className="flex flex-col items-center justify-center text-center px-3 sm:px-6 lg:px-10 py-3 sm:py-14 lg:py-20">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technologies We Master
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mb-8 sm:mb-10 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We leverage cutting-edge technologies to build robust, scalable, and
          innovative solutions.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
    
          {[
            { icon: "⚛️", name: "React" },
            { icon: "🟢", name: "Node.js" },
            { icon: "🐍", name: "Python" },
            { icon: "🍃", name: "MongoDB" },
            { icon: "☁️", name: "AWS" },
            { icon: "🐳", name: "Docker" },
            { icon: "📱", name: "Kotlin" },
            { icon: "💙", name: "TypeScript" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition border border-gray-200 flex flex-col items-center"
            >
              <span className="text-4xl mb-2">{tech.icon}</span>
              <h3 className="font-semibold text-gray-700">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

    
      <section className="bg-white py-14 sm:py-20 px-3 sm:px-6 lg:px-10 flex flex-col items-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Updates
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl text-center mb-10 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Stay informed with our latest insights, tech trends, and industry expertise.
        </motion.p>

        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  📝 Design & Innovation
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Explore our thoughts on UX, design systems, and emerging tech shaping
                  the future of digital experiences.
                </p>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>AppDost Team</span>
                <span>Oct 12, 2025</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 sm:mt-12 bg-[#448072] text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-[#448072] transition"
        >
          View All Articles →
        </motion.button>
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


</section>




    </div>
  );
};
export default Home;