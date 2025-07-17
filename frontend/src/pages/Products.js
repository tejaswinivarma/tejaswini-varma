import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Ship, Radio, Zap, Monitor, Navigation, Search } from "lucide-react";
import { ProductCategoriesChart } from "../components/ChartComponents";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Search },
    { id: "missile", name: "Missile Systems", icon: Rocket },
    { id: "naval", name: "Naval Systems", icon: Ship },
    { id: "radar", name: "Radar & Sonar", icon: Radio },
    { id: "warfare", name: "Electronic Warfare", icon: Zap },
    { id: "testing", name: "Testing & Simulation", icon: Monitor },
    { id: "guidance", name: "Guidance Systems", icon: Navigation },
  ];

  const products = [
    {
      category: "missile",
      title: "Missile Electronic Systems",
      description: "Advanced electronic control systems for guided missiles",
      image: "https://images.unsplash.com/photo-1717749789408-f6f73c9e6aac",
      features: ["Real-time Control", "GPS Integration", "Fail-safe Mechanisms", "Telemetry Systems"],
      specs: {
        "Operating Range": "0-50km",
        "Accuracy": "±2m CEP",
        "Response Time": "<100ms",
        "Temperature": "-40°C to +70°C"
      }
    },
    {
      category: "missile",
      title: "Missile Electro-Mechanical Systems",
      description: "Precision electro-mechanical components for missile guidance",
      image: "https://images.unsplash.com/photo-1510817992534-083ab932fd30",
      features: ["Servo Controls", "Actuator Systems", "Sensor Integration", "Vibration Resistance"],
      specs: {
        "Precision": "±0.1°",
        "Response Time": "<50ms",
        "Endurance": "10,000 hours",
        "Load Capacity": "50kg"
      }
    },
    {
      category: "naval",
      title: "Torpedo Control Electronic Systems",
      description: "Sophisticated control systems for naval torpedoes",
      image: "https://images.pexels.com/photos/8585323/pexels-photo-8585323.jpeg",
      features: ["Underwater Communication", "Autonomous Navigation", "Target Tracking", "Stealth Mode"],
      specs: {
        "Depth Rating": "300m",
        "Range": "20km",
        "Speed": "50 knots",
        "Battery Life": "2 hours"
      }
    },
    {
      category: "naval",
      title: "Underwater Mines Systems",
      description: "Advanced underwater mine detection and control systems",
      image: "https://images.pexels.com/photos/13128615/pexels-photo-13128615.jpeg",
      features: ["Proximity Detection", "Remote Activation", "Self-Destruct", "Acoustic Sensors"],
      specs: {
        "Detection Range": "500m",
        "Standby Time": "1 year",
        "Activation Delay": "0-60 seconds",
        "Depth Rating": "200m"
      }
    },
    {
      category: "radar",
      title: "SONAR Sub-Systems",
      description: "High-performance sonar systems for naval applications",
      image: "https://images.unsplash.com/photo-1662358472553-1b17c0341601",
      features: ["Active/Passive Mode", "Digital Signal Processing", "Multi-beam Technology", "Noise Cancellation"],
      specs: {
        "Frequency Range": "1-100 kHz",
        "Detection Range": "50km",
        "Resolution": "1m",
        "Power": "10kW"
      }
    },
    {
      category: "radar",
      title: "RADAR Sub-Systems",
      description: "Advanced radar subsystems for air and ground surveillance",
      image: "https://images.unsplash.com/photo-1510817992534-083ab932fd30",
      features: ["Pulse Doppler", "FMCW Technology", "Clutter Rejection", "Target Classification"],
      specs: {
        "Range": "200km",
        "Frequency": "X-band",
        "PRF": "1-10 kHz",
        "Antenna Gain": "35 dB"
      }
    },
    {
      category: "warfare",
      title: "EW Electronic Systems",
      description: "Electronic warfare systems for signal intelligence",
      image: "https://images.unsplash.com/photo-1717749789408-f6f73c9e6aac",
      features: ["Signal Jamming", "Frequency Hopping", "Threat Detection", "Countermeasures"],
      specs: {
        "Frequency Range": "1-18 GHz",
        "Power Output": "1kW",
        "Scan Speed": "1000 MHz/s",
        "Sensitivity": "-100 dBm"
      }
    },
    {
      category: "warfare",
      title: "Weapon Control Systems",
      description: "Automated weapon control and targeting systems",
      image: "https://images.unsplash.com/photo-1580063665860-af92a61c2810",
      features: ["Auto-targeting", "Ballistic Calculation", "Fire Control", "Safety Interlocks"],
      specs: {
        "Accuracy": "±0.5 mrad",
        "Response Time": "<200ms",
        "Target Capacity": "100 simultaneous",
        "Range": "50km"
      }
    },
    {
      category: "testing",
      title: "Test Panels",
      description: "Comprehensive test panels for electronic systems",
      image: "https://images.unsplash.com/photo-1580063665860-af92a61c2810",
      features: ["Automated Testing", "Real-time Monitoring", "Data Logging", "Fault Diagnosis"],
      specs: {
        "Test Points": "500+",
        "Accuracy": "±0.1%",
        "Speed": "1000 tests/min",
        "Memory": "1TB"
      }
    },
    {
      category: "testing",
      title: "Simulators",
      description: "High-fidelity simulation systems for training",
      image: "https://images.unsplash.com/photo-1662358472553-1b17c0341601",
      features: ["Real-time Simulation", "3D Visualization", "Scenario Generator", "Performance Analysis"],
      specs: {
        "Update Rate": "1000Hz",
        "Latency": "<10ms",
        "Scenarios": "1000+",
        "Users": "50 concurrent"
      }
    },
    {
      category: "guidance",
      title: "Navigation Systems",
      description: "Precision navigation systems for various platforms",
      image: "https://images.unsplash.com/photo-1510817992534-083ab932fd30",
      features: ["INS/GPS Integration", "Kalman Filtering", "Waypoint Navigation", "Autonomous Mode"],
      specs: {
        "Accuracy": "±1m",
        "Update Rate": "100Hz",
        "MTBF": "10,000 hours",
        "Power": "50W"
      }
    },
    {
      category: "guidance",
      title: "Targeting Systems",
      description: "Advanced targeting systems for precision strikes",
      image: "https://images.unsplash.com/photo-1717749789408-f6f73c9e6aac",
      features: ["Laser Designation", "Thermal Imaging", "Auto-tracking", "Range Finding"],
      specs: {
        "Range": "20km",
        "Accuracy": "±0.1 mrad",
        "Tracking Speed": "60°/s",
        "FOV": "30°"
      }
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1717749789408-f6f73c9e6aac')`,
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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Advanced Defense Electronics Across Multiple Domains
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Chart */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product Portfolio
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Distribution of our product categories and expertise areas
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="chart-container"
            >
              <ProductCategoriesChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300 rounded-xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="text-gray-300">
                          <span className="font-medium">{key}:</span>
                          <br />
                          <span className="text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Need Custom Solutions?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can develop tailored defense electronics solutions for your specific requirements
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Request Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;