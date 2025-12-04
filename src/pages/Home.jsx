import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaMobileAlt, 
  FaCloud, 
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaCogs,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaDatabase,
  FaLock,
  FaBolt,
  FaPaintBrush
} from 'react-icons/fa';
import '../css/Home.css';

const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const homeRef = useRef(null);
  const testimonialIntervalRef = useRef(null);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  // Services Data
  const services = [
    {
      icon: <FaCode />,
      title: "Custom Software Development",
      description: "Tailored software solutions that align perfectly with your business requirements and goals.",
      color: "#3B82F6"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      color: "#10B981"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      color: "#8B5CF6"
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      color: "#EF4444"
    }
  ];

  // Key Features Data
  const features = [
    { icon: <FaRocket />, title: "Fast Delivery", description: "Agile development methodology for timely project delivery" },
    { icon: <FaChartLine />, title: "Scalable Solutions", description: "Future-proof solutions that grow with your business" },
    { icon: <FaUsers />, title: "Expert Team", description: "Certified professionals with industry expertise" },
    { icon: <FaStar />, title: "Quality Assurance", description: "Rigorous testing at every development stage" },
    { icon: <FaCogs />, title: "Maintenance Support", description: "24/7 technical support and maintenance services" },
    { icon: <FaLightbulb />, title: "Innovative Approach", description: "Cutting-edge technology and innovative solutions" }
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechNova Solutions",
      content: "Apexbyte transformed our entire digital infrastructure. Their team delivered beyond expectations.",
      rating: 5,
      companyLogo: "TN"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, Global Retail Inc",
      content: "The mobile app developed by Apexbyte increased our customer engagement by 300%. Highly recommended!",
      rating: 5,
      companyLogo: "GR"
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Director, HealthTech Pro",
      content: "Their attention to detail and commitment to quality is exceptional. A true partner in success.",
      rating: 4,
      companyLogo: "HP"
    },
    {
      id: 4,
      name: "Robert Davis",
      role: "Founder, EduTech Innovations",
      content: "From concept to launch, Apexbyte guided us through every step with professionalism and expertise.",
      rating: 5,
      companyLogo: "EI"
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap.",
      icon: <FaHandshake />
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and prototypes for your approval.",
      icon: <FaPaintBrush />
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and milestone deliveries.",
      icon: <FaCode />
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality and performance.",
      icon: <FaCheckCircle />
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth deployment with zero downtime and thorough documentation.",
      icon: <FaRocket />
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance services.",
      icon: <FaCogs />
    }
  ];

  // Stats Data
  const stats = [
    { value: "500+", label: "Projects Completed", icon: <FaGlobe /> },
    { value: "98%", label: "Client Satisfaction", icon: <FaStar /> },
    { value: "50+", label: "Team Experts", icon: <FaUsers /> },
    { value: "24/7", label: "Support Available", icon: <FaBolt /> }
  ];

  // Technologies Data
  const technologies = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "AWS", icon: "☁️", color: "#FF9900" },
    { name: "Docker", icon: "🐳", color: "#2496ED" },
    { name: "MongoDB", icon: "🍃", color: "#47A248" },
    { name: "TensorFlow", icon: "🤖", color: "#FF6F00" },
    { name: "Blockchain", icon: "⛓️", color: "#3C3C3D" }
  ];

  // Auto-slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScrolling) {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isScrolling]);

  // Auto-slide testimonials
  useEffect(() => {
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current);
      }
    };
  }, [testimonials.length]);

  // Manual scroll through images
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 0) {
        setIsScrolling(true);
        
        if (e.deltaY > 0) {
          setCurrentBg(prev => (prev + 1) % backgroundImages.length);
        } else {
          setCurrentBg(prev => (prev - 1 + backgroundImages.length) % backgroundImages.length);
        }
        
        setTimeout(() => setIsScrolling(false), 500);
        setScrollProgress(((currentBg + 1) / backgroundImages.length) * 100);
      }
    };

    const element = homeRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel);
      
      let touchStartY = 0;
      
      const handleTouchStart = (e) => {
        touchStartY = e.touches[0].clientY;
      };
      
      const handleTouchMove = (e) => {
        e.preventDefault();
        const touchEndY = e.touches[0].clientY;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > 50) {
          setIsScrolling(true);
          
          if (diff > 0) {
            setCurrentBg(prev => (prev + 1) % backgroundImages.length);
          } else {
            setCurrentBg(prev => (prev - 1 + backgroundImages.length) % backgroundImages.length);
          }
          
          touchStartY = touchEndY;
          setTimeout(() => setIsScrolling(false), 500);
          setScrollProgress(((currentBg + 1) / backgroundImages.length) * 100);
        }
      };
      
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      return () => {
        element.removeEventListener('wheel', handleWheel);
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [currentBg, backgroundImages.length]);

  // Navigation functions
  const nextImage = () => {
    setIsScrolling(true);
    setCurrentBg(prev => (prev + 1) % backgroundImages.length);
    setScrollProgress(((currentBg + 2) % backgroundImages.length) * (100 / backgroundImages.length));
    setTimeout(() => setIsScrolling(false), 300);
  };

  const prevImage = () => {
    setIsScrolling(true);
    setCurrentBg(prev => (prev - 1 + backgroundImages.length) % backgroundImages.length);
    setScrollProgress(((currentBg) % backgroundImages.length) * (100 / backgroundImages.length));
    setTimeout(() => setIsScrolling(false), 300);
  };

  const goToImage = (index) => {
    setIsScrolling(true);
    setCurrentBg(index);
    setScrollProgress(((index + 1) / backgroundImages.length) * 100);
    setTimeout(() => setIsScrolling(false), 300);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
      testimonialIntervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }
  };

  const scrollToContent = () => {
    const nextSection = document.querySelector('.services-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? "star filled" : "star"} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="home-container" ref={homeRef}>
      {/* Hero Section with Image Scroll */}
      <div className="image-scroll-section">
        {backgroundImages.map((img, index) => (
          <motion.div 
            key={index}
            className={`scroll-image ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBg ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-overlay"></div>
            <div className={`image-content ${index === currentBg ? 'show' : 'hide'}`}>
              <motion.h2 
                className="image-title"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {index === 0 && 'Digital Transformation'}
                {index === 1 && 'Innovative Solutions'}
                {index === 2 && 'Technology Excellence'}
                {index === 3 && 'Future Ready'}
              </motion.h2>
              <motion.p 
                className="image-description"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {index === 0 && 'Empowering businesses with cutting-edge software solutions and digital innovation.'}
                {index === 1 && 'Transforming ideas into scalable, high-performance applications.'}
                {index === 2 && 'Leveraging technology to drive growth and competitive advantage.'}
                {index === 3 && 'Building tomorrow\'s solutions with today\'s leading technologies.'}
              </motion.p>
              <motion.button 
                className="explore-btn" 
                onClick={scrollToContent}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Services
              </motion.button>
            </div>
          </motion.div>
        ))}

        <button className="nav-btn prev-btn" onClick={prevImage}>
          <span>&lt;</span>
        </button>
        <button className="nav-btn next-btn" onClick={nextImage}>
          <span>&gt;</span>
        </button>

        <div className="dots-indicator">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentBg ? 'active' : ''}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>

        <div className="scroll-progress">
          <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>

        {/* <div className="image-counter">
          <span className="current-number">{currentBg + 1}</span>
          <span className="divider">/</span>
          <span className="total-number">{backgroundImages.length}</span>
        </div> */}
      </div>

      {/* Services Section */}
      <section className="services-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive software solutions tailored to your business needs</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="service-icon"
                style={{ backgroundColor: `${service.color}20`, color: service.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <motion.button 
                className="service-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features Section with Blur Background */}
      <section className="key-features-section">
        <div className="features-bg-overlay"></div>
        <div className="features-container">
          <motion.div 
            className="features-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="features-title">Why Choose Apexbyte?</h2>
            <p className="features-description">
              We combine technical expertise with business understanding to deliver solutions that drive real results. Our approach ensures quality, scalability, and innovation at every step.
            </p>
            <div className="features-list">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="features-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="stats-title">Our Impact in Numbers</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by businesses worldwide</p>
        </motion.div>

        <div className="testimonials-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-content">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="testimonial-author">
                <div className="author-logo">
                  {testimonials[currentTestimonial].companyLogo}
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p>{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <StarRating rating={testimonials[currentTestimonial].rating} />
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process-section">
        <div className="process-container">
          <motion.div 
            className="process-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="process-title">Our Development Process</h2>
            <p className="process-description">
              A structured approach to ensure project success from inception to deployment and beyond.
            </p>
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="process-step"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="process-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="tech-stack">
              <h3>Our Technology Stack</h3>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="tech-item"
                    style={{ borderColor: tech.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: `0 10px 20px ${tech.color}40` }}
                  >
                    <span className="tech-icon" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2 className="cta-title1" >Ready to Transform Your Business?</h2>
            <p className="cta-description" style={{color:'white', fontSize:'1.2rem'}}>
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
          </div>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;