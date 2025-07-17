import React from "react";
import { motion } from "framer-motion";
import { Cog, Wrench, Factory, Shield, Headphones, CheckCircle } from "lucide-react";
import { ServicesBreakdownChart, TechnologyExpertiseChart } from "../components/ChartComponents";

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "Design & Development",
      description: "Advanced electronic systems design and development",
      features: [
        "Custom PCB Design",
        "Embedded Systems",
        "Signal Processing",
        "System Integration",
        "Testing & Validation"
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wrench,
      title: "Indigenization",
      description: "Foreign system localization and adaptation",
      features: [
        "Reverse Engineering",
        "Technology Transfer",
        "Local Manufacturing",
        "Cost Optimization",
        "Quality Enhancement"
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Factory,
      title: "Prototype Manufacturing",
      description: "Rapid prototyping and small batch production",
      features: [
        "3D Printing",
        "CNC Machining",
        "PCB Assembly",
        "Component Testing",
        "Quality Assurance"
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Factory,
      title: "Bulk Manufacturing",
      description: "Large-scale production with quality control",
      features: [
        "Automated Assembly",
        "Quality Control",
        "Supply Chain Management",
        "Logistics Support",
        "Documentation"
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Onboard Services",
      description: "On-site support and maintenance",
      features: [
        "System Installation",
        "Training & Support",
        "Maintenance Services",
        "Troubleshooting",
        "Performance Optimization"
      ],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "RRC / AMC Services",
      description: "Comprehensive support and maintenance contracts",
      features: [
        "Annual Maintenance",
        "Spare Parts Supply",
        "Technical Support",
        "Performance Monitoring",
        "Upgrade Services"
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const processes = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understanding client needs and system specifications",
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Creating detailed designs and development plans",
    },
    {
      step: "03",
      title: "Prototyping",
      description: "Building and testing initial prototypes",
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Comprehensive testing and quality assurance",
    },
    {
      step: "05",
      title: "Manufacturing",
      description: "Full-scale production and quality control",
    },
    {
      step: "06",
      title: "Deployment & Support",
      description: "Installation, training, and ongoing support",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1580063665860-af92a61c2810')`,
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Defense Electronics Solutions from Concept to Deployment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              End-to-end solutions for all your defense electronics needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Analytics
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our capabilities and expertise across different service areas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="chart-container"
            >
              <ServicesBreakdownChart />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="chart-container"
            >
              <TechnologyExpertiseChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A systematic approach to delivering excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can meet your defense electronics requirements
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;