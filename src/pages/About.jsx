import React, { useEffect, useState } from 'react';
import { 
  FaRocket, 
  FaLightbulb, 
  FaHandshake, 
  FaAward, 
  FaUsers, 
  FaGlobeAmericas,
  FaCogs,
  FaHeart,
  FaStar,
  FaChartLine,
  FaShieldAlt,
  FaUserTie,
  FaCode,
  FaNetworkWired,
  FaChevronDown,
  FaBriefcase,
  FaGraduationCap,
  FaDollarSign,
  FaBuilding
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { AdvancedSkyBubbleWave } from "../components/AdvanceSkyBubbleWave";
import '../css/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle navigation for CTA buttons
  const handleStartJourney = () => {
    navigate('/contact');
  };

  const handleScheduleConsultation = () => {
    // Navigate to contact page with consultation parameter
    navigate('/contact?type=consultation');
    // Alternatively, you could open a modal or redirect to a specific team page
    // window.location.href = '/team/consultation';
  };

  const handleMeetTeam = () => {
  const section = document.getElementById("leadership-team");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};



  return (
    
    <div className="about-page-container">
      <div className="about-hero-wave-container">
        <AdvancedSkyBubbleWave 
          intensity={1} 
          speed={1} 
          colorTheme="blue"
        />
      </div>
      
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <div className="about-background-animation">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="about-floating-shape"
                initial={{ y: 100, opacity: 0 }}
                animate={{ 
                  y: [0, -50, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 30}px`,
                  height: `${20 + Math.random() * 30}px`,
                  background: `linear-gradient(135deg, 
                    rgba(37, 99, 235, ${0.3 + Math.random() * 0.2}), 
                    rgba(124, 58, 237, ${0.3 + Math.random() * 0.2}))`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="about-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-hero-text"
          >
            <h1 className="about-hero-title">
              <h2>Shaping the Future of</h2>
              <span className="about-gradient-text"> Technology & Talent</span>
            </h1>
            <p className="about-hero-subtitle">
              Where Innovation Meets Expertise to Drive Digital Transformation
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="about-hero-stats"
          >
            <div className="about-stat-item">
              <motion.div
                className="about-stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                500+
              </motion.div>
              <div className="about-stat-label">Projects Delivered</div>
            </div>
            <div className="about-stat-item">
              <motion.div
                className="about-stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                50+
              </motion.div>
              <div className="about-stat-label">Countries Served</div>
            </div>
            <div className="about-stat-item">
              <motion.div
                className="about-stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                98%
              </motion.div>
              <div className="about-stat-label">Client Satisfaction</div>
            </div>
            <div className="about-stat-item">
              <motion.div
                className="about-stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                200+
              </motion.div>
              <div className="about-stat-label">Expert Team</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="about-scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaChevronDown />
        </motion.div>
      </section>

      {/* Company Background - UPDATED CONTENT */}
      <AnimatedSection id="background">
        <div className="about-section-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="about-section-header"
          >
            <span className="about-section-label">Our Journey</span>
            <h2 className="about-section-title">Company Background</h2>
            <p className="about-section-subtitle">
              From Vision to Reality: Our Evolution in Technology and Talent Solutions
            </p>
          </motion.div>
          
          <div className="about-background-content">
            <motion.div
              className="about-background-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-content-card">
                <div className="about-card-icon">
                  <FaBriefcase />
                </div>
                <h3>Our Founding Vision</h3>
                <p>
                  ApexByte IT Consulting & Staffing was established in 2018 with a clear mission: to bridge 
                  the gap between innovative technology solutions and exceptional talent. Recognizing the 
                  growing need for specialized IT expertise in a rapidly evolving digital landscape, we set 
                  out to create a platform that connects businesses with top-tier technology professionals.
                </p>
              </div>
              
              <div className="about-content-card">
                <div className="about-card-icon">
                  <FaChartLine />
                </div>
                <h3>Strategic Growth & Expansion</h3>
                <p>
                  Starting as a boutique IT staffing firm, we quickly expanded our services to include 
                  comprehensive IT consulting, digital transformation solutions, and managed services. 
                  Our growth has been fueled by our commitment to quality, client satisfaction, and 
                  staying ahead of technological trends. Today, we serve clients across multiple industries 
                  and continents.
                </p>
              </div>
              
              <div className="about-content-card">
                <div className="about-card-icon">
                  <FaGraduationCap />
                </div>
                <h3>Industry Recognition & Awards</h3>
                <p>
                  Our dedication to excellence has earned us recognition as one of the fastest-growing 
                  IT consulting firms. We've received multiple industry awards for innovation in staffing 
                  solutions and have been featured in leading technology publications for our groundbreaking 
                  approaches to digital transformation and talent development.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="about-background-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="about-timeline">
                {[
                  { year: 2018, milestone: 'Company Founded' },
                  { year: 2019, milestone: 'First 100 Clients' },
                  { year: 2020, milestone: 'Digital Transformation Division' },
                  { year: 2021, milestone: 'International Expansion' },
                  { year: 2022, milestone: 'AI & ML Solutions' },
                  { year: 2023, milestone: 'Industry Awards' }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="about-timeline-point"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="about-point-dot"></div>
                    <div className="about-point-year">{item.year}</div>
                    <div className="about-point-milestone">
                      {item.milestone}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission - UPDATED CONTENT */}
      <section className="about-vision-mission-section">
        <div className="about-section-container">
          <div className="about-vision-mission-grid">
            <motion.div
              className="about-vision-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-card-header">
                <div className="about-card-icon-large">
                  <FaLightbulb />
                </div>
                <h2 className="about-card-title">Our Vision</h2>
              </div>
              <p className="about-card-content">
                To be the most trusted global partner for IT consulting and staffing solutions, 
                recognized for transforming businesses through innovative technology and exceptional 
                talent. We envision a future where every organization, regardless of size or industry, 
                has access to the technology expertise needed to thrive in the digital age.
              </p>
              <div className="about-vision-features">
                <div className="about-feature">
                  <FaStar className="about-feature-icon" />
                  <span>Global Technology Leadership</span>
                </div>
                <div className="about-feature">
                  <FaStar className="about-feature-icon" />
                  <span>Innovation Excellence</span>
                </div>
                <div className="about-feature">
                  <FaStar className="about-feature-icon" />
                  <span>Trusted Partnership</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="about-mission-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-card-header">
                <div className="about-card-icon-large">
                  <FaRocket />
                </div>
                <h2 className="about-card-title">Our Mission</h2>
              </div>
              <p className="about-card-content">
                To provide comprehensive IT consulting and staffing solutions that accelerate 
                digital transformation, drive business growth, and create lasting value. We 
                are committed to delivering excellence through customized strategies, cutting-edge 
                technology, and world-class talent that empowers organizations to achieve their 
                full potential in an increasingly digital world.
              </p>
              <div className="about-mission-objectives">
                <div className="about-objective">
                  <div className="about-objective-number">01</div>
                  <div className="about-objective-text">Accelerate Digital Transformation</div>
                </div>
                <div className="about-objective">
                  <div className="about-objective-number">02</div>
                  <div className="about-objective-text">Drive Sustainable Business Growth</div>
                </div>
                <div className="about-objective">
                  <div className="about-objective-number">03</div>
                  <div className="about-objective-text">Deliver Lasting Client Value</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - UPDATED CONTENT */}
      <AnimatedSection id="values">
        <div className="about-section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-section-header"
          >
            <span className="about-section-label">Our Foundation</span>
            <h2 className="about-section-title">Our Core Values</h2>
            <p className="about-section-subtitle">
              The principles that guide every decision, action, and partnership at ApexByte
            </p>
          </motion.div>
          
          <div className="about-values-grid">
            {[
              {
                id: 1,
                icon: <FaShieldAlt />,
                title: 'Integrity & Trust',
                description: 'We build lasting relationships based on honesty, transparency, and ethical practices. Every promise made is a promise kept, and we maintain the highest standards of professionalism in all our interactions.',
                pillars: ['Ethical Excellence', 'Transparency', 'Reliability']
              },
              {
                id: 2,
                icon: <FaUsers />,
                title: 'Client-Centric Approach',
                description: 'Our clients success is our success. We listen carefully, understand deeply, and deliver solutions that not only meet but exceed expectations. Every project is approached with a partnership mindset.',
                pillars: ['Partnership', 'Custom Solutions', 'Exceeding Expectations']
              },
              {
                id: 3,
                icon: <FaCogs />,
                title: 'Innovation & Excellence',
                description: 'We embrace change and continuously seek better ways to solve problems. Our commitment to excellence drives us to deliver cutting-edge solutions that provide tangible business value.',
                pillars: ['Continuous Improvement', 'Cutting-edge Technology', 'Business Value']
              },
              {
                id: 4,
                icon: <FaHandshake />,
                title: 'Collaboration & Teamwork',
                description: 'Great things happen when talented people work together. We foster a collaborative environment where diverse perspectives are valued, and collective intelligence leads to breakthrough solutions.',
                pillars: ['Team Synergy', 'Diversity', 'Collective Intelligence']
              },
              {
                id: 5,
                icon: <FaAward />,
                title: 'Quality & Precision',
                description: 'From talent selection to solution delivery, we maintain uncompromising standards of quality. Our meticulous attention to detail ensures that every deliverable meets the highest industry standards.',
                pillars: ['Attention to Detail', 'Industry Standards', 'Uncompromising Quality']
              },
              {
                id: 6,
                icon: <FaDollarSign />,
                title: 'Value Creation',
                description: 'We measure our success by the value we create for our clients. Every solution is designed to deliver measurable ROI, operational efficiency, and competitive advantage.',
                pillars: ['ROI Focus', 'Operational Efficiency', 'Competitive Advantage']
              }
            ].map((value, index) => (
              <motion.div
                key={value.id}
                className="about-value-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="about-value-icon-wrapper"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
                <div className="about-value-pillars">
                  {value.pillars.map((pillar, i) => (
                    <span key={i} className="about-pillar">{pillar}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Leadership Team - UPDATED CONTENT */}
<section id="leadership-team" className="about-leadership-section">
        <div className="about-section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-section-header"
          >
            <span className="about-section-label">Meet Our Experts</span>
            <h2 className="about-section-title">Leadership Team</h2>
            <p className="about-section-subtitle">
              Visionary leaders with decades of combined experience in technology and talent solutions
            </p>
          </motion.div>
          
          <div className="about-leadership-grid">
            {[
              {
                id: 1,
                name: 'Michael Rodriguez',
                role: 'CEO & Founder',
                bio: '20+ years in technology leadership with extensive experience in IT consulting and digital transformation. Founded ApexByte with a vision to revolutionize how businesses access technology talent.',
                expertise: ['Digital Strategy', 'Business Transformation', 'Leadership'],
                image: '/img.jpg',
                linkedin: '#',
                twitter: '#'
              },
              {
                id: 2,
                name: 'Sarah Chen',
                role: 'CTO',
                bio: 'Former Google engineering lead with expertise in scalable architecture, cloud solutions, and AI/ML. Drives technological innovation and ensures our solutions remain at the cutting edge.',
                expertise: ['Cloud Architecture', 'AI/ML', 'Technical Innovation'],
                image: '/img1.jpg',
                linkedin: '#',
                twitter: '#'
              },
              {
                id: 3,
                name: 'David Thompson',
                role: 'Head of Staffing Solutions',
                bio: 'HR technology specialist with 15 years experience in talent acquisition and management. Pioneered our proprietary talent matching algorithm that ensures perfect client-talent fit.',
                expertise: ['Talent Strategy', 'HR Technology', 'Client Relations'],
                image: '/img3.jpg',
                linkedin: '#',
                twitter: '#'
              },
              {
                id: 4,
                name: 'Jennifer Lee',
                role: 'VP of Consulting Services',
                bio: 'Digital transformation expert with background in enterprise solutions at Fortune 500 companies. Leads our consulting division in delivering measurable business outcomes.',
                expertise: ['Digital Transformation', 'Enterprise Solutions', 'Business Outcomes'],
                image: '/img4.jpg',
                linkedin: '#',
                twitter: '#'
              }
            ].map((leader, index) => (
              <motion.div
                key={leader.id}
                className="about-leader-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="about-leader-image">
                  <img src={leader.image} alt={leader.name} />
                  <div className="about-leader-overlay">
                    <div className="about-social-links">
                      <a href={leader.linkedin} className="about-social-link" target="_blank" rel="noopener noreferrer">in</a>
                      <a href={leader.twitter} className="about-social-link" target="_blank" rel="noopener noreferrer">tw</a>
                    </div>
                  </div>
                </div>
                <div className="about-leader-info">
                  <h3 className="about-leader-name">{leader.name}</h3>
                  <p className="about-leader-role">{leader.role}</p>
                  <p className="about-leader-bio">{leader.bio}</p>
                  <div className="about-leader-expertise">
                    {leader.expertise.map((skill, i) => (
                      <span key={i} className="about-expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ApexByte - UPDATED CONTENT */}
      <section className="about-why-choose-section">
        <div className="about-section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-section-header"
          >
            <span className="about-section-label">Our Differentiators</span>
            <h2 className="about-section-title">Why Choose ApexByte</h2>
            <p className="about-section-subtitle">
              Discover what makes us the preferred partner for IT consulting and staffing solutions
            </p>
          </motion.div>
          
          <div className="about-advantages-container">
            <div className="about-advantages-left">
              <motion.div
                className="about-advantage-main"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Comprehensive IT Solutions Partner</h3>
                <p>
                  We offer end-to-end IT consulting and staffing services designed to address your 
                  unique business challenges. Unlike traditional staffing agencies or consulting firms, 
                  we provide integrated solutions that combine strategic consulting with exceptional 
                  talent placement.
                </p>
                
                <div className="about-advantage-stats">
                  <div className="about-advantage-stat">
                    <div className="about-stat-number">360°</div>
                    <div className="about-stat-label">Holistic Approach</div>
                  </div>
                  <div className="about-advantage-stat">
                    <div className="about-stat-number">95%</div>
                    <div className="about-stat-label">Retention Rate</div>
                  </div>
                  <div className="about-advantage-stat">
                    <div className="about-stat-number">48h</div>
                    <div className="about-stat-label">Rapid Deployment</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="about-advantages-right">
              <div className="about-advantages-grid">
                {[
                  {
                    id: 1,
                    icon: <FaBuilding />,
                    title: 'Industry Specialization',
                    description: 'Deep expertise across multiple sectors including finance, healthcare, retail, and manufacturing with tailored solutions for each industry.'
                  },
                  {
                    id: 2,
                    icon: <FaNetworkWired />,
                    title: 'Global Talent Network',
                    description: 'Access to vetted technology professionals from around the world, matched through our intelligent talent-matching platform.'
                  },
                  {
                    id: 3,
                    icon: <FaChartLine />,
                    title: 'Proven ROI',
                    description: 'Track record of delivering measurable business outcomes and significant ROI through optimized technology investments and talent solutions.'
                  },
                  {
                    id: 4,
                    icon: <FaShieldAlt />,
                    title: 'Risk Mitigation',
                    description: 'Comprehensive screening, continuous performance monitoring, and replacement guarantees to ensure project success and minimize risk.'
                  },
                  {
                    id: 5,
                    icon: <FaGraduationCap />,
                    title: 'Continuous Learning',
                    description: 'Regular upskilling programs for our consultants to ensure they stay current with the latest technologies and industry best practices.'
                  },
                  {
                    id: 6,
                    icon: <FaHandshake />,
                    title: 'Long-term Partnership',
                    description: 'We view every engagement as a long-term partnership, committed to your sustained success beyond project completion.'
                  }
                ].map((advantage, index) => (
                  <motion.div
                    key={advantage.id}
                    className="about-advantage-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="about-advantage-icon">
                      {advantage.icon}
                    </div>
                    <h4>{advantage.title}</h4>
                    <p>{advantage.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div
            className="about-certification-banner"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Certifications & Partnerships</h3>
            <div className="about-certifications">
              <span className="about-certification-badge">AWS Partner</span>
              <span className="about-certification-badge">Microsoft Gold</span>
              <span className="about-certification-badge">Google Cloud</span>
              <span className="about-certification-badge">PMP Certified</span>
              <span className="about-certification-badge">Scrum Alliance</span>
              <span className="about-certification-badge">ITIL v4</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - FIXED NAVIGATION */}
      <motion.section
        className="about-cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-section-container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Transform Your Business?</h2>
            <p className="about-cta-description">
              Join hundreds of successful companies who trust ApexByte for their 
              digital transformation and staffing needs. Let's build something amazing together.
            </p>
            <div className="about-cta-buttons">
              <motion.button
                className="about-cta-button about-cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartJourney}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="about-cta-button about-cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScheduleConsultation}
              >
                Schedule a Consultation
              </motion.button>
            <motion.button
  className="about-cta-button about-cta-tertiary"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleMeetTeam}
>
  Meet Our Team
</motion.button>

            </div>
            <p className="about-cta-note">
              Or contact us directly at <a href="mailto:sales@apexbyteit.com">sales@apexbyteit.com</a> | <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

// Reusable Animated Section Component
const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="about-animated-section"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default About;