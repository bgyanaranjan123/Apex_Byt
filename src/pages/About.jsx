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
  FaChevronDown
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AdvancedSkyBubbleWave } from "../components/AdvanceSkyBubbleWave";
import '../css/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      {/* Company Background */}
      <AnimatedSection id="background">
        <div className="about-section-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="about-section-header"
          >
            <span className="about-section-label">Our Story</span>
            <h2 className="about-section-title">Company Background</h2>
            <p className="about-section-subtitle">
              Founded with a vision to bridge the gap between technology innovation and business success
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
                  <FaRocket />
                </div>
                <h3>Our Foundation</h3>
                <p>
                  ApexByte was founded in 2015 with a clear mission: to deliver exceptional 
                  digital transformation and IT talent solutions to businesses worldwide. 
                  What started as a small team of passionate technologists has grown into 
                  a global consulting firm recognized for innovation and excellence.
                </p>
              </div>
              
              <div className="about-content-card">
                <div className="about-card-icon">
                  <FaChartLine />
                </div>
                <h3>Our Growth Journey</h3>
                <p>
                  From our humble beginnings, we've expanded our services across 
                  multiple continents, serving Fortune 500 companies and startups alike. 
                  Our journey is marked by continuous learning, adaptation to emerging 
                  technologies, and unwavering commitment to client success.
                </p>
              </div>
              
              <div className="about-content-card">
                <div className="about-card-icon">
                  <FaGlobeAmericas />
                </div>
                <h3>Global Presence</h3>
                <p>
                  With offices in 12 countries and remote teams across 50+ nations, 
                  we bring diverse perspectives and global best practices to every project. 
                  Our distributed model allows us to tap into the world's best talent 
                  while maintaining local market understanding.
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
                {[2015, 2017, 2019, 2021, 2023].map((year, index) => (
                  <motion.div
                    key={year}
                    className="about-timeline-point"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <div className="about-point-dot"></div>
                    <div className="about-point-year">{year}</div>
                    <div className="about-point-milestone">
                      {index === 0 && 'Founded'}
                      {index === 1 && 'Global Expansion'}
                      {index === 2 && '500+ Projects'}
                      {index === 3 && 'AI Integration'}
                      {index === 4 && 'Industry Leader'}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
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
                To be the global leader in IT consulting and staffing, recognized for 
                transforming businesses through innovative technology solutions and 
                exceptional talent development.
              </p>
              <div className="about-vision-features">
                <div className="about-feature">
                  <FaStar className="about-feature-icon" />
                  <span>Global Leadership</span>
                </div>
                <div className="about-feature">
                  <FaStar className="about-feature-icon" />
                  <span>Innovation Excellence</span>
                </div>
                <div className="about-feature">
                  <FaStar className="about-feature-icon" />
                  <span>Industry Recognition</span>
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
                To provide top-tier technology and human resource solutions that accelerate 
                business growth, foster innovation, and create lasting value for our clients, 
                partners, and employees.
              </p>
              <div className="about-mission-objectives">
                <div className="about-objective">
                  <div className="about-objective-number">01</div>
                  <div className="about-objective-text">Accelerate Business Growth</div>
                </div>
                <div className="about-objective">
                  <div className="about-objective-number">02</div>
                  <div className="about-objective-text">Foster Innovation Culture</div>
                </div>
                <div className="about-objective">
                  <div className="about-objective-number">03</div>
                  <div className="about-objective-text">Deliver Lasting Value</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <AnimatedSection id="values">
        <div className="about-section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-section-header"
          >
            <span className="about-section-label">What We Stand For</span>
            <h2 className="about-section-title">Our Core Values</h2>
            <p className="about-section-subtitle">
              The principles that guide every decision and action at ApexByte
            </p>
          </motion.div>
          
          <div className="about-values-grid">
            {valuesData.map((value, index) => (
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

      {/* Leadership Team */}
      <section className="about-leadership-section">
        <div className="about-section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-section-header"
          >
            <span className="about-section-label">Meet Our Leaders</span>
            <h2 className="about-section-title">Leadership Team</h2>
            <p className="about-section-subtitle">
              Visionary leaders driving innovation and growth
            </p>
          </motion.div>
          
          <div className="about-leadership-grid">
            {leadershipData.map((leader, index) => (
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
                      <a href="#" className="about-social-link">in</a>
                      <a href="#" className="about-social-link">tw</a>
                      <a href="#" className="about-social-link">li</a>
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

      {/* Why Choose ApexByte */}
      <section className="about-why-choose-section">
        <div className="about-section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-section-header"
          >
            <span className="about-section-label">Our Advantages</span>
            <h2 className="about-section-title">Why Choose ApexByte</h2>
            <p className="about-section-subtitle">
              Discover what sets us apart in the competitive landscape
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
                <h3>Tailored Solutions for Every Business</h3>
                <p>
                  We don't believe in one-size-fits-all solutions. Every client 
                  receives a customized strategy designed to address their unique 
                  challenges and maximize their specific opportunities.
                </p>
                
                <div className="about-advantage-stats">
                  <div className="about-advantage-stat">
                    <div className="about-stat-number">100%</div>
                    <div className="about-stat-label">Custom Solutions</div>
                  </div>
                  <div className="about-advantage-stat">
                    <div className="about-stat-number">24/7</div>
                    <div className="about-stat-label">Support</div>
                  </div>
                  <div className="about-advantage-stat">
                    <div className="about-stat-number">Agile</div>
                    <div className="about-stat-label">Methodology</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="about-advantages-right">
              <div className="about-advantages-grid">
                {advantagesData.map((advantage, index) => (
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
            <h3>Certified Professionals</h3>
            <div className="about-certifications">
              <span className="about-certification-badge">AWS</span>
              <span className="about-certification-badge">Azure</span>
              <span className="about-certification-badge">Google Cloud</span>
              <span className="about-certification-badge">PMP</span>
              <span className="about-certification-badge">Scrum</span>
              <span className="about-certification-badge">ITIL</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              digital transformation journey. Let's build something amazing together.
            </p>
            <div className="about-cta-buttons">
              <motion.button
                className="about-cta-button about-cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="about-cta-button about-cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </motion.button>
            </div>
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

// Data
const valuesData = [
  {
    id: 1,
    icon: <FaCogs />,
    title: 'Innovation',
    description: 'Continuously pushing boundaries and embracing cutting-edge technologies to deliver forward-thinking solutions.',
    pillars: ['Technology', 'Creativity', 'Future-ready']
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: 'Integrity',
    description: 'Upholding the highest ethical standards in all our dealings, building trust through transparency and honesty.',
    pillars: ['Ethics', 'Trust', 'Transparency']
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: 'Collaboration',
    description: 'Fostering strong partnerships and teamwork to achieve shared success and exceed expectations.',
    pillars: ['Teamwork', 'Partnership', 'Unity']
  },
  {
    id: 4,
    icon: <FaAward />,
    title: 'Quality',
    description: 'Delivering excellence in every project with meticulous attention to detail and uncompromising standards.',
    pillars: ['Excellence', 'Precision', 'Standards']
  },
  {
    id: 5,
    icon: <FaHeart />,
    title: 'Excellence',
    description: 'Striving for the highest level of performance and continuously improving our services and solutions.',
    pillars: ['Perfection', 'Growth', 'Mastery']
  }
];

const leadershipData = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: 'CEO & Founder',
    bio: '20+ years in tech leadership, visionary entrepreneur with 5 successful exits.',
    expertise: ['Strategy', 'AI/ML', 'Scaling'],
    image: '/img.jpg'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'CTO',
    bio: 'Former Google engineer, specializes in scalable architecture and cloud solutions.',
    expertise: ['Cloud', 'DevOps', 'Security'],
    image: '/img1.jpg'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Head of Talent',
    bio: 'HR innovator with expertise in building world-class remote engineering teams.',
    expertise: ['Talent', 'Culture', 'HR Tech'],
    image: '/img3.jpg'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'VP of Engineering',
    bio: 'Ex-Microsoft technical lead, expert in enterprise digital transformation.',
    expertise: ['Enterprise', 'Transformation', 'Agile'],
    image: '/img4.jpg'
  }
];

const advantagesData = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: 'Industry Expertise',
    description: 'Deep domain knowledge across multiple industries including finance, healthcare, and e-commerce.'
  },
  {
    id: 2,
    icon: <FaCode />,
    title: 'Agile Methodology',
    description: 'Flexible, iterative approach ensuring rapid delivery and continuous improvement.'
  },
  {
    id: 3,
    icon: <FaNetworkWired />,
    title: 'Global Talent Pool',
    description: 'Access to top 1% of tech talent from around the world, rigorously vetted and certified.'
  },
  {
    id: 4,
    icon: <FaHandshake />,
    title: 'Partnership Model',
    description: 'We work as an extension of your team, not just a vendor, ensuring shared success.'
  }
];

export default About;