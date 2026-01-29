import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-router-dom";
import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaUser, 
  FaPaperPlane,
  FaBuilding,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaCheckCircle,
  FaMapPin,
  FaLocationArrow,
  FaChevronDown,
  FaQuestionCircle
} from "react-icons/fa";
import "../css/Contact.css";

// Sample images - replace with your actual images
const contactImage = "/img7.jpg";
const mapImage = "/map.jpg";
const teamImage = "/team.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // FAQ Data
  const faqData = [
    {
      question: "What is your typical response time?",
      answer: "We respond to all inquiries within 2 hours during business hours (9 AM - 6 PM PST) and within 24 hours maximum. For urgent matters, please use our emergency support line available 24/7.",
      category: "Support"
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 emergency support for critical issues. Regular support is available during business hours. Our emergency line is +1 (555) 999-8888 for immediate assistance.",
      category: "Support"
    },
    {
      question: "How can I schedule a consultation?",
      answer: "You can schedule a free consultation by filling out our contact form, calling our office directly, or booking through our online calendar. We'll get back to you within 24 hours to confirm the appointment.",
      category: "Consultation"
    },
    {
      question: "What industries do you serve?",
      answer: "We serve multiple industries including finance, healthcare, retail, education, manufacturing, logistics, and entertainment. Our solutions are tailored to meet industry-specific compliance and regulatory requirements.",
      category: "Services"
    },
    {
      question: "What information should I provide when contacting you?",
      answer: "For faster response, please include: your name, company, project requirements, budget range, timeline, and preferred contact method. The more details you provide, the better we can assist you.",
      category: "General"
    },
    {
      question: "Can I visit your offices without an appointment?",
      answer: "We recommend scheduling an appointment beforehand to ensure availability of our team members. Walk-ins are welcome, but may require waiting time. Contact us to schedule your visit.",
      category: "Visits"
    }
  ];

  // Company branches data
  

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-hero-text"
            >
              <h1 className="contact-title">Get in Touch With Us</h1>
              <p className="contact-subtitle">
                We're here to help you transform your business with cutting-edge technology solutions. 
                Reach out to us for any inquiries, partnerships, or project discussions.
              </p>
              <div className="contact-stats">
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2h</div>
                  <div className="stat-label">Avg. Response Time</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-hero-image"
            >
              <img src={contactImage} alt="Contact Us" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <FaPaperPlane className="overlay-icon" />
                  <h3 style={{fontSize:'2.2rem'}}>Let's Start Your Project</h3>
                  <p style={{fontSize:'1.2rem'}}>Get a free consultation today</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Left Side - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-info-section"
            >
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <h2>Contact Information</h2>
                  <p>Say something to start a live chat!</p>
                </div>

                {/* Contact Details */}
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="detail-icon">
                      <FaPhone />
                    </div>
                    <div className="detail-content">
                      <h4>Phone Number</h4>
                      <p>+1 (555) 123-4567</p>
                      <p className="detail-sub" style={{color:'white'}}>Monday to Friday, 9am to 7pm</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon">
                      <FaEnvelope />
                    </div>
                    <div className="detail-content">
                      <h4>Email Address</h4>
                      <Link to="mailto:hr@apexbyteit.com" style={{color:'white', textDecoration:'none'}}><p>hr@apexbyteit.com</p></Link>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="detail-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="detail-content">
                      <h4>Office Address</h4>
                      <p>Bhubneswar , Odisha</p>
                    </div>
                  </div>

                  
                </div>

                {/* Social Media */}
                <div className="contact-social">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <FaFacebook />
                    </a>
                    <a href="#" className="social-icon">
                      <FaTwitter />
                    </a>
                    <a href="#" className="social-icon">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="social-icon">
                      <FaInstagram />
                    </a>
                    <a href="#" className="social-icon">
                      <FaYoutube />
                    </a>
                  </div>
                </div>

                {/* Emergency Contact */}
                {/* <div className="emergency-contact">
                  <div className="emergency-icon">
                    <FaPhone />
                  </div>
                  <div className="emergency-content">
                    <h4>Emergency Support</h4>
                    <p>+1 (555) 999-8888</p>
                    <small>Available 24/7 for critical issues</small>
                  </div>
                </div> */}
              </div>

              {/* Company Image */}
             
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-form-section"
            >
              <div className="contact-form-card">
                <div className="form-header">
                  <h2>Send us a Message</h2>
                </div>

                {isSubmitted ? (
                  <div className="success-message">
                    <FaCheckCircle className="success-icon" />
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">
                        <FaUser className="input-icon" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">
                          <FaEnvelope className="input-icon" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">
                          <FaPhone className="input-icon" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">
                        <FaPaperPlane className="input-icon" />
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="career">Career Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows="6"
                        required
                      />
                    </div>

                    <div className="form-footer">
                      <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Send Message
                          </>
                        )}
                      </button>
                     
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      

      {/* Global Branches Section */}
      {/* <section className="branches-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Global Offices</h2>
            <p>Connect with our team worldwide</p>
          </div>
          
          <div className="branches-grid">
            {branches.map(branch => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: branch.id * 0.1 }}
                viewport={{ once: true }}
                className="branch-card"
              >
                <div className="branch-image">
                  <img src={branch.image} alt={`${branch.city} Office`} />
                  <div className="branch-badge">
                    <FaBuilding />
                    <span>Head Office</span>
                  </div>
                </div>
                
                <div className="branch-content">
                  <div className="branch-header">
                    <h3>{branch.city}</h3>
                    <span className="branch-country">{branch.country}</span>
                  </div>
                  
                  <div className="branch-info">
                    <div className="info-item">
                      <FaMapMarkerAlt />
                      <span>{branch.address}</span>
                    </div>
                    <div className="info-item">
                      <FaPhone />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="info-item">
                      <FaEnvelope />
                      <span>{branch.email}</span>
                    </div>
                  </div>
                  
                  <div className="branch-actions">
                    <button className="branch-btn primary">
                      <FaPhone />
                      Call Office
                    </button>
                    <button className="branch-btn secondary">
                      <FaMapMarkerAlt />
                      Get Directions
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 style={{color:'white'}}>Frequently Asked Questions</h2>
            <p style={{color:'grey'}}>Find quick answers to common questions about contacting us</p>
          </div>
          
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="question-content">
                    <FaQuestionCircle className="question-icon" />
                    <h4>{faq.question}</h4>
                    <span className="faq-category">{faq.category}</span>
                  </div>
                  <motion.div 
                    className="faq-arrow"
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="answer-content">
                        <p>{faq.answer}</p>
                        <div className="answer-actions">
                          
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          
        </div>
      </section>
    </div>
  );
};

export default Contact;