import { motion } from "framer-motion";
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaYoutube,
  FaArrowRight, FaRss, FaCheck, FaExclamationTriangle
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // null, 'success', 'error'
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!email) {
      setSubscriptionStatus('error');
      setMessage("Please enter your email address");
      return;
    }
    
    if (!isValidEmail(email)) {
      setSubscriptionStatus('error');
      setMessage("Please enter a valid email address");
      return;
    }
    
    if (!agreedToPrivacy) {
      setSubscriptionStatus('error');
      setMessage("Please agree to the privacy policy");
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus(null);
    setMessage("");

    try {
      // In a real application, you would make an API call here
      // Example API call:
      // const response = await fetch('https://api.apexbyteit.com/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email: email,
      //     source: 'website_footer',
      //     timestamp: new Date().toISOString()
      //   })
      // });

      // For demo purposes, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate successful response
      const success = Math.random() > 0.1; // 90% success rate for demo

      if (success) {
        setSubscriptionStatus('success');
        setMessage("Thank you for subscribing! Check your email for confirmation.");
        
        // Clear form after successful submission
        setTimeout(() => {
          setEmail("");
          setAgreedToPrivacy(false);
        }, 3000);
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubscriptionStatus(null);
          setMessage("");
        }, 5000);
      } else {
        setSubscriptionStatus('error');
        setMessage("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubscriptionStatus('error');
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear any previous error when user starts typing
    if (subscriptionStatus === 'error') {
      setSubscriptionStatus(null);
      setMessage("");
    }
  };

  return (
    <footer className="footer">
      {/* Top Pattern */}
      <div className="footer-top-pattern"></div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="footer-company"
            >
              <div className="footer-logo">
                <Link to="/" className="logo-link">
                  <span className="logo-gradient">ApexByteIT</span>
                </Link>
                <p className="logo-tagline">Transforming Businesses with Technology</p>
              </div>
              
              <p className="company-description">
                Leading software development company specializing in custom solutions, 
                cloud services, and digital transformation for businesses worldwide.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h4>Our Location</h4>
                    <p>123 Tech Park, Silicon Valley</p>
                    <p>San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h4>Phone Number</h4>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h4>Email Address</h4>
                    <p className="emailto"><a href="mailto:hr@apexbyteit.com" >hr@apexbyteit.com</a></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="footer-links"
            >
              <h3 className="footer-title">Quick Links</h3>
              <ul className="links-list">
                <li>
                  <Link to="/">
                    <FaArrowRight className="link-icon" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <FaArrowRight className="link-icon" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <FaArrowRight className="link-icon" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/careers">
                    <FaArrowRight className="link-icon" />
                    Careers
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="footer-services"
            >
              <h3 className="footer-title">Our Services</h3>
              <ul className="services-list">
                <li>
                  <Link to="#">
                    <span className="service-dot"></span>
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="service-dot"></span>
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="service-dot"></span>
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="service-dot"></span>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="service-dot"></span>
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="service-dot"></span>
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="footer-newsletter"
            >
              <h3 className="footer-title">Newsletter</h3>
              <p className="newsletter-description">
                Subscribe to our newsletter to receive updates on new technologies, 
                industry insights, and special offers.
              </p>
              
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="newsletter-input"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={isSubmitting || subscriptionStatus === 'success'}
                    required
                  />
                  <button 
                    type="submit" 
                    className="newsletter-btn"
                    disabled={isSubmitting || subscriptionStatus === 'success'}
                  >
                    {isSubmitting ? (
                      <span className="spinner"></span>
                    ) : subscriptionStatus === 'success' ? (
                      <FaCheck />
                    ) : (
                      <FaArrowRight />
                    )}
                  </button>
                </div>
                
                <div className="form-check">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    disabled={isSubmitting || subscriptionStatus === 'success'}
                    required 
                  />
                  <label htmlFor="privacy">
                    I agree to the privacy policy
                  </label>
                </div>
                
                {/* Status Message */}
                {message && (
                  <div className={`status-message ${subscriptionStatus}`}>
                    {subscriptionStatus === 'success' ? (
                      <FaCheck className="status-icon" />
                    ) : (
                      <FaExclamationTriangle className="status-icon" />
                    )}
                    <span>{message}</span>
                  </div>
                )}
              </form>
              
              
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} ApexByteIT. All rights reserved.</p>
            </div>
            
            <div className="legal-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <span className="separator">|</span>
              <Link to="/cookie-policy">Cookie Policy</Link>
              <span className="separator">|</span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
          
          <div className="footer-extra">
            <div className="extra-info">
              <p>
                ApexByteIT is a registered trademark. All other trademarks are the property of their respective owners.
              </p>
            </div>
            <div className="certifications">
              <span className="cert-badge iso">ISO 9001:2015</span>
              <span className="cert-badge gdpr">GDPR Compliant</span>
              <span className="cert-badge secure">SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;