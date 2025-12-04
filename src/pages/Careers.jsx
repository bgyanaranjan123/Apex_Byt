// Careers.jsx
import React, { useState, useEffect } from 'react';
import '../css/Careers.css';
import { AdvancedSkyBubbleWave } from '../components/AdvanceSkyBubbleWave';

const Careers = () => {
  // State for sidebar mobile toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // State for active modal
  const [activeModal, setActiveModal] = useState(null);
  
  // State for filters
  const [filters, setFilters] = useState({
    search: '',
    department: 'all',
    location: 'all',
    jobType: 'all'
  });
  
  // Sample jobs data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      salary: "$140,000 - $180,000",
      description: "Build scalable applications using React, Node.js, and cloud technologies. Lead architecture decisions and mentor junior developers.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "DevOps",
      type: "Full-time",
      location: "San Francisco",
      salary: "$130,000 - $160,000",
      description: "Design and maintain our cloud infrastructure and CI/CD pipeline implementation.",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Design",
      type: "Full-time",
      location: "New York",
      salary: "$120,000 - $150,000",
      description: "Create beautiful and functional user interfaces for our products.",
      skills: ["Figma", "Sketch", "UI/UX", "Prototyping", "User Research"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data",
      type: "Full-time",
      location: "Remote",
      salary: "$150,000 - $190,000",
      description: "Analyze complex datasets and build machine learning models.",
      skills: ["Python", "SQL", "Machine Learning", "TensorFlow", "PyTorch"],
      posted: "5 days ago"
    }
  ]);
  
  // Departments data
  const departments = [
    {
      id: 1,
      name: "Engineering",
      icon: "💻",
      openPositions: 12,
      description: "Build the core products that power our platform."
    },
    {
      id: 2,
      name: "Design",
      icon: "🎨",
      openPositions: 5,
      description: "Create beautiful and intuitive user experiences."
    },
    {
      id: 3,
      name: "Product",
      icon: "📊",
      openPositions: 8,
      description: "Define product strategy and roadmap."
    },
    {
      id: 4,
      name: "Marketing",
      icon: "📢",
      openPositions: 6,
      description: "Spread the word about our innovative solutions."
    },
    {
      id: 5,
      name: "Sales",
      icon: "💰",
      openPositions: 10,
      description: "Help customers find the right solutions for their needs."
    },
    {
      id: 6,
      name: "Operations",
      icon: "⚙️",
      openPositions: 4,
      description: "Keep our business running smoothly and efficiently."
    }
  ];
  
  // Benefits data
  const benefits = [
    {
      id: 1,
      icon: "🏠",
      title: "Remote Friendly",
      description: "Work from anywhere in the world with flexible hours."
    },
    {
      id: 2,
      icon: "💪",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs."
    },
    {
      id: 3,
      icon: "📚",
      title: "Learning Budget",
      description: "$2,000 annual budget for courses and conferences."
    },
    {
      id: 4,
      icon: "⚡",
      title: "Cutting Edge Tech",
      description: "Work with the latest technologies and tools."
    },
    {
      id: 5,
      icon: "🌴",
      title: "Unlimited PTO",
      description: "Take time off when you need it - no limits."
    },
    {
      id: 6,
      icon: "🚀",
      title: "Stock Options",
      description: "Own a piece of the company you help build."
    }
  ];

  // Filtered jobs based on filter state
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         job.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()));
    
    const matchesDepartment = filters.department === 'all' || job.department === filters.department;
    const matchesLocation = filters.location === 'all' || job.location === filters.location;
    const matchesType = filters.jobType === 'all' || job.type === filters.jobType;
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      search: '',
      department: 'all',
      location: 'all',
      jobType: 'all'
    });
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
        setActiveModal(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarOpen && !e.target.closest('.filters-sidebar') && !e.target.closest('.filter-toggle')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sidebarOpen]);

  return (
    <div className="career-page">
     
      {/* Hero Section */}
      <section className="career-hero" id="hero">
        <div className="hero-wave-container">
          
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title1">
              <h2>Build the future with</h2> 
              <span className="gradient-text"> VisionTech</span>
            </h1>
            <p className="hero-subtitle">
              Join our team of innovators and creators. We're building products that change lives and shape tomorrow.
            </p>
          </div>
          
          <div className="hero-stats" style={{marginLeft:'-60px'}}>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Open Positions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Employee Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('departments')}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-container" id="departments">
        <div className="section-header">
          <span className="section-label">Departments</span>
          <h2 className="section-title" style={{color:'white', opacity:'0.7'}}>Where do you fit in?</h2>
          <p className="section-subtitle" style={{color:'white', opacity:'0.7'}}>
            Explore opportunities across our diverse teams and find your perfect role.
          </p>
        </div>

        <div className="departments-grid">
          {departments.map(dept => (
            <div 
              key={dept.id} 
              className="department-card"
              onClick={() => {
                handleFilterChange('department', dept.name);
                scrollToSection('open-positions');
              }}
            >
              <div className="card-header">
                <div className="card-icon-wrapper">
                  <div className="card-icon">
                    {dept.icon}
                  </div>
                </div>
                <span className="card-badge">{dept.openPositions} positions</span>
              </div>
              
              <h3 className="card-title">{dept.name}</h3>
              <p className="card-description">{dept.description}</p>
              
              <div className="card-footer">
                <span className="view-jobs">View Jobs</span>
                <span className="arrow-icon">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container benefits-section" id="benefits">
        <div className="section-header">
          <span className="section-label">Perks & Benefits</span>
          <h2 className="section-title" style={{color:'white', opacity:'0.8'}}>More than just a paycheck</h2>
          <p className="section-subtitle" style={{color:'white', opacity:'0.8'}}>
            We invest in our team's growth, wellbeing, and success.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map(benefit => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs Section */}
      <section className="section-container" id="open-positions">
        <div className="section-header">
          <span className="section-label">Open Positions</span>
          <h2 className="section-title" style={{color:'white', opacity:'0.8'}}>Find your next role</h2>
          <p className="section-subtitle" style={{color:'white', opacity:'0.8'}}>
            Browse through our current openings and apply today.
          </p>
        </div>

        <div className="jobs-header">
          <h3>{filteredJobs.length} positions found</h3>
          <button 
            className="filter-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-filter"></i>
            Filter Jobs
          </button>
        </div>

        {/* Mobile Overlay */}
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Jobs Container */}
        <div className="jobs-container">
          {/* Filters Sidebar */}
          <div className={`filters-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="filters-header">
              <h3>Filters</h3>
              <button 
                className="sidebar-close"
                onClick={() => setSidebarOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="filter-group">
              <div className="filter-label">
                <i className="fas fa-search filter-icon"></i>
                Search
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search jobs..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>

            <div className="filter-group">
              <div className="filter-label">
                <i className="fas fa-building filter-icon"></i>
                Department
              </div>
              <select
                className="filter-select"
                value={filters.department}
                onChange={(e) => handleFilterChange('department', e.target.value)}
              >
                <option value="all">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Operations">Operations</option>
                <option value="DevOps">DevOps</option>
                <option value="Data">Data</option>
              </select>
            </div>

            <div className="filter-group">
              <div className="filter-label">
                <i className="fas fa-map-marker-alt filter-icon"></i>
                Location
              </div>
              <select
                className="filter-select"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="San Francisco">San Francisco</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Berlin">Berlin</option>
                <option value="Singapore">Singapore</option>
              </select>
            </div>

            <div className="filter-group">
              <div className="filter-label">
                <i className="fas fa-briefcase filter-icon"></i>
                Job Type
              </div>
              <select
                className="filter-select"
                value={filters.jobType}
                onChange={(e) => handleFilterChange('jobType', e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <button className="clear-filters" onClick={clearFilters}>
              Clear All Filters
            </button>

            <div className="help-card">
              <h4>Need help?</h4>
              <p>Our recruitment team is here to answer any questions you might have.</p>
              <button className="help-button">
                Contact Recruiting
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="job-listings">
            {filteredJobs.length === 0 ? (
              <div className="no-jobs">
                <div className="no-jobs-icon">🔍</div>
                <h3>No jobs found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button className="clear-filters" onClick={clearFilters}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              filteredJobs.map(job => (
                <div 
                  key={job.id} 
                  className="job-card"
                  onClick={() => setActiveModal(job)}
                >
                  <div className="job-card-header">
                    <div className="job-info">
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-tags">
                        <span className="job-tag department">{job.department}</span>
                        <span className="job-tag type">{job.type}</span>
                        <span className="job-tag location">{job.location}</span>
                      </div>
                    </div>
                    
                    <div className="job-meta">
                      <span className="job-posted">{job.posted}</span>
                      <button 
                        className="apply-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModal(job);
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                  
                  <p className="job-description">{job.description}</p>
                  <div className="job-salary">{job.salary}</div>
                  
                  <div className="job-skills">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-container culture-section" id="culture">
        <div className="section-header">
          <span className="section-label">Our Culture</span>
          <h2 className="section-title" style={{color:'white', opacity:'0.8'}}>More than just coworkers</h2>
          <p className="section-subtitle" style={{color:'white', opacity:'0.8'}}>
            We're a team that values collaboration, innovation, and having fun along the way.
          </p>
        </div>

        <div className="culture-grid">
          <div className="culture-content">
            <h3 className="culture-title">Work with the best</h3>
            <p className="culture-description">
              At VisionTech, we believe that great work happens when talented people come together in an environment that fosters creativity, growth, and mutual respect.
            </p>
            
            <div className="culture-stats">
              <div className="culture-stat">
                <div className="culture-stat-number">4.8</div>
                <div className="culture-stat-label">Glassdoor Rating</div>
              </div>
              <div className="culture-stat">
                <div className="culture-stat-number">95%</div>
                <div className="culture-stat-label">Retention Rate</div>
              </div>
              <div className="culture-stat">
                <div className="culture-stat-number">50+</div>
                <div className="culture-stat-label">Team Events/Year</div>
              </div>
              <div className="culture-stat">
                <div className="culture-stat-number">20+</div>
                <div className="culture-stat-label">Countries Represented</div>
              </div>
            </div>
          </div>
          
          <div className="culture-images">
            <div className="image-grid">
              <div className="image-item image-item-1">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Team collaboration" />
              </div>
              <div className="image-item image-item-2">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Office environment" />
              </div>
              <div className="image-item image-item-3">
                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab286?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Team event" />
              </div>
              <div className="image-item image-item-4">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Workspace" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container career-cta" id="cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to join us?</h2>
          <p className="cta-description">
            Don't see the perfect role? We're always looking for talented people. 
            Send us your resume and we'll let you know when a matching position opens up.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-button primary">
              Apply Now
            </button>
            <button className="cta-button secondary">
              Contact Talent Team
            </button>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setActiveModal(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            
            <h2 className="modal-title">{activeModal.title}</h2>
            
            <div className="modal-tags">
              <span className="modal-tag">{activeModal.department}</span>
              <span className="modal-tag">{activeModal.type}</span>
              <span className="modal-tag">{activeModal.location}</span>
            </div>
            
            <div className="modal-salary">{activeModal.salary}</div>
            
            <p className="modal-description">{activeModal.description}</p>
            
            <div className="modal-skills">
              <h4>Required Skills</h4>
              <div className="skills-list">
                {activeModal.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <button className="modal-apply-button">
              Apply for this Position
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;