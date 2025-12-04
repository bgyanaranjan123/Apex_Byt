import { motion } from "framer-motion";
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaYoutube,
  FaArrowRight, FaRss
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                    <p>info@apexbyteit.com</p>
                    <p>support@apexbyteit.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 4:00 PM</p>
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
                  <Link to="/portfolio">
                    <FaArrowRight className="link-icon" />
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/careers">
                    <FaArrowRight className="link-icon" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <FaArrowRight className="link-icon" />
                    Blog
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
                  <Link to="/services/software-development">
                    <span className="service-dot"></span>
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/cloud-solutions">
                    <span className="service-dot"></span>
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services/mobile-apps">
                    <span className="service-dot"></span>
                    Mobile Applications
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-development">
                    <span className="service-dot"></span>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/it-consulting">
                    <span className="service-dot"></span>
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-marketing">
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
              
              <form className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    <FaArrowRight />
                  </button>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">
                    I agree to the privacy policy
                  </label>
                </div>
              </form>
              
              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaInstagram />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaYoutube />
                  </a>
                </div>
              </div>
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
            
            {/* <div className="payment-methods">
              <span className="payment-text">We Accept:</span>
              <div className="payment-icons">
                <div className="payment-icon visa">Visa</div>
                <div className="payment-icon mastercard">MasterCard</div>
                <div className="payment-icon paypal">PayPal</div>
                <div className="payment-icon stripe">Stripe</div>
              </div>
            </div> */}
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