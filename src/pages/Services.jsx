import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { AdvancedSkyBubbleWave } from '../components/AdvanceSkyBubbleWave';
import '../css/Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [waveIntensity, setWaveIntensity] = useState(0.5);
  const navigate = useNavigate(); // Navigation hook
  
  // Updated Services data with new content
  const services = [
    {
      id: 1,
      title: "Software Development",
      tagline: "Transform Vision into Powerful Digital Solutions",
      description: "We architect, design, and build custom software applications that solve complex business challenges. Our full-cycle development process ensures scalable, secure, and high-performance solutions that drive operational efficiency and competitive advantage.",
      features: [
        "Enterprise Application Development",
        "Cloud-native Solutions Architecture",
        "Microservices & API Integration",
        // "Legacy System Modernization",
        // "Real-time Analytics Platforms",
        // "DevOps Implementation"
      ],
      technologies: ["React/Next.js", "Node.js/Python", ".NET Core", "Java/Spring", "Docker/K8s", "AWS/Azure", "PostgreSQL/MongoDB"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#3B82F6",
      icon: "💻"
    },
    {
      id: 2,
      title: "Mobile App Development",
      tagline: "Create Immersive Cross-Platform Experiences",
      description: "Build engaging mobile applications that connect with users across iOS and Android platforms. Our mobile solutions combine intuitive design with robust functionality to deliver exceptional user experiences and drive business growth.",
      features: [
        "Native iOS & Android Development",
        "Cross-platform React Native/Flutter",
        "UI/UX Mobile-First Design",
        // "App Store Optimization Strategy",
        // "Push Notification Systems",
        // "Mobile Analytics Integration"
      ],
      technologies: ["React Native", "Flutter", "Swift/Kotlin", "Firebase", "GraphQL", "Redux", "CI/CD Pipelines"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#8B5CF6",
      icon: "📱"
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      tagline: "Accelerate Innovation with Scalable Cloud Infrastructure",
      description: "Transform your IT operations with our comprehensive cloud and DevOps services. We design, implement, and manage secure cloud environments that enable rapid deployment, scalability, and operational excellence.",
      features: [
        "Cloud Migration & Strategy",
        "CI/CD Pipeline Implementation",
        "Infrastructure as Code (IaC)",
        // "Container Orchestration",
        // "Monitoring & Performance Optimization",
        // "Security & Compliance Management"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins/GitLab"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#10B981",
      icon: "☁️"
    },
    {
      id: 4,
      title: "UI/UX Design",
      tagline: "Craft Intuitive Digital Experiences That Convert",
      description: "Design beautiful, functional interfaces that users love. Our human-centered design approach focuses on creating seamless experiences that drive engagement, satisfaction, and business results.",
      features: [
        "User Research & Persona Development",
        "Wireframing & Interactive Prototyping",
        "Responsive Web & Mobile Design",
        // "Design Systems & Component Libraries",
        // "Accessibility & Inclusive Design",
        // "Usability Testing & Optimization"
      ],
      technologies: ["Figma", "Sketch", "Adobe XD", "Webflow", "Three.js", "GSAP", "Design Thinking"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#F59E0B",
      icon: "🎨"
    },
    {
      id: 5,
      title: "IT Consulting",
      tagline: "Strategic Technology Guidance for Digital Transformation",
      description: "Navigate your digital transformation journey with expert guidance. We provide strategic IT consulting services that align technology with business objectives, optimize operations, and drive innovation.",
      features: [
        "Digital Transformation Strategy",
        "Technology Architecture Review",
        "IT Infrastructure Optimization",
        // "Cybersecurity & Risk Assessment",
        // "Cost Optimization Analysis",
        // "Digital Roadmap Planning"
      ],
      technologies: ["TOGAF", "ITIL", "Agile/Scrum", "Cybersecurity", "Cloud Strategy", "Data Governance", "Business Analysis"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#EF4444",
      icon: "📊"
    },
    {
      id: 6,
      title: "Staffing & Resource Augmentation",
      tagline: "Build Your Elite Technology Team with Global Talent",
      description: "Scale your development capabilities with pre-vetted technology experts. Our staffing solutions provide you with dedicated professionals who seamlessly integrate with your team and culture.",
      features: [
        "Dedicated Developer Teams",
        "Technical Talent Acquisition",
        "Offshore Development Centers",
        // "Comprehensive Skill Assessment",
        // "Team Integration & Management",
        // "Performance Monitoring"
      ],
      technologies: ["Technical Screening", "Team Building", "Agile Coaching", "Performance Metrics", "Retention Strategies", "Global Talent Pool"],
      image: "https://images.unsplash.com/photo-1551836026-d5c2c5af91f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "#6366F1",
      icon: "👥"
    }
  ];

  // Handle navigation for CTA buttons
  const handleScheduleConsultation = () => {
    navigate('/contact?type=consultation');
  };

  const handleDownloadBrochure = () => {
    // In a real application, this would trigger a file download
    // For now, we'll simulate it
    const link = document.createElement('a');
    link.href = '/brochure.pdf'; // Your brochure file path
    link.download = 'ApexByte-Services-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRequestQuote = (serviceName) => {
    navigate(`/contact?type=quote&service=${encodeURIComponent(serviceName)}`);
  };

  // Handle mouse move for parallax effect
  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) * 0.01;
    const y = (e.clientY - window.innerHeight / 2) * 0.01;
    setMousePosition({ x, y });
    
    const speed = Math.sqrt(x * x + y * y);
    setWaveIntensity(Math.min(1, 0.5 + speed * 2));
  };

  // Handle scroll for wave effects
  const handleScroll = () => {
    const scroll = window.scrollY;
    setScrollY(scroll);
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
            Comprehensive Technology Solutions
          </motion.div>
          
          <motion.h1 
            className="services-hero-title"
            variants={fadeInUp}
          >
            Accelerate Digital Transformation with
            <motion.span 
              className="services-gradient-text"
              variants={gradientTextAnimation}
              animate="animate"
            >
              Expert Technology Services
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="services-hero-subtitle"
            variants={fadeInUp}
          >
            We deliver end-to-end technology solutions that drive innovation, optimize operations, 
            and create sustainable competitive advantages for businesses of all sizes across industries.
          </motion.p>
          
          <motion.div 
            className="services-hero-stats"
            variants={staggerContainer}
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
                250+
              </motion.div>
              <div className="services-stat-label">Successful Projects</div>
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
                75+
              </motion.div>
              <div className="services-stat-label">Enterprise Clients</div>
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
                99%
              </motion.div>
              <div className="services-stat-label">Client Retention Rate</div>
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
              Our Service Portfolio
            </motion.span>
            <motion.h2 
              className="services-section-title"
              variants={fadeInUp}
            >
              End-to-End Technology Solutions
            </motion.h2>
            <motion.p 
              className="services-section-subtitle"
              variants={fadeInUp}
            >
              From strategic consulting to technical implementation, we provide comprehensive 
              services that address your unique business challenges and growth opportunities.
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
                  <p className="services-service-description">{service.description.substring(0, 120)}...</p>
                  
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
                    <span className="services-view-details">Explore Service Details</span>
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
              Our Methodology
            </motion.span>
            <motion.h2 
              className="services-section-title"
              variants={fadeInUp}
              style={{color:'white'}}
            >
              A Structured Approach to Success
            </motion.h2>
          </motion.div>

          <div className="services-process-steps">
            {[
              {
                step: 1,
                title: "Discovery & Analysis",
                description: "We conduct comprehensive requirement analysis, stakeholder interviews, and market research to understand your business objectives and technical needs.",
                icon: "🔍",
                color: "#3B82F6"
              },
              {
                step: 2,
                title: "Strategy & Planning",
                description: "Develop detailed project roadmaps, technical specifications, and success metrics aligned with your business goals and timeline.",
                icon: "📐",
                color: "#8B5CF6"
              },
              {
                step: 3,
                title: "Design & Development",
                description: "Agile development cycles with continuous feedback, rigorous testing, and quality assurance at every stage of the build process.",
                icon: "⚙️",
                color: "#10B981"
              },
              {
                step: 4,
                title: "Deployment & Optimization",
                description: "Seamless deployment with comprehensive documentation, training, and ongoing support for continuous improvement and scaling.",
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
                
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Waves - FIXED NAVIGATION */}
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
              Ready to Elevate Your Technology Strategy?
            </motion.h2>
            
            <motion.p 
              className="services-cta-description"
              variants={fadeInUp}
            >
              Connect with our technology experts to discuss how our solutions can accelerate 
              your digital transformation, optimize operations, and drive sustainable growth.
            </motion.p>
            
            <motion.div 
              className="services-cta-buttons"
              variants={staggerContainer}
            >
              <motion.button 
                className="services-cta-button services-cta-primary"
                onClick={handleScheduleConsultation}
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
                Schedule Technical Consultation
              </motion.button>
              
              <motion.button 
                className="services-cta-button services-cta-secondary"
                onClick={handleDownloadBrochure}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-file-alt"></i>
                Download Service Catalog
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="services-cta-contact"
              variants={fadeInUp}
            >
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
                    <h3 className="services-section-heading">Service Overview</h3>
                    <p className="services-modal-description">{activeService.description}</p>
                    
                    <h3 className="services-section-heading">Key Features & Capabilities</h3>
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
                    <h3 className="services-section-heading">Technology Stack</h3>
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
                  onClick={() => handleRequestQuote(activeService.title)}
                >
                  <i className="fas fa-comments"></i>
                  Request Custom Quote
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
                  onClick={handleDownloadBrochure}
                >
                  <i className="fas fa-download"></i>
                  Download Service Details
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