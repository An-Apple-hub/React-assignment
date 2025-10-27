import { motion } from "framer-motion";
import { Users, Rocket, Briefcase, Heart, Award, BookOpen } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f7decb] to-white text-[#3F2C1D]">
      
   
      <section className="relative py-28 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-white via-[#FCB57E] to-white opacity-20 blur-3xl"
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#FCB57E]-400 via-[#448072] to-[#3F2C1D] bg-clip-text text-bold"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-lg md:text-xl text-[#3F2C1D] max-w-2xl mx-auto"
          >
            Be part of our 20+ member development team & shape the next generation of IT excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-14"
          >
            Why Work With Us?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Expert Team",
                desc: "Collaborate with a skilled group of innovators who thrive on solving real-world problems through technology.",
                icon: <Users />,
              },
              {
                title: "Career Growth",
                desc: "Gain access to mentorship, learning resources, and clear advancement paths to grow into your dream role.",
                icon: <Rocket />,
              },
              {
                title: "Innovative Projects",
                desc: "Build cutting-edge products using AI, cloud, and full-stack tech for global clients.",
                icon: <Briefcase />,
              },
              {
                title: "Work-Life Balance",
                desc: "Enjoy flexible schedules, mental wellness programs, and a supportive remote culture.",
                icon: <Heart />,
              },
              {
                title: "Recognition",
                desc: "We celebrate achievements — from innovation awards to monthly recognition programs.",
                icon: <Award />,
              },
              {
                title: "Learning Culture",
                desc: "Access to workshops, conferences, certifications, and project-based learning every quarter.",
                icon: <BookOpen />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative bg-gradient-to-br from- to-slate-900 rounded-2xl p-6 shadow-xl border border-slate-700 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#afe1d6] to-[#efd0b9] opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="p-3 bg-slate-200/50 rounded-full text-[#3F2C1D] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#3F2C1D]">
                    {item.title}
                  </h3>
                  <p className="text-[#7e6553] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENIN */}
      <section className="py-20 text-center bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          Current Openings
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-md mx-auto bg-[#e0bea4] border border-slate-700 p-10 rounded-2xl shadow-lg"
        >
          <div className="flex justify-center mb-4 text-[#3F2C1D]">
            <Briefcase size={40} />
          </div>
          <h3 className="font-semibold text-xl text-[#3F2C1D] mb-2">No Current Openings</h3>
          <p className="text-[#6a594b] text-sm mb-6">
            We're not hiring right now, but we’re always excited to meet new talent!  
            Submit your resume, and we’ll reach out when a matching role opens.
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#3F2C1D] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
          >
            Submit Your Resume
          </motion.button>
        </motion.div>
      </section>

      <section className="py-24 px-6 md:px-16 relative">
        <div className="max-w-3xl mx-auto bg-transparent border border-slate-700 p-10 rounded-2xl shadow-xl backdrop-blur-sm">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-center text-[#3F2C1D]"
          >
            Submit Your Resume
          </motion.h2>
          <p className="text-[#5f5248] mb-10 text-center">
            Share your details and resume below — we'll reach out when suitable opportunities arise.
          </p>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border border-[#3F2C1D] rounded-lg p-3 text-[#3F2C1D] placeholder-[#3F2C1D] focus:outline-none focus:ring-2 focus:ring-[#3F2C1D]"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-[#3F2C1D] rounded-lg p-3 text-[#3F2C1D] placeholder-[#3F2C1D] focus:outline-none focus:ring-2 focus:ring-[#3F2C1D]"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full  bg-transparent border border-[#3F2C1D] rounded-lg p-3 text-[#3F2C1D] placeholder-[#3F2C1D] focus:outline-none focus:ring-2 focus:ring-[#3F2C1D]"
            />
            <input
              type="file"
              className="w-full  bg-transparent border border-[#3F2C1D] rounded-lg p-3 text-[#3F2C1D] file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-tranparent file:text-[#3F2C1D] hover:file:bg-[#c4a994]"
            />
            <textarea
              rows="4"
              placeholder="Tell us about yourself..."
              className="w-full bg-transparent border border-[#3F2C1D] rounded-lg p-3 text-[#3F2C1D] placeholder-[#3F2C1D] focus:outline-none focus:ring-2 focus:ring-[#3F2C1D]"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#FCB57E] text-[#3F2C1D] py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
}
        