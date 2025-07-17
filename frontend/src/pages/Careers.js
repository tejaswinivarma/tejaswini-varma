import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  TrendingUp, 
  Heart, 
  Shield, 
  Clock, 
  MapPin, 
  DollarSign,
  Briefcase,
  GraduationCap
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive medical coverage",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous skill development programs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement opportunities",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working arrangements",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "Regular appreciation and rewards",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const jobOpenings = [
    {
      title: "PCB CAD Designers",
      department: "Engineering",
      type: "Full-time",
      location: "Visakhapatnam",
      experience: "2-5 years",
      skills: ["Altium Designer", "PCB Layout", "Signal Integrity", "EMC Design"],
      description: "Design and develop PCB layouts for defense electronic systems with focus on signal integrity and EMC compliance.",
      requirements: [
        "Bachelor's degree in Electronics/Electrical Engineering",
        "Experience with Altium Designer or similar PCB design tools",
        "Knowledge of high-speed digital design principles",
        "Understanding of EMC/EMI requirements"
      ]
    },
    {
      title: "Engineers/Jr. Engineers (Testing/QC/Production)",
      department: "Quality Control",
      type: "Full-time",
      location: "Visakhapatnam",
      experience: "1-3 years",
      skills: ["Testing Protocols", "Quality Assurance", "Production Management", "Data Analysis"],
      description: "Ensure product quality through comprehensive testing and quality control processes in production environment.",
      requirements: [
        "Bachelor's degree in Engineering (Electronics/Mechanical)",
        "Experience in testing and quality control",
        "Knowledge of testing equipment and protocols",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Production Assistants",
      department: "Manufacturing",
      type: "Full-time",
      location: "Visakhapatnam",
      experience: "0-2 years",
      skills: ["Assembly", "Quality Control", "Documentation", "Safety Protocols"],
      description: "Support production activities including assembly, testing, and quality control of defense electronic systems.",
      requirements: [
        "Diploma/ITI in Electronics or related field",
        "Basic understanding of electronic components",
        "Ability to work in a team environment",
        "Attention to detail and quality focus"
      ]
    },
    {
      title: "Senior Electronics Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Visakhapatnam",
      experience: "5-8 years",
      skills: ["System Design", "Embedded Systems", "Project Management", "Team Leadership"],
      description: "Lead development of complex defense electronic systems and manage engineering teams.",
      requirements: [
        "Master's degree in Electronics Engineering",
        "Experience in defense electronics or related field",
        "Strong project management skills",
        "Leadership and team management experience"
      ]
    },
    {
      title: "Software Developer",
      department: "Software",
      type: "Full-time",
      location: "Visakhapatnam",
      experience: "3-6 years",
      skills: ["C/C++", "Python", "Real-time Systems", "Embedded Programming"],
      description: "Develop software for defense electronic systems with focus on real-time and embedded applications.",
      requirements: [
        "Bachelor's degree in Computer Science/Software Engineering",
        "Experience in embedded software development",
        "Knowledge of real-time operating systems",
        "Strong programming skills in C/C++ and Python"
      ]
    },
    {
      title: "Quality Assurance Manager",
      department: "Quality",
      type: "Full-time",
      location: "Visakhapatnam",
      experience: "6-10 years",
      skills: ["ISO Standards", "Quality Management", "Process Improvement", "Team Leadership"],
      description: "Oversee quality assurance processes and ensure compliance with ISO and defense standards.",
      requirements: [
        "Bachelor's degree in Engineering",
        "Experience in quality management systems",
        "Knowledge of ISO 9001:2015 standards",
        "Strong leadership and communication skills"
      ]
    },
  ];

  const companyStats = [
    { label: "Team Members", value: "100+", icon: Users },
    { label: "Years of Experience", value: "20+", icon: Award },
    { label: "Projects Completed", value: "500+", icon: Briefcase },
    { label: "Employee Satisfaction", value: "95%", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/18013664/pexels-photo-18013664.jpeg')`,
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Be Part of India's Defense Technology Revolution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive benefits and a supportive work environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Openings
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join our team and contribute to India's defense technology advancement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Apply Now
                  </motion.button>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-gray-300">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto p-8 rounded-xl bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/30"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-red-400">Important Notice</h3>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-white">
              Caution Against Fraudulent Offers
            </h4>
            <p className="text-gray-300 mb-4">
              Please be aware of fraudulent employment offers. Essen Electronic Systems does not charge any fees for job applications or recruitment processes. All legitimate communications come through official channels only.
            </p>
            <div className="text-sm text-gray-400">
              <p>✓ No fees for job applications</p>
              <p>✓ Official communications only</p>
              <p>✓ Transparent recruitment process</p>
            </div>
          </motion.div>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our mission to strengthen India's defense capabilities through innovative technology
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Send Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;