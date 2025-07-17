import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users, Target, Clock, Globe } from "lucide-react";
import { CompanyGrowthChart } from "../components/ChartComponents";

const About = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Defense License",
      description: "Government Approved",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "20+ Years",
      description: "Industry Experience",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Global Reach",
      description: "International Standards",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
  ];

  const values = [
    {
      title: "Integrity",
      description: "Unwavering commitment to ethical practices and transparency",
      icon: "🛡️",
    },
    {
      title: "Innovation",
      description: "Cutting-edge technology solutions for complex challenges",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description: "Uncompromised quality in every project delivery",
      icon: "⭐",
    },
    {
      title: "Security",
      description: "Absolute confidentiality and security protocols",
      icon: "🔒",
    },
  ];

  const timeline = [
    { year: "2005", event: "Company Foundation", description: "Started as a small defense electronics firm" },
    { year: "2008", event: "First Major Contract", description: "Secured first significant defense project" },
    { year: "2012", event: "ISO Certification", description: "Achieved ISO 9001:2015 certification" },
    { year: "2015", event: "R&D Expansion", description: "Established dedicated R&D facility" },
    { year: "2018", event: "International Recognition", description: "Received government excellence award" },
    { year: "2020", event: "Technology Partnerships", description: "Formed strategic technology alliances" },
    { year: "2023", event: "Digital Transformation", description: "Implemented Industry 4.0 solutions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1662358472553-1b17c0341601')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About ESSEN
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Leading Defense Electronics Innovation for Over Two Decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Defending the Nation with Advanced Electronics
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                ESSEN is an INDIAN DEFENCE LICENSED INDUSTRY which has been serving the NATION for almost two decades with INTEGRITY and un-compromised QUALITY. We provide indigenous solutions to various sectors including Defence and Aerospace.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our expertise spans across missile onboard systems, radar technology, sonar systems, and advanced electronic warfare solutions. We specialize in indigenization of foreign systems and provide comprehensive support from design to manufacturing.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>100+ Expert Engineers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-400" />
                  <span>500+ Projects Delivered</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="chart-container"
            >
              <CompanyGrowthChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence is validated by industry certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-300">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide our mission and drive our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Two decades of innovation and excellence in defense electronics
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2 px-8">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white/20"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;