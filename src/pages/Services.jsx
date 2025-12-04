import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Services.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
import { AdvancedSkyBubbleWave } from '../components/AdvanceSkyBubbleWave';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [waveIntensity, setWaveIntensity] = useState(0.5);
  
  // Services data with images
  const services = [
    {
      id: 1,
      title: "Software Development",
      tagline: "Transform Ideas into Powerful Solutions",
      description: "We build robust, scalable software applications that drive business growth. From concept to deployment, we deliver enterprise-grade solutions tailored to your specific needs.",
      features: [
        "Custom Web Applications",
        "Enterprise Solutions",
        "API Integration & Development",
        "Legacy System Modernization",
        "Microservices Architecture",
        "Real-time Applications"
      ],
      technologies: ["React", "Node.js", "Python", ".NET", "Java", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#3B82F6",
      icon: "💻"
    },
    {
      id: 2,
      title: "Mobile App Development",
      tagline: "Engage Users on Every Platform",
      description: "Create immersive mobile experiences for iOS and Android. Our cross-platform solutions ensure your app performs flawlessly across all devices.",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Mobile Design",
        "App Store Optimization",
        "Push Notifications",
        "Mobile Analytics"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#8B5CF6",
      icon: "📱"
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      tagline: "Scale with Confidence in the Cloud",
      description: "Leverage the power of cloud computing with our DevOps expertise. We build scalable, secure, and cost-effective cloud infrastructure solutions.",
      features: [
        "Cloud Migration",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Alerting",
        "Disaster Recovery"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#10B981",
      icon: "☁️"
    },
    {
      id: 4,
      title: "UI/UX Design",
      tagline: "Design Experiences Users Love",
      description: "Create beautiful, intuitive interfaces that drive engagement and conversion. Our design-first approach ensures exceptional user experiences.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Responsive Web Design",
        "Design Systems",
        "Interaction Design",
        "Accessibility Compliance"
      ],
      technologies: ["Figma", "Sketch", "Adobe XD", "Webflow", "Three.js", "GSAP"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#F59E0B",
      icon: "🎨"
    },
    {
      id: 5,
      title: "IT Consulting",
      tagline: "Strategic Technology Guidance",
      description: "Get expert guidance on your digital transformation journey. We help you make informed technology decisions that align with your business goals.",
      features: [
        "Digital Strategy",
        "Technology Architecture",
        "System Optimization",
        "Security Audits",
        "Cost Optimization",
        "Roadmap Planning"
      ],
      technologies: ["Strategy", "Architecture", "Security", "Compliance", "Optimization", "Planning"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#EF4444",
      icon: "📊"
    },
    {
      id: 6,
      title: "Staffing & Resource Augmentation",
      tagline: "Build Your Dream Team",
      description: "Scale your team with top-tier talent. We provide dedicated developers, QA engineers, and project managers to complement your in-house team.",
      features: [
        "Contract Staffing",
        "Dedicated Developer Teams",
        "Offshore Hiring",
        "Technical Interviews",
        "Team Integration",
        "Performance Management"
      ],
      technologies: ["Recruitment", "Vetting", "Onboarding", "Management", "Retention", "Scaling"],
      image: "https://images.unsplash.com/photo-1551836026-d5c2c5af91f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#6366F1",
      icon: "👥"
    }
  ];

  // Handle mouse move for parallax effect
  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) * 0.01;
    const y = (e.clientY - window.innerHeight / 2) * 0.01;
    setMousePosition({ x, y });
    
    // Adjust wave intensity based on mouse speed
    const speed = Math.sqrt(x * x + y * y);
    setWaveIntensity(Math.min(1, 0.5 + speed * 2));
  };

  // Handle scroll for wave effects
  const handleScroll = () => {
    const scroll = window.scrollY;
    setScrollY(scroll);
    
    // Adjust wave speed based on scroll
    const scrollSpeed = Math.min(1, scroll / 1000);
    setWaveIntensity(0.5 + scrollSpeed * 0.5);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 1,
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "backOut"
      }
    }
  };

  const cardHover = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconHover = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: [0, -10, 10, -10, 0],
      scale: 1.2,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: [0, -20, 0],
      transition: {
        duration: 3,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  });

  const gradientTextAnimation = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const techTagAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: custom * 0.05,
        ease: "backOut"
      }
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.2 }
    }
  };

  const detailModalAnimation = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const waveVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div 
      className="services-page-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      style={{
        background: `radial-gradient(circle at ${50 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%, #0f172a 0%, #1e293b 100%)`
      }}
    >
      {/* Hero Section with Waves */}
      <section className="services-hero-section">
        {/* Multiple Wave Layers for Depth */}
        <div className="services-wave-layer services-wave-layer-1">
          <AdvancedSkyBubbleWave 
            intensity={waveIntensity * 0.7}
            speed={0.8}
            colorTheme="blue"
            opacity={0.3}
          />
        </div>
        
        <div className="services-wave-layer services-wave-layer-2">
          <AdvancedSkyBubbleWave 
            intensity={waveIntensity * 1.2}
            speed={1.2}
            colorTheme="purple"
            opacity={0.2}
          />
        </div>
        
        <div className="services-wave-layer services-wave-layer-3">
          <AdvancedSkyBubbleWave 
            intensity={waveIntensity * 0.5}
            speed={0.5}
            colorTheme="cyan"
            opacity={0.15}
          />
        </div>

        {/* Floating Shapes */}
        <div className="services-floating-shapes">
          <motion.div 
            className="services-floating-shape services-shape-1"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            variants={floatingAnimation(0)}
            animate="animate"
          />
          <motion.div 
            className="services-floating-shape services-shape-2"
            style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)' }}
            variants={floatingAnimation(1)}
            animate="animate"
          />
          <motion.div 
            className="services-floating-shape services-shape-3"
            style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
            variants={floatingAnimation(2)}
            animate="animate"
          />
          <motion.div 
            className="services-floating-shape services-shape-4"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
            variants={floatingAnimation(0.5)}
            animate="animate"
          />
        </div>

        <motion.div 
          className="services-hero-content"
          variants={fadeInUp}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        >
          <motion.div 
            className="services-hero-badge"
            variants={scaleIn}
          >
            Our Services
          </motion.div>
          
          <motion.h1 
            className="services-hero-title"
            variants={fadeInUp}
          >
            Technology Solutions That
            <motion.span 
              className="services-gradient-text"
              variants={gradientTextAnimation}
              animate="animate"
            >
              Drive Business Forward
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="services-hero-subtitle"
            variants={fadeInUp}
          >
            We combine cutting-edge technology with strategic expertise to deliver 
            innovative solutions that transform businesses and accelerate growth.
          </motion.p>
          
          <motion.div 
            className="services-hero-stats"
            variants={staggerContainer}
            style={{marginLeft:'-0px'}}
          >
            <motion.div 
              className="services-stat-item"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="services-stat-number"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                200+
              </motion.div>
              <div className="services-stat-label">Projects Delivered</div>
            </motion.div>
            
            <motion.div 
              className="services-stat-item"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="services-stat-number"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                50+
              </motion.div>
              <div className="services-stat-label">Happy Clients</div>
            </motion.div>
            
            <motion.div 
              className="services-stat-item"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="services-stat-number"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                98%
              </motion.div>
              <div className="services-stat-label">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="services-scroll-indicator"
          variants={floatingAnimation()}
          animate="animate"
          onClick={() => document.getElementById('services-grid-section').scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <i className="fas fa-chevron-down"></i>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section 
        id="services-grid-section" 
        className="services-grid-section"
        style={{
          background: `linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)`
        }}
      >
        {/* Background Waves */}
        <div className="services-section-wave services-wave-background-1">
          <AdvancedSkyBubbleWave 
            intensity={0.3}
            speed={0.4}
            colorTheme="blue"
            opacity={0.1}
          />
        </div>
        
        <div className="services-section-wave services-wave-background-2">
          <AdvancedSkyBubbleWave 
            intensity={0.4}
            speed={0.6}
            colorTheme="purple"
            opacity={0.08}
          />
        </div>

        <div className="services-section-container">
          <motion.div 
            className="services-section-header"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span 
              className="services-section-label"
              variants={scaleIn}
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              className="services-section-title"
              variants={fadeInUp}
            >
              Comprehensive Technology Services
            </motion.h2>
            <motion.p 
              className="services-section-subtitle"
              variants={fadeInUp}
            >
              From strategy to execution, we provide end-to-end technology solutions 
              that empower businesses to thrive in the digital age.
            </motion.p>
          </motion.div>

          <motion.div 
            className="services-cards-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="services-service-card"
                variants={fadeInUp}
                custom={index}
                whileHover="hover"
                onClick={() => setActiveService(service)}
                style={{
                  '--service-color': service.color
                }}
              >
                <motion.div 
                  className="services-card-content"
                  variants={cardHover}
                >
                  <motion.div 
                    className="services-card-header"
                    variants={iconHover}
                  >
                    <div className="services-service-icon">
                      {service.icon}
                    </div>
                    <motion.div 
                      className="services-service-number"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      0{service.id}
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="services-service-title">{service.title}</h3>
                  <p className="services-service-tagline">{service.tagline}</p>
                  <p className="services-service-description">{service.description}</p>
                  
                  <div className="services-service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="services-feature-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                      >
                        <i className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="services-service-technologies">
                    {service.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="services-tech-tag"
                        variants={techTagAnimation}
                        custom={techIndex}
                        whileHover="hover"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="services-card-footer"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="services-view-details">View Details</span>
                    <motion.span 
                      className="services-arrow-icon"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="services-card-image"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section with Waves */}
      <section className="services-process-section">
        {/* Animated Wave Background */}
        <div className="services-process-wave">
          <AdvancedSkyBubbleWave 
            intensity={0.8}
            speed={0.7}
            colorTheme="gradient"
            opacity={0.15}
          />
        </div>

        <div className="services-section-container">
          <motion.div 
            className="services-section-header"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span 
              className="services-section-label"
              variants={scaleIn}
            >
              Our Process
            </motion.span>
            <motion.h2 
              className="services-section-title"
              variants={fadeInUp}
              style={{color:'black'}}
            >
              How We Deliver Excellence
            </motion.h2>
          </motion.div>

          <div className="services-process-steps">
            {[
              {
                step: 1,
                title: "Discovery & Strategy",
                description: "We deeply understand your business goals and technical requirements",
                icon: "🔍",
                color: "#3B82F6"
              },
              {
                step: 2,
                title: "Design & Planning",
                description: "Create wireframes, prototypes, and detailed project plans",
                icon: "📐",
                color: "#8B5CF6"
              },
              {
                step: 3,
                title: "Development & Testing",
                description: "Agile development with continuous integration and testing",
                icon: "⚙️",
                color: "#10B981"
              },
              {
                step: 4,
                title: "Deployment & Support",
                description: "Seamless deployment and ongoing maintenance support",
                icon: "🚀",
                color: "#F59E0B"
              }
            ].map((step, index) => (
              <motion.div 
                key={step.step}
                className="services-process-step"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className="services-step-number"
                  style={{ background: step.color }}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  {step.icon}
                </motion.div>
                
                <div className="services-step-content">
                  <h3 className="services-step-title">{step.title}</h3>
                  <p className="services-step-description">{step.description}</p>
                </div>
                
                {index < 3 && (
                  <motion.div 
                    className="services-step-connector"
                    animate={{ 
                      width: ['0%', '100%', '0%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Waves */}
      <section className="services-cta-section">
        {/* Multiple Wave Layers */}
        <div className="services-cta-wave-layer services-cta-wave-1">
          <AdvancedSkyBubbleWave 
            intensity={1.2}
            speed={1}
            colorTheme="blue"
            opacity={0.25}
          />
        </div>
        
        <div className="services-cta-wave-layer services-cta-wave-2">
          <AdvancedSkyBubbleWave 
            intensity={0.9}
            speed={0.8}
            colorTheme="purple"
            opacity={0.2}
          />
        </div>
        
        <div className="services-cta-wave-layer services-cta-wave-3">
          <AdvancedSkyBubbleWave 
            intensity={0.6}
            speed={0.6}
            colorTheme="cyan"
            opacity={0.15}
          />
        </div>

        <div className="services-section-container">
          <motion.div 
            className="services-cta-content"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h2 
              className="services-cta-title"
              variants={fadeInUp}
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              className="services-cta-description"
              variants={fadeInUp}
            >
              Let's discuss how our technology solutions can help you achieve 
              your business goals and drive digital transformation.
            </motion.p>
            
            <motion.div 
              className="services-cta-buttons"
              variants={staggerContainer}
            >
              <motion.button 
                className="services-cta-button services-cta-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, -5, 0],
                  boxShadow: [
                    "0 10px 30px rgba(59, 130, 246, 0.2)",
                    "0 15px 40px rgba(59, 130, 246, 0.3)",
                    "0 10px 30px rgba(59, 130, 246, 0.2)"
                  ]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                <i className="fas fa-calendar-check"></i>
                Schedule a Consultation
              </motion.button>
              
              <motion.button 
                className="services-cta-button services-cta-secondary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-file-alt"></i>
                Download Brochure
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div 
            className="services-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
          >
            <motion.div 
              className="services-modal-content"
              variants={detailModalAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              drag
              dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
              dragElastic={0.1}
              style={{
                borderColor: activeService.color,
                background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.98) 100%)`
              }}
            >
              {/* Modal Wave */}
              <div className="services-modal-wave">
                <AdvancedSkyBubbleWave 
                  intensity={0.5}
                  speed={0.4}
                  colorTheme={activeService.color}
                  opacity={0.1}
                />
              </div>

              <motion.button 
                className="services-modal-close"
                onClick={() => setActiveService(null)}
                whileHover={{ rotate: 90, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-times"></i>
              </motion.button>
              
              <div className="services-modal-header">
                <motion.div 
                  className="services-modal-icon"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  style={{ color: activeService.color }}
                >
                  {activeService.icon}
                </motion.div>
                
                <div className="services-modal-title-section">
                  <h2 className="services-modal-title">{activeService.title}</h2>
                  <p className="services-modal-tagline">{activeService.tagline}</p>
                </div>
              </div>
              
              <div className="services-modal-body">
                <div className="services-modal-columns">
                  <div className="services-modal-column">
                    <h3 className="services-section-heading">Overview</h3>
                    <p className="services-modal-description">{activeService.description}</p>
                    
                    <h3 className="services-section-heading">Key Features</h3>
                    <div className="services-features-list">
                      {activeService.features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          className="services-feature-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <i className="fas fa-check" style={{ color: activeService.color }}></i>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="services-modal-column">
                    <h3 className="services-section-heading">Technologies & Tools</h3>
                    <div className="services-technologies-grid">
                      {activeService.technologies.map((tech, index) => (
                        <motion.span 
                          key={index}
                          className="services-tech-badge"
                          style={{ 
                            background: `${activeService.color}20`,
                            borderColor: activeService.color,
                            color: activeService.color
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            background: `${activeService.color}40`
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="services-modal-image">
                      <motion.img 
                        src={activeService.image} 
                        alt={activeService.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="services-modal-footer">
                <motion.button 
                  className="services-modal-action-button"
                  style={{ background: activeService.color }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-comments"></i>
                  Request a Quote
                </motion.button>
                
                <motion.button 
                  className="services-modal-action-button services-outline"
                  style={{ 
                    color: activeService.color,
                    borderColor: activeService.color
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    background: `${activeService.color}20`
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-download"></i>
                  Download Case Study
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;