import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Share2, Clock, Building2, Headphones } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f1d0b6] via-[#a7f5e3] to-[#e0d6ce] text-gray-800">

      <section className="text-center py-20 bg-[#448072] text-white rounded-b-[40px] shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-3"
        >
          Get In Touch
        </motion.h1>
        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
          We’d love to hear from you. Let’s discuss how we can help bring your project to life!
        </p>
      </section>

      {/* Contact  */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20 -mt-10 relative z-10">
        {[
          { icon: <Mail />, title: "Email Us", info: "contact@appdost.in" },
          { icon: <Phone />, title: "Call Us", info: "+91 62052 75322\n+91 87095 02069" },
          { icon: <MapPin />, title: "Our Offices", info: "Jawahar Lal Nehru Marg, Banka, Bihar" },
          { icon: <Share2 />, title: "Social Media", info: "Follow us on LinkedIn, Instagram, Twitter" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4 text-[#448072] text-4xl">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
          </motion.div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#448072]">Send Us a Message</h2>
          <p className="text-gray-600 mb-6">Fill out the form and we’ll get back to you within 24 hours.</p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="input-field border-[#448072]" required />
              <input type="email" placeholder="Email Address" className="input-field border-[#448072]" required />
            </div>
            <input type="tel" placeholder="Phone Number" className="input-field border-[#448072]" />
            <select className="input-field border-[#448072]">
              <option>Select a subject</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
            </select>
            <textarea rows="4" placeholder="Write your message..." className="input-field border-[#448072]"></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#8ad9c7] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#448072]">Our Office</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <Building2 className="text-[#448072]" />
              <p><strong>Headquarters:</strong> Jawahar Lal Nehru Marg, Banka, Bihar 813102</p>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-[#448072]" />
              <p><strong>Branch Office:</strong> Mithapur Office, Patna, Bihar 800001</p>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="text-[#448072]" />
              <p><strong>Business Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM</p>
            </div>
            <div className="flex items-start space-x-3">
              <Headphones className="text-[#448072]" />
              <p><strong>Emergency Support:</strong> 24/7 for existing clients</p>
            </div>
          </div>
        </motion.div>
      </section>
<section className="py-20 bg-gradient-to-b from-white to-[#a7e7d8]">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Frequently Asked Questions
    </h2>
    <p className="text-gray-600 mb-10">
      Quick answers to common questions about our services
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          q: "How long does a typical project take?",
          a: "Project timelines vary based on complexity. Small projects: 2–4 weeks, Medium: 1–3 months, Large: 3–6+ months.",
        },
        {
          q: "What are your payment terms?",
          a: "We typically work on a 30–50–20 payment structure, with stages for project initiation, mid-term, and final delivery payment.",
        },
        {
          q: "Do you provide post-launch support?",
          a: "Yes! We offer maintenance and support packages for all projects, including bug fixes and updates.",
        },
        {
          q: "Do you work with international clients?",
          a: "Absolutely. We work with clients globally and accommodate time zone differences for smooth collaboration.",
        },
        {
          q: "What technologies do you use?",
          a: "We use modern technologies including React, Node.js, Python, Next.js, AWS, and more based on project needs.",
        },
        {
          q: "Can I visit your offices?",
          a: "Yes, we welcome office visits. Please contact us in advance to schedule a time.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -4 }}
          className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition"
        >
          <h3 className="font-semibold text-black mb-2">{item.q}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 bg-gradient-to-b from-[#a7e7d8] to-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Why Choose AppDost?
    </h2>
    <p className="text-gray-600 mb-12">
      We’re more than just developers — we’re your technology partners
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Fast Delivery",
          desc: "We deliver high-quality solutions on time, every time, using agile methodologies.",
          icon: "⚡",
        },
        {
          title: "Competitive Pricing",
          desc: "Get the best value for your investment with transparent pricing and no hidden costs.",
          icon: "💰",
        },
        {
          title: "Dedicated Support",
          desc: "Our team is always here to support you throughout the entire project lifecycle.",
          icon: "🎧",
        },
        {
          title: "Proven Track Record",
          desc: "Join 100+ satisfied clients who trust us with their critical IT needs and projects.",
          icon: "🏆",
        },
        {
          title: "Data Security",
          desc: "Your data is safe with us. We follow industry-standard security practices and compliance standards.",
          icon: "🔒",
        },
        {
          title: "Custom Solutions",
          desc: "We don’t believe in one-size-fits-all. Every solution is tailored to your unique needs.",
          icon: "🧩",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 text-center"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="font-semibold text-indigo-700 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 bg-gradient-to-b from-white to-indigo-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Our Office Locations
    </h2>
    <p className="text-gray-600 mb-10">
      Visit us at any of our offices across Bihar for personalized consultation
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Banka Office",
          type: "HEADQUARTERS",
          address:
            "AppDost Computer IT Solutions, Jawahar Lal Nehru Marg, Banka, Bihar 813102, India",
        },
        {
          title: "Motihari Office",
          type: "BRANCH",
          address:
            "AppDost Computer IT Solutions, Janpul Chowk, Kesariya, Motihari, Bihar 845426, India",
        },
        {
          title: "Patna Office",
          type: "BRANCH",
          address:
            "AppDost Solution Computer IT Solutions, Mithapur, Station Road, Patna, Bihar 800001, India",
        },
      ].map((office, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-gray-200"
        >
          <div className="text-left">
            <p className="text-xs font-semibold text-indigo-600 mb-1">
              {office.type}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {office.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{office.address}</p>
            <a
              href="#"
              className="text-indigo-600 font-medium hover:underline"
            >
              View on Map →
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
}
