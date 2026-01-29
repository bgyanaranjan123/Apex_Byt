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
  const heroRef = useRef(null);
  const testimonialIntervalRef = useRef(null);
  const touchStartRef = useRef(0);
  const touchStartTimeRef = useRef(0);
  const isTouchInteractingRef = useRef(false);
  const wheelTimeoutRef = useRef(null);
  const isInHeroSection = useRef(true);
  
  const backgroundImages = [
    '/home.jpg',
    '/home1.jpg',
    '/hero1.jpg',
    '/home2.jpg'
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
      if (!isScrolling && !isTouchInteractingRef.current) {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isScrolling, backgroundImages.length]);

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

  // Track scroll position to know if we're in hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      isInHeroSection.current = scrollY < heroHeight * 0.8; // 80% of hero section
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle wheel events - SIMPLIFIED VERSION - NO preventDefault
  useEffect(() => {
    let wheelTimeout = null;
    let lastWheelTime = 0;
    const WHEEL_COOLDOWN = 800; // ms between wheel-triggered slides

    const handleWheel = (e) => {
      // Only handle on desktop
      if (window.innerWidth > 768 && isInHeroSection.current) {
        const now = Date.now();
        
        // Cooldown check to prevent rapid firing
        if (now - lastWheelTime < WHEEL_COOLDOWN) {
          return;
        }

        // Only handle significant wheel movements
        if (Math.abs(e.deltaY) > 30) {
          setIsScrolling(true);
          lastWheelTime = now;
          
          if (e.deltaY > 0) {
            // Scroll down - next image
            setCurrentBg(prev => (prev + 1) % backgroundImages.length);
          } else {
            // Scroll up - previous image
            setCurrentBg(prev => (prev - 1 + backgroundImages.length) % backgroundImages.length);
          }
          
          setScrollProgress(((currentBg + 1) / backgroundImages.length) * 100);
          
          if (wheelTimeout) clearTimeout(wheelTimeout);
          wheelTimeout = setTimeout(() => {
            setIsScrolling(false);
          }, 500);
        }
      }
    };

    const element = heroRef.current;
    if (element && window.innerWidth > 768) {
      // Use passive: true to avoid blocking scrolling
      element.addEventListener('wheel', handleWheel, { passive: true });
      
      return () => {
        element.removeEventListener('wheel', handleWheel);
        if (wheelTimeout) clearTimeout(wheelTimeout);
      };
    }
  }, [currentBg, backgroundImages.length]);

  // Handle touch events for mobile - IMPROVED
  useEffect(() => {
    let touchTimeout = null;
    const TOUCH_COOLDOWN = 1000; // ms between touch-triggered slides

    const handleTouchStart = (e) => {
      if (window.innerWidth <= 768) {
        touchStartRef.current = e.touches[0].clientY;
        touchStartTimeRef.current = Date.now();
        isTouchInteractingRef.current = true;
      }
    };

    const handleTouchEnd = (e) => {
      if (window.innerWidth <= 768 && isTouchInteractingRef.current) {
        const touchEndY = e.changedTouches[0].clientY;
        const touchEndTime = Date.now();
        const diff = touchStartRef.current - touchEndY;
        const timeDiff = touchEndTime - touchStartTimeRef.current;
        
        // Only trigger on intentional swipes (quick, significant movement)
        if (timeDiff < 300 && Math.abs(diff) > 80) {
          setIsScrolling(true);
          
          if (diff > 0) {
            // Swipe up - next image
            setCurrentBg(prev => (prev + 1) % backgroundImages.length);
          } else {
            // Swipe down - previous image
            setCurrentBg(prev => (prev - 1 + backgroundImages.length) % backgroundImages.length);
          }
          
          setScrollProgress(((currentBg + 1) / backgroundImages.length) * 100);
          
          if (touchTimeout) clearTimeout(touchTimeout);
          touchTimeout = setTimeout(() => {
            setIsScrolling(false);
            isTouchInteractingRef.current = false;
          }, TOUCH_COOLDOWN);
        } else {
          isTouchInteractingRef.current = false;
        }
      }
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchend', handleTouchEnd, { passive: true });
      
      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
        if (touchTimeout) clearTimeout(touchTimeout);
      };
    }
  }, [currentBg, backgroundImages.length]);

  // Navigation functions
  const nextImage = () => {
    setIsScrolling(true);
    setCurrentBg(prev => (prev + 1) % backgroundImages.length);
    setScrollProgress(((currentBg + 1) % backgroundImages.length + 1) * (100 / backgroundImages.length));
    setTimeout(() => setIsScrolling(false), 300);
  };

  const prevImage = () => {
    setIsScrolling(true);
    setCurrentBg(prev => (prev - 1 + backgroundImages.length) % backgroundImages.length);
    setScrollProgress((currentBg % backgroundImages.length) * (100 / backgroundImages.length));
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
      const headerOffset = window.innerWidth <= 768 ? 80 : 100;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
    <div className="home-container page-mobile-fix" ref={homeRef} style={{marginTop:'60px'}}>
      {/* Hero Section with Image Scroll */}
      <div className="image-scroll-section" ref={heroRef}>
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="scroll-progress">
          <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-50px" }}
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
            viewport={{ once: true, margin: "-100px" }}
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
            viewport={{ once: true, margin: "-100px" }}
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
          viewport={{ once: true, margin: "-100px" }}
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
                aria-label={`Go to testimonial ${index + 1}`}
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
            viewport={{ once: true, margin: "-100px" }}
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
            viewport={{ once: true, margin: "-100px" }}
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
          viewport={{ once: true, margin: "-100px" }}
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