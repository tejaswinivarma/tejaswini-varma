import React, { useState, useEffect } from 'react';

// Header Component
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">essen</span>
              <span className="text-red-400">.</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">
                Products
              </button>
              <button onClick={() => scrollToSection('careers')} className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">
                Careers
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('careers')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left">
                Careers
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Component
export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1700692883604-e0cfbf3b71d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxkZWZlbnNlJTIwZWxlY3Ryb25pY3N8ZW58MHx8fGJsdWV8MTc1Mjc0MTA1N3ww&ixlib=rb-4.1.0&q=85)'
        }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Defending the Nation with
          <span className="text-blue-400 block">Advanced Electronics</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          ISO 9001:2015 certified defense electronics manufacturer serving India for over two decades with integrity and uncompromised quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Solutions
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

// About Component
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Essen Electronic Systems</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An Indian Defence Licensed Industry serving the nation with cutting-edge electronic solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/10988021/pexels-photo-10988021.jpeg"
              alt="Advanced Defense Technology"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Leading Defense Electronics Innovation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              ESSEN is an INDIAN DEFENCE LICENSED INDUSTRY which has been serving the NATION for almost two decades with INTEGRITY and un-compromised QUALITY. We provide indigenous solutions to various sectors including Defence and Aerospace.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our expertise spans across missile onboard systems, radar technology, sonar systems, and advanced electronic warfare solutions. We specialize in indigenization of foreign systems and provide comprehensive support from design to manufacturing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">ISO 9001:2015</h4>
                <p className="text-gray-300">Certified Quality Management</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">20+ Years</h4>
                <p className="text-gray-300">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Component
export const Services = () => {
  const services = [
    {
      title: "Design & Development",
      description: "Custom electronic system design and development for defense applications",
      icon: "🔧",
      image: "https://images.pexels.com/photos/2422556/pexels-photo-2422556.jpeg"
    },
    {
      title: "Indigenization",
      description: "Converting foreign systems to indigenous solutions for enhanced security",
      icon: "🛡️",
      image: "https://images.pexels.com/photos/6985046/pexels-photo-6985046.jpeg"
    },
    {
      title: "Prototype Manufacturing",
      description: "Rapid prototyping and testing of electronic systems",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1649840294942-cb32677c0ea9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxyYWRhciUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsdWV8MTc1Mjc0MTA2NXww&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Bulk Manufacturing",
      description: "Large-scale production of electronic and electro-mechanical systems",
      icon: "🏭",
      image: "https://images.unsplash.com/photo-1649840295185-446b3f9cce02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxyYWRhciUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsdWV8MTc1Mjc0MTA2NXww&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Onboard Services",
      description: "STW, HATs & SATs onboard services for naval applications",
      icon: "🚢",
      image: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
    },
    {
      title: "RRC / AMC Services",
      description: "Repair, refurbishment and annual maintenance contracts",
      icon: "🔍",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive defense electronics solutions from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}}>
                <div className="h-full bg-black/40 flex items-center justify-center">
                  <span className="text-4xl">{service.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Products Component
export const Products = () => {
  const products = [
    {
      category: "Missile Systems",
      items: ["Missile Electronic Systems", "Missile Electro-Mechanical Systems", "Onboard Control Systems"]
    },
    {
      category: "Naval Systems",
      items: ["Torpedo Control Electronic Systems", "Underwater Mines Systems", "Naval Communication Systems"]
    },
    {
      category: "Radar & Sonar",
      items: ["SONAR Sub-Systems", "RADAR Sub-Systems", "Navigation Systems"]
    },
    {
      category: "Electronic Warfare",
      items: ["EW Electronic Systems", "Weapon Control Systems", "Armament Safety Systems"]
    },
    {
      category: "Testing & Simulation",
      items: ["Simulators", "Test Panels", "Data Acquisition Systems"]
    },
    {
      category: "Guidance Systems",
      items: ["Navigation Systems", "Guidance Control", "Targeting Systems"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced defense electronics across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-4">{product.category}</h3>
              <ul className="space-y-2">
                {product.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Careers Component
export const Careers = () => {
  const openings = [
    {
      title: "PCB CAD Designers",
      department: "Engineering",
      type: "Full-time",
      location: "Visakhapatnam"
    },
    {
      title: "Engineers/Jr. Engineers (Testing/QC/Production)",
      department: "Quality Control",
      type: "Full-time",
      location: "Visakhapatnam"
    },
    {
      title: "Production Assistants",
      department: "Manufacturing",
      type: "Full-time",
      location: "Visakhapatnam"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-blue-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of India's defense technology revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openings.map((job, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">{job.title}</h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-300"><span className="text-blue-400">Department:</span> {job.department}</p>
                <p className="text-gray-300"><span className="text-blue-400">Type:</span> {job.type}</p>
                <p className="text-gray-300"><span className="text-blue-400">Location:</span> {job.location}</p>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-900/20 border border-red-500 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="text-lg font-semibold text-red-400">Important Notice</h3>
          </div>
          <p className="text-gray-300">
            <strong>Caution Against Fraudulent Offers:</strong> Please be aware of fraudulent employment offers. 
            Essen Electronic Systems does not charge any fees for job applications or recruitment processes. 
            All legitimate communications come through official channels only.
          </p>
        </div>
      </div>
    </section>
  );
};

// Contact Component
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your defense electronics requirements?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Address</h4>
                  <p className="text-gray-300">Visakhapatnam, Andhra Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Quick Contact</h4>
                  <p className="text-gray-300">Code: 5462</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Business Hours</h4>
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">essen</span>
              <span className="text-red-400">.</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Essen Electronic Systems Private Limited - India's trusted defense electronics manufacturer, 
              serving the nation with integrity and uncompromised quality since 2003.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm text-gray-400">ISO 9001:2015 TUV India Certified</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Design & Development</span></li>
              <li><span className="text-gray-300">Indigenization</span></li>
              <li><span className="text-gray-300">Manufacturing</span></li>
              <li><span className="text-gray-300">RRC / AMC Services</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Essen Electronic Systems Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};