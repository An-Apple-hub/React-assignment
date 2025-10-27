import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "BEU Mate – Bihar Engineering",
    category: "Web Development",
    tag: "AI-Powered Platform",
    desc: "An AI-powered companion for B.Tech students, offering personalized learning, guidance, and placement support.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 2,
    title: "Devskillquest",
    category: "UI/UX Design",
    tag: "Educational Platform",
    desc: "An interactive platform for developers to learn coding through challenges and guided projects.",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
  {
    id: 3,
    title: "Shopzy",
    category: "E-commerce",
    tag: "Online Store",
    desc: "A modern e-commerce solution with AI-driven product recommendations and seamless user experience.",
    img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
  },
  {
    id: 4,
    title: "AppDost CRM",
    category: "Mobile Apps",
    tag: "Business Management",
    desc: "A mobile CRM app that simplifies client management and boosts productivity for small businesses.",
    img: "https://cdn-icons-png.flaticon.com/512/5951/5951759.png",
  },
];

const filters = ["All Projects", "Web Development", "Mobile Apps", "E-commerce", "UI/UX Design"];

export default function PortfolioShowcase() {
  const [selected, setSelected] = useState("All Projects");

  const filteredProjects =
    selected === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === selected);

  return (
    <div className="px-6 md:px-20 py-16 bg-gradient-to-br from-[#fef9f5] via-[#aad9dc] to-white min-h-screen">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              selected === filter
                ? "bg-[#ebc6aa] text-white shadow-lg scale-105"
                : "bg-white text-[#7A441B] hover:bg-[#FCB57E]/20 border-[#7A441B]/40"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#7A441B]/10 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-[#448072] to-white h-40 flex justify-center items-center">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-20 h-20 rounded-full bg-white p-3 shadow-md"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase text-[#7A441B]/70 bg-[#FCB57E]/20 px-3 py-1 rounded-full">
                  {project.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#3F2C1D]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#3F2C1D]/70 mt-2 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
