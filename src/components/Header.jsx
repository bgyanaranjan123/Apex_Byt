import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState(null);
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Show floating button after scrolling down 300px
      if (window.scrollY > 300) {
        setShowFloatingBtn(true);
      } else {
        setShowFloatingBtn(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger animation when route changes
  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      // Set active animation
      setActiveAnimation(location.pathname);
      
      // Clear animation after 1.5 seconds
      const timer = setTimeout(() => {
        setActiveAnimation(null);
      }, 1500);
      
      prevLocationRef.current = location.pathname;
      return () => clearTimeout(timer);
    }
    
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavClick = (path) => {
    // Trigger ripple animation
    setActiveAnimation(path);
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Clear animation after 1.5 seconds
    setTimeout(() => {
      setActiveAnimation(null);
    }, 1500);
  };

  const handleFloatingBtnClick = () => {
    // Add special animation for floating button
    setActiveAnimation('floating');
    setTimeout(() => {
      setActiveAnimation(null);
    }, 1000);
  };

  return (
    <>
      <header className={`header-main ${scrolled ? "header-main-scrolled" : ""}`}>
        <div className="header-container">
          <nav className="header-nav" style={{marginTop:'-15px'}}>
            {/* Logo with animation */}
            <div className="header-logo">
              <Link 
                to="/" 
                className={`header-logo-link ${activeAnimation === '/' ? 'logo-pulse' : ''}`}
                onClick={() => handleNavClick('/')}
              >
                <span className="header-logo-gradient">
                  <img src="/logo.png" alt="logo" className={`header-logo-img ${scrolled ? 'logo-shrink' : ''}`} />
                  {activeAnimation === '/' && <span className="logo-click-ripple"></span>}
                </span>
                {activeAnimation === '/' && <span className="logo-glow"></span>}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="header-nav-desktop">
              <ul className="header-nav-list">
                {menuItems.map((item) => (
                  <li key={item.path} className="header-nav-item">
                    <div className="nav-item-wrapper">
                      <Link
                        to={item.path}
                        className={`header-nav-link ${
                          location.pathname === item.path ? "header-nav-active" : ""
                        } ${activeAnimation === item.path ? "nav-link-clicked" : ""}`}
                        onClick={() => handleNavClick(item.path)}
                      >
                        {item.label}
                        {location.pathname === item.path && (
                          <>
                            <span className="header-active-indicator"></span>
                            <span className="header-active-glow"></span>
                          </>
                        )}
                        {activeAnimation === item.path && (
                          <>
                            <span className="nav-click-ripple"></span>
                            <span className="nav-click-sparkle"></span>
                          </>
                        )}
                      </Link>
                      <span className="nav-item-underline"></span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Get in Touch Button */}
              <div className="header-btn-wrapper">
                <Link
                  to="/contact"
                  className={`header-btn-touch ${activeAnimation === '/contact' || activeAnimation === 'floating' ? "btn-pulse" : ""}`}
                  onClick={() => handleNavClick('/contact')}
                >
                  Get in Touch
                  <span className="btn-arrow">→</span>
                  <span className="btn-hover-effect"></span>
                  {(activeAnimation === '/contact' || activeAnimation === 'floating') && (
                    <span className="btn-click-rings"></span>
                  )}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="header-mobile-controls">
              <Link
                to="/contact"
                className="header-btn-touch-mobile"
                onClick={() => handleNavClick('/contact')}
              >
                Get in Touch
              </Link>
              
              <button
                className={`header-menu-toggle ${isMenuOpen ? "header-menu-open" : ""} ${activeAnimation === 'mobile-toggle' ? "toggle-spin" : ""}`}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setActiveAnimation('mobile-toggle');
                  setTimeout(() => setActiveAnimation(null), 500);
                }}
                aria-label="Toggle menu"
              >
                <span className="header-menu-line"></span>
                <span className="header-menu-line"></span>
                <span className="header-menu-line"></span>
                {isMenuOpen && <span className="menu-toggle-glow"></span>}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className={`header-mobile-menu ${isMenuOpen ? "header-mobile-menu-open" : ""}`}>
            <div className="mobile-menu-overlay"></div>
            <ul className="header-mobile-nav-list">
              {menuItems.map((item) => (
                <li key={item.path} className="header-mobile-nav-item">
                  <Link
                    to={item.path}
                    className={`header-mobile-nav-link ${
                      location.pathname === item.path ? "header-mobile-nav-active" : ""
                    } ${activeAnimation === item.path ? "mobile-nav-clicked" : ""}`}
                    onClick={() => handleNavClick(item.path)}
                  >
                    <span className="mobile-nav-number">0{menuItems.indexOf(item) + 1}</span>
                    <span className="mobile-nav-text">{item.label}</span>
                    {location.pathname === item.path && (
                      <>
                        <span className="header-mobile-active-indicator"></span>
                        <span className="mobile-active-pulse"></span>
                      </>
                    )}
                    {activeAnimation === item.path && (
                      <span className="mobile-click-wave"></span>
                    )}
                  </Link>
                </li>
              ))}
              <li className="header-mobile-btn-container">
                <Link
                  to="/contact"
                  className="header-btn-touch-mobile-full"
                  onClick={() => handleNavClick('/contact')}
                >
                  Get in Touch
                  <span className="mobile-btn-arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Floating Get in Touch Button */}
      <div className={`header-floating-contact-btn ${showFloatingBtn ? 'header-floating-visible' : ''}`}>
        <Link 
          to="/contact" 
          className="header-floating-btn-content"
          onClick={handleFloatingBtnClick}
          aria-label="Get in Touch"
        >
          <span className="header-floating-btn-text">Get in Touch</span>
          <span className="header-floating-btn-icon">→</span>
          <span className="header-floating-btn-pulse"></span>
          <span className="header-floating-btn-ring"></span>
          {activeAnimation === 'floating' && (
            <>
              <span className="floating-btn-sparkles">
                <span className="sparkle"></span>
                <span className="sparkle"></span>
                <span className="sparkle"></span>
              </span>
              <span className="floating-btn-explosion"></span>
            </>
          )}
        </Link>
      </div>

      {/* Global click animation overlay */}
      {activeAnimation && activeAnimation !== 'mobile-toggle' && (
        <div className="global-click-overlay"></div>
      )}
    </>
  );
}