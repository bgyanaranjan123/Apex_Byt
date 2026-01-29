import React, { useState, useEffect } from 'react';
import { 
  FaCode, 
  FaPaintBrush, 
  FaChartLine, 
  FaRocket, 
  FaBullhorn, 
  FaUsers,
  FaCogs,
  FaHome,
  FaHeartbeat,
  FaBook,
  FaBolt,
  FaUmbrellaBeach,
  FaChartBar,
  FaFilter,
  FaTimes,
  FaSearch,
  FaBuilding,
  FaMapMarkerAlt,
  FaBriefcase,
  FaChevronDown,
  FaGlassCheers,
  FaArrowRight,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperclip,
  FaPhone,
  FaCalendarAlt,
  FaUser,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import '../css/Careers.css';
import { AdvancedSkyBubbleWave } from '../components/AdvanceSkyBubbleWave';

const Careers = () => {
  // Sample jobs data organized by sector
  const jobsBySector = [
    {
      sector: "Engineering & Technology",
      icon: <FaCode />,
      jobs: [
        {
          id: "ENG001",
          title: "Senior Full Stack Developer",
          department: "Engineering",
          type: "Full-time",
          location: "Remote",
          description: "Build scalable applications using modern web technologies. Lead architecture decisions and collaborate with cross-functional teams to deliver high-quality software solutions.",
          skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"],
          posted: "2 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Portfolio/GitHub"]
        },
        {
          id: "ENG002",
          title: "Frontend Developer",
          department: "Engineering",
          type: "Full-time",
          location: "Remote",
          description: "Create responsive and interactive user interfaces. Collaborate with design and backend teams to implement pixel-perfect designs.",
          skills: ["React", "Vue.js", "JavaScript", "CSS3", "Next.js", "Webpack"],
          posted: "1 week ago",
          requiredDocuments: ["Resume", "Cover Letter", "Code Samples"]
        },
        {
          id: "ENG003",
          title: "Backend Engineer",
          department: "Engineering",
          type: "Full-time",
          location: "Remote",
          description: "Design and develop robust backend systems and APIs. Ensure system reliability, security, and scalability.",
          skills: ["Python", "Java", "Node.js", "PostgreSQL", "Redis", "REST APIs"],
          posted: "3 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Technical Design Document"]
        },
        {
          id: "ENG004",
          title: "DevOps Engineer",
          department: "Engineering",
          type: "Full-time",
          location: "Remote",
          description: "Manage cloud infrastructure and implement CI/CD pipelines. Ensure system reliability and performance optimization.",
          skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux"],
          posted: "5 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Architecture Diagrams"]
        },
        {
          id: "ENG005",
          title: "QA Automation Engineer",
          department: "Engineering",
          type: "Full-time",
          location: "Remote",
          description: "Develop automated testing frameworks and ensure product quality across all platforms.",
          skills: ["Selenium", "Cypress", "Python", "Jest", "Postman", "TestNG"],
          posted: "4 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Test Case Samples"]
        }
      ]
    },
    {
      sector: "Design & UX",
      icon: <FaPaintBrush />,
      jobs: [
        {
          id: "DES001",
          title: "Product Designer",
          department: "Design",
          type: "Full-time",
          location: "Remote",
          description: "Create user-centered designs for digital products. Conduct user research and translate insights into beautiful interfaces.",
          skills: ["Figma", "Sketch", "UI/UX", "Prototyping", "User Research", "Design Systems"],
          posted: "2 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Portfolio", "Case Studies"]
        },
        {
          id: "DES002",
          title: "UX Researcher",
          department: "Design",
          type: "Full-time",
          location: "Remote",
          description: "Conduct user research studies and provide insights to improve product usability and user satisfaction.",
          skills: ["User Research", "Usability Testing", "Data Analysis", "Prototyping", "Journey Mapping"],
          posted: "1 week ago",
          requiredDocuments: ["Resume", "Cover Letter", "Research Portfolio"]
        }
      ]
    },
    {
      sector: "Data & Analytics",
      icon: <FaChartLine />,
      jobs: [
        {
          id: "DATA001",
          title: "Data Scientist",
          department: "Data",
          type: "Full-time",
          location: "Remote",
          description: "Analyze complex datasets and build machine learning models to drive business insights and decision-making.",
          skills: ["Python", "SQL", "Machine Learning", "TensorFlow", "PyTorch", "Data Visualization"],
          posted: "3 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Research Papers", "GitHub Profile"]
        },
        {
          id: "DATA002",
          title: "Data Engineer",
          department: "Data",
          type: "Full-time",
          location: "Remote",
          description: "Build and maintain data pipelines and infrastructure for processing large-scale datasets.",
          skills: ["Python", "SQL", "Spark", "Hadoop", "Airflow", "Data Warehousing"],
          posted: "6 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Technical Documentation"]
        },
        {
          id: "DATA003",
          title: "Business Analyst",
          department: "Data",
          type: "Full-time",
          location: "Remote",
          description: "Analyze business requirements and translate them into technical specifications and data solutions.",
          skills: ["SQL", "Excel", "Tableau", "Business Analysis", "Requirements Gathering"],
          posted: "2 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Analytical Reports"]
        }
      ]
    },
    {
      sector: "Product & Strategy",
      icon: <FaRocket />,
      jobs: [
        {
          id: "PROD001",
          title: "Product Manager",
          department: "Product",
          type: "Full-time",
          location: "Remote",
          description: "Define product vision and strategy. Work with engineering and design teams to deliver successful products.",
          skills: ["Product Strategy", "Roadmapping", "Agile", "Market Research", "User Stories"],
          posted: "4 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Product Portfolio", "Strategy Documents"]
        },
        {
          id: "PROD002",
          title: "Technical Product Manager",
          department: "Product",
          type: "Full-time",
          location: "Remote",
          description: "Bridge the gap between technical teams and business stakeholders to deliver technical products.",
          skills: ["Technical Architecture", "API Design", "Agile", "Product Analytics", "A/B Testing"],
          posted: "1 week ago",
          requiredDocuments: ["Resume", "Cover Letter", "Technical Specifications"]
        }
      ]
    },
    {
      sector: "Marketing & Sales",
      icon: <FaBullhorn />,
      jobs: [
        {
          id: "MKT001",
          title: "Digital Marketing Specialist",
          department: "Marketing",
          type: "Full-time",
          location: "Remote",
          description: "Develop and execute digital marketing campaigns to drive brand awareness and customer acquisition.",
          skills: ["SEO", "SEM", "Social Media", "Content Marketing", "Google Analytics", "Email Marketing"],
          posted: "5 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Campaign Portfolio", "Analytics Reports"]
        },
        {
          id: "MKT002",
          title: "Content Writer",
          department: "Marketing",
          type: "Full-time",
          location: "Remote",
          description: "Create engaging content for blogs, websites, and marketing materials.",
          skills: ["Content Writing", "SEO", "Copywriting", "Blogging", "Content Strategy"],
          posted: "3 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Writing Samples", "Portfolio"]
        },
        {
          id: "SALES001",
          title: "Sales Development Representative",
          department: "Sales",
          type: "Full-time",
          location: "Remote",
          description: "Generate qualified leads and build relationships with potential clients.",
          skills: ["Sales", "Lead Generation", "CRM", "Communication", "Negotiation"],
          posted: "2 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Sales Performance Metrics"]
        }
      ]
    },
    {
      sector: "Operations & HR",
      icon: <FaCogs />,
      jobs: [
        {
          id: "OPS001",
          title: "Operations Manager",
          department: "Operations",
          type: "Full-time",
          location: "Remote",
          description: "Optimize business operations and ensure smooth day-to-day functioning of the organization.",
          skills: ["Process Improvement", "Project Management", "Analytics", "Operations", "Strategy"],
          posted: "1 week ago",
          requiredDocuments: ["Resume", "Cover Letter", "Process Documentation"]
        },
        {
          id: "HR001",
          title: "Talent Acquisition Specialist",
          department: "HR",
          type: "Full-time",
          location: "Remote",
          description: "Source and recruit top talent for various positions within the organization.",
          skills: ["Recruitment", "Sourcing", "Interviewing", "Employer Branding", "ATS"],
          posted: "2 days ago",
          requiredDocuments: ["Resume", "Cover Letter", "Recruitment Metrics"]
        }
      ]
    }
  ];

  // Flatten all jobs from all sectors
  const allJobs = jobsBySector.flatMap(sector => sector.jobs);

  // State for sidebar mobile toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // State for active modal (job details)
  const [activeModal, setActiveModal] = useState(null);
  
  // State for application form modal
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  
  // State for current job being applied to
  const [currentJob, setCurrentJob] = useState(null);
  
  // State for filters
  const [filters, setFilters] = useState({
    search: '',
    department: 'all',
    location: 'all',
    jobType: 'all'
  });

  // State for job application form
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    jobId: '',
    jobTitle: '',
    coverLetter: '',
    resume: null,
    portfolio: null,
    additionalDocuments: [],
    linkedin: '',
    github: '',
    website: '',
    salaryExpectations: '',
    noticePeriod: '',
    referralSource: '',
    agreeToTerms: false,
    allowContact: true
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // State for active sector
  const [activeSector, setActiveSector] = useState('all');

  // Benefits data
  const benefits = [
    {
      id: 1,
      icon: <FaHome />,
      title: "Remote Friendly",
      description: "Work from anywhere in the world with flexible hours."
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs."
    },
    {
      id: 3,
      icon: <FaBook />,
      title: "Learning Budget",
      description: "$2,000 annual budget for courses and conferences."
    },
    {
      id: 4,
      icon: <FaBolt />,
      title: "Cutting Edge Tech",
      description: "Work with the latest technologies and tools."
    },
    {
      id: 5,
      icon: <FaUmbrellaBeach />,
      title: "Unlimited PTO",
      description: "Take time off when you need it - no limits."
    },
    {
      id: 6,
      icon: <FaChartBar />,
      title: "Stock Options",
      description: "Own a piece of the company you help build."
    }
  ];

  // Filtered jobs based on filter state
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         job.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()));
    
    const matchesDepartment = filters.department === 'all' || job.department === filters.department;
    const matchesLocation = filters.location === 'all' || job.location === filters.location;
    const matchesType = filters.jobType === 'all' || job.type === filters.jobType;
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  // Filter jobs by sector
  const getFilteredJobsBySector = () => {
    if (activeSector === 'all') {
      return jobsBySector.map(sector => ({
        ...sector,
        jobs: sector.jobs.filter(job => filteredJobs.some(fj => fj.id === job.id))
      })).filter(sector => sector.jobs.length > 0);
    } else {
      const selectedSector = jobsBySector.find(s => s.sector === activeSector);
      return selectedSector ? [{
        ...selectedSector,
        jobs: selectedSector.jobs.filter(job => filteredJobs.some(fj => fj.id === job.id))
      }] : [];
    }
  };

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
    setActiveSector('all');
  };

  // Handle sector filter
  const handleSectorFilter = (sector) => {
    setActiveSector(sector);
  };

  // Handle CTA button clicks
  const handleApplyNow = () => {
    const element = document.getElementById('open-positions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactTalentTeam = () => {
    window.location.href = 'mailto:hr@apexbyteit.com?subject=Inquiry%20for%20Talent%20Team';
  };

  // Handle Apply Now button click on job card
  const handleJobApply = (job) => {
    setCurrentJob(job);
    setApplicationForm(prev => ({
      ...prev,
      jobId: job.id,
      jobTitle: job.title
    }));
    setApplicationModalOpen(true);
    setActiveModal(null); // Close job detail modal if open
  };

  // Handle file upload
  const handleFileUpload = (e, fileType) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (fileType === 'additionalDocuments') {
        const newDocuments = Array.from(files);
        setApplicationForm(prev => ({
          ...prev,
          additionalDocuments: [...prev.additionalDocuments, ...newDocuments]
        }));
      } else {
        const file = files[0];
        setApplicationForm(prev => ({
          ...prev,
          [fileType]: file
        }));
      }
    }
  };

  // Remove uploaded file
  const removeFile = (fileType, index = null) => {
    if (fileType === 'additionalDocuments' && index !== null) {
      setApplicationForm(prev => ({
        ...prev,
        additionalDocuments: prev.additionalDocuments.filter((_, i) => i !== index)
      }));
    } else {
      setApplicationForm(prev => ({
        ...prev,
        [fileType]: null
      }));
    }
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validate form
  const validateForm = () => {
    if (!applicationForm.name.trim()) {
      setSubmitError('Please enter your name');
      return false;
    }
    
    if (!applicationForm.email.trim() || !/^\S+@\S+\.\S+$/.test(applicationForm.email)) {
      setSubmitError('Please enter a valid email address');
      return false;
    }
    
    if (!applicationForm.resume) {
      setSubmitError('Please upload your resume');
      return false;
    }
    
    if (!applicationForm.agreeToTerms) {
      setSubmitError('Please agree to the terms and conditions');
      return false;
    }
    
    return true;
  };

  // Handle form submission
  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Create form data for file upload
      const formData = new FormData();
      
      // Add text fields
      Object.keys(applicationForm).forEach(key => {
        if (key !== 'resume' && key !== 'portfolio' && key !== 'additionalDocuments') {
          formData.append(key, applicationForm[key]);
        }
      });
      
      // Add files
      if (applicationForm.resume) {
        formData.append('resume', applicationForm.resume);
      }
      
      if (applicationForm.portfolio) {
        formData.append('portfolio', applicationForm.portfolio);
      }
      
      applicationForm.additionalDocuments.forEach((doc, index) => {
        formData.append(`additionalDocument_${index}`, doc);
      });
      
      // Add metadata
      formData.append('submissionDate', new Date().toISOString());
      formData.append('jobDetails', JSON.stringify(currentJob));
      
      // In a real application, you would send this to your backend API
      // For now, we'll simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
      
      // Send email notification (simulated)
      const emailBody = `
        New Job Application Received:
        
        Job Title: ${applicationForm.jobTitle}
        Job ID: ${applicationForm.jobId}
        
        Candidate Details:
        Name: ${applicationForm.name}
        Email: ${applicationForm.email}
        Phone: ${applicationForm.phone || 'Not provided'}
        LinkedIn: ${applicationForm.linkedin || 'Not provided'}
        GitHub: ${applicationForm.github || 'Not provided'}
        Website: ${applicationForm.website || 'Not provided'}
        
        Additional Information:
        Salary Expectations: ${applicationForm.salaryExpectations || 'Not specified'}
        Notice Period: ${applicationForm.noticePeriod || 'Not specified'}
        Referral Source: ${applicationForm.referralSource || 'Not specified'}
        
        Cover Letter:
        ${applicationForm.coverLetter || 'No cover letter provided'}
        
        Documents Submitted:
        - Resume: ${applicationForm.resume ? applicationForm.resume.name : 'Not provided'}
        - Portfolio: ${applicationForm.portfolio ? applicationForm.portfolio.name : 'Not provided'}
        - Additional Documents: ${applicationForm.additionalDocuments.length} file(s)
        
        This application has been securely stored in the company system.
        Access is restricted to HR and hiring managers only.
      `;
      
      const mailtoLink = `mailto:hr@apexbyteit.com?subject=Job Application: ${encodeURIComponent(applicationForm.jobTitle)} (${applicationForm.jobId})&body=${encodeURIComponent(emailBody)}`;
      
      // In production, you would send this to your backend API
      // await fetch('/api/job-applications', {
      //   method: 'POST',
      //   body: formData
      // });
      
      console.log('Application form data:', {
        formData: Object.fromEntries(formData),
        files: {
          resume: applicationForm.resume?.name,
          portfolio: applicationForm.portfolio?.name,
          additionalDocuments: applicationForm.additionalDocuments.map(d => d.name)
        }
      });
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        resetForm();
        setApplicationModalOpen(false);
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      jobId: '',
      jobTitle: '',
      coverLetter: '',
      resume: null,
      portfolio: null,
      additionalDocuments: [],
      linkedin: '',
      github: '',
      website: '',
      salaryExpectations: '',
      noticePeriod: '',
      referralSource: '',
      agreeToTerms: false,
      allowContact: true
    });
  };

  // Close modal
  const closeApplicationModal = () => {
    if (!isSubmitting) {
      setApplicationModalOpen(false);
      resetForm();
      setSubmitError('');
    }
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
        if (!isSubmitting) {
          setApplicationModalOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSubmitting]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (applicationModalOpen || activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [applicationModalOpen, activeModal]);

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero" id="hero">
        <div className="hero-wave-container">
          <AdvancedSkyBubbleWave intensity={1} speed={1} colorTheme="blue" />
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title1">
              <h2>Build the future with</h2> 
              <span className="gradient-text"> ApexByteIT</span>
            </h1>
            <p className="hero-subtitle">
              Join our team of innovators and creators. We're building products that change lives and shape tomorrow.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{allJobs.length}</div>
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
          <FaChevronDown />
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-container" id="departments">
        <div className="section-header">
          <span className="section-label">Departments</span> <br />
          <h2 className="section-title" style={{color:'white'}}>Where do you fit in?</h2>
          <p className="section-subtitle">
            Explore opportunities across our diverse teams and find your perfect role.
          </p>
        </div>

        <div className="departments-grid">
          {jobsBySector.map((sector, index) => (
            <div 
              key={index}
              className="department-card"
              onClick={() => {
                handleSectorFilter(sector.sector);
                scrollToSection('open-positions');
              }}
            >
              <div className="card-header">
                <div className="card-icon-wrapper">
                  <div className="card-icon">
                    {sector.icon}
                  </div>
                </div>
                <span className="card-badge">{sector.jobs.length} positions</span>
              </div>
              
              <h3 className="card-title">{sector.sector}</h3>
              <p className="card-description">{sector.jobs[0]?.description.substring(0, 80)}...</p>
              
              <div className="card-footer">
                <span className="view-jobs">View Jobs</span>
                <FaArrowRight className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container benefits-section" id="benefits">
        <div className="section-header">
          <span className="section-label">Perks & Benefits</span><br />
          <h2 className="section-title" style={{color:'white'}}>More than just a paycheck</h2>
          <p className="section-subtitle">
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
          <span className="section-label">Open Positions</span><br />
          <h2 className="section-title" style={{color:'white'}}>Find your next role</h2>
          <p className="section-subtitle">
            Browse through our current openings and apply today.
          </p>
        </div>

        <div className="jobs-header">
          <h3>{filteredJobs.length} positions found</h3>
          <button 
            className="filter-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaFilter />
            Filter Jobs
          </button>
        </div>

        {/* Sector Filter Tabs */}
        <div className="sector-filter-tabs">
          <button 
            className={`sector-tab ${activeSector === 'all' ? 'active' : ''}`}
            onClick={() => handleSectorFilter('all')}
          >
            All Sectors
          </button>
          {jobsBySector.map((sector, index) => (
            <button 
              key={index}
              className={`sector-tab ${activeSector === sector.sector ? 'active' : ''}`}
              onClick={() => handleSectorFilter(sector.sector)}
            >
              {sector.icon}
              {sector.sector}
            </button>
          ))}
        </div>

        {/* Mobile Overlay */}
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Jobs Container */}
        <div className="jobs-container">
          {/* Job Listings by Sector */}
          <div className="job-listings">
            {getFilteredJobsBySector().length === 0 ? (
              <div className="no-jobs">
                <div className="no-jobs-icon">
                  <FaSearch />
                </div>
                <h3>No jobs found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button className="clear-filters" onClick={clearFilters}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              getFilteredJobsBySector().map((sector, sectorIndex) => (
                <div key={sectorIndex} className="sector-jobs-section">
                  <div className="sector-header">
                    <div className="sector-icon">
                      {sector.icon}
                    </div>
                    <h3 className="sector-title">{sector.sector}</h3>
                    <span className="sector-count">{sector.jobs.length} positions</span>
                  </div>
                  
                  <div className="sector-jobs-grid">
                    {sector.jobs.map(job => (
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
                                handleJobApply(job);
                              }}
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                        
                        <p className="job-description">{job.description}</p>
                        
                        <div className="job-skills">
                          {job.skills.slice(0, 4).map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                          ))}
                          {job.skills.length > 4 && (
                            <span className="skill-tag more-skills">
                              +{job.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-container culture-section" id="culture" style={{width:'100%', padding:'20px', background:'transparent'}}>
        <div className="section-header">
          <span className="section-label">Our Culture</span><br />
          <h2 className="section-title" style={{color:'white'}}>More than just coworkers</h2>
          <p className="section-subtitle">
            We're a team that values collaboration, innovation, and having fun along the way.
          </p>
        </div>

        <div className="culture-grid">
          <div className="culture-content">
            <h3 className="culture-title">Work with the best</h3>
            <p className="culture-description">
              At ApexByteIT, we believe that great work happens when talented people come together in an environment that fosters creativity, growth, and mutual respect.
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
                <img src="/home2.jpg" alt="Team collaboration" />
              </div>
              <div className="image-item image-item-2">
                <img src="/img5.jpg" alt="Office environment" />
              </div>
              <div className="image-item image-item-3">
                <img src="/img6.jpg" alt="Team event" />
              </div>
              <div className="image-item image-item-4">
                <img src="/img7.jpg" alt="Workspace" />
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
            <button className="cta-button primary" onClick={handleApplyNow}>
              <FaCalendarAlt />
              Browse Jobs
            </button>
            <button className="cta-button secondary" onClick={handleContactTalentTeam}>
              <FaUsers />
              Contact Talent Team
            </button>
          </div>

          <div className="cta-contact-info">
            <p>
              <FaPhone /> Call us: <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </p>
            <p>
              <FaEnvelope /> Email: <a href="mailto:hr@apexbyteit.com">hr@apexbyteit.com</a>
            </p>
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
              <FaTimes />
            </button>
            
            <h2 className="modal-title">{activeModal.title}</h2>
            
            <div className="modal-tags">
              <span className="modal-tag">{activeModal.department}</span>
              <span className="modal-tag">{activeModal.type}</span>
              <span className="modal-tag">{activeModal.location}</span>
            </div>
            
            <div className="modal-job-id">
              Job ID: {activeModal.id}
            </div>
            
            <p className="modal-description">{activeModal.description}</p>
            
            <div className="modal-skills">
              <h4>Required Skills</h4>
              <div className="skills-list">
                {activeModal.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="modal-documents">
              <h4>Required Documents</h4>
              <ul className="documents-list">
                {activeModal.requiredDocuments?.map((doc, index) => (
                  <li key={index} className="document-item">
                    <FaPaperclip /> {doc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="modal-actions">
              <button 
                className="modal-apply-btn"
                onClick={() => {
                  setCurrentJob(activeModal);
                  setApplicationModalOpen(true);
                  setActiveModal(null);
                }}
              >
                Apply Now
              </button>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {applicationModalOpen && (
        <div className="modal-overlay" onClick={closeApplicationModal}>
          <div className="application-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeApplicationModal}
              disabled={isSubmitting}
            >
              <FaTimes />
            </button>
            
            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <FaCheckCircle />
                </div>
                <h2 className="success-title">Application Submitted!</h2>
                <p className="success-description">
                  Thank you for applying to {applicationForm.jobTitle}. 
                  We've received your application and will review it shortly.
                </p>
                <p className="success-note">
                  Your documents have been securely stored in our system with restricted access.
                  You'll receive a confirmation email shortly.
                </p>
                <button 
                  className="success-close-btn"
                  onClick={closeApplicationModal}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <h2 className="modal-title">Apply for {applicationForm.jobTitle}</h2>
                  <div className="modal-job-id">Job ID: {applicationForm.jobId}</div>
                </div>
                
                <form onSubmit={handleSubmitApplication} className="application-form">
                  <div className="form-section">
                    <h3 className="form-section-title">
                      <FaUser /> Personal Information
                    </h3>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="name" style={{color:'white'}}>Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={applicationForm.name}
                          onChange={handleFormChange}
                          required
                          placeholder="Enter your full name"
                          style={{color:'white'}}

                          
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email" style={{color:'white'}}>Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={applicationForm.email}
                          onChange={handleFormChange}
                          required
                          placeholder="Enter your email"
                          style={{color:'white'}}

                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone" style={{color:'white'}}>Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={applicationForm.phone}
                          onChange={handleFormChange}
                          placeholder="Enter your phone number"
                          style={{color:'white'}}

                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-section">
                    <h3 className="form-section-title">
                      <FaLinkedin /> Professional Links
                    </h3>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="linkedin">LinkedIn Profile</label>
                        <input
                          type="url"
                          id="linkedin"
                          name="linkedin"
                          value={applicationForm.linkedin}
                          onChange={handleFormChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          style={{color:'white'}}
                        />
                      </div>
                      
                      
                      
                     
                    </div>
                  </div>
                  
                  <div className="form-section">
                    <h3 className="form-section-title">
                      <FaPaperclip /> Required Documents
                    </h3>
                    
                    <div className="documents-upload">
                      <div className="upload-group">
                        <label htmlFor="resume" style={{color:'white'}}>Resume/CV *</label>
                        <div className="file-upload">
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf,.doc,.docx,.txt"
                            onChange={(e) => handleFileUpload(e, 'resume')}
                            required
                          />
                          <label htmlFor="resume" className="upload-btn" style={{color:'white'}}>
                            <FaPaperclip /> Upload Resume
                          </label>
                          {applicationForm.resume && (
                            <div className="file-preview">
                              <span>{applicationForm.resume.name}</span>
                              <button 
                                type="button" 
                                className="remove-file"
                                onClick={() => removeFile('resume')}
                              >
                                <FaTimes />
                              </button>
                            </div>
                          )}
                        </div>
                        <small>Accepted formats: PDF, DOC, DOCX, TXT (Max 5MB)</small>
                      </div>
                      
                      
                      
                      
                      
                      
                    </div>
                  </div>
                  
                 
                  
                  <div className="form-section">
                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={applicationForm.agreeToTerms}
                        onChange={handleFormChange}
                        required
                      />
                      <label htmlFor="agreeToTerms">
                        I agree to the processing of my personal data according to your Privacy Policy *
                      </label>
                    </div>
                    
                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        id="allowContact"
                        name="allowContact"
                        checked={applicationForm.allowContact}
                        onChange={handleFormChange}
                      />
                      <label htmlFor="allowContact">
                        I allow ApexByteIT to contact me about future opportunities
                      </label>
                    </div>
                    
                    <div className="privacy-note">
                      <p>
                        <strong>Note:</strong> All documents submitted are securely stored in our 
                        encrypted database with restricted access. Only authorized HR personnel and 
                        hiring managers can access your application materials.
                      </p>
                    </div>
                  </div>
                  
                  {submitError && (
                    <div className="form-error">
                      <FaExclamationCircle /> {submitError}
                    </div>
                  )}
                  
                  <div className="form-actions">
                    <button 
                      type="button" 
                      className="cancel-btn"
                      onClick={closeApplicationModal}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;