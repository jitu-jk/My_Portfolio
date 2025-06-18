import { FaHome, FaUser, FaFileAlt, FaImages, FaServicestack, FaEnvelope, FaChevronDown, FaFacebookF, FaInstagram, FaLinkedin, FaBars, FaTimes,FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Sidebar.css';
import { useState } from "react";

const Sidebar = ({ disabled }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile

  // Close sidebar when a link is clicked (on mobile)
  const handleNavClick = (e) => {
    if (disabled) e.preventDefault();
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button className="sidebar-hamburger" onClick={() => setSidebarOpen(true)}>
        <FaBars />
      </button>
      {/* Sidebar overlay for mobile */}
      <div className={`sidebar-overlay${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)}></div>
      <div className={`bg-dark text-white d-flex flex-column align-items-center p-3 sidebar${sidebarOpen ? ' open' : ''}`}>
        {/* Close button for mobile */}
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}><FaTimes /></button>
        <img src="/src/assets/profile.png" alt="profile" className="rounded-circle mb-2" width="150" />
        <h5>Jitesh Kumar</h5>
        <div className="d-flex gap-3 mb-4 mt-2">
          <a className="icon-x-twitter" href="https://x.com/jitu__jk?s=09" target="_blank"rel="noopener noreferrer"><FaXTwitter /></a>
         {/* <a  className="icon-facebook" href="www.linkedin.com/in/jiteshkumarjk"><FaFacebookF/></a> */}
          <a className="icon-instagram" href="https://www.instagram.com/ig_jitu_?igsh=em5yN3I3N2xueTl3"target="_blank"rel="noopener noreferrer"><FaInstagram /></a>
          <a className="icon-github"href='https://github.com/jitu-jk'target="_blank"rel="noopener noreferrer"><FaGithub /></a>
          <a className="icon-linkedin" href="https://www.linkedin.com/in/jiteshkumarjk/"target="_blank"rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <ul className="nav flex-column w-100 gap-2">
          <li className="nav-item"><a className="nav-link text-white" href="#home" onClick={handleNavClick}><FaHome /> Home</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#about" onClick={handleNavClick}><FaUser /> About</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#resume" onClick={handleNavClick}><FaFileAlt /> Resume</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#portfolio" onClick={handleNavClick}><FaImages /> Portfolio</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#services" onClick={handleNavClick}><FaServicestack /> Services</a></li>
          <li className="nav-item dropdown">
            <button
              type="button"
              className="nav-link text-white d-flex align-items-center justify-content-between dropdown-btn"
              onClick={() => setDropdownOpen((open) => !open)}
              style={{ cursor: 'pointer', background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: 0 }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}><FaChevronDown /> Dropdown</span>
            </button>
            {dropdownOpen && (
              <ul style={{ background: '#23282d', width: '100%', borderRadius: '0 0 8px 8px', margin: 0, padding: '0.5rem 0', listStyle: 'none' }}>
                <li><a className="nav-link text-white" href="#gallery" onClick={handleNavClick}>Gallery</a></li>
                <li><a className="nav-link text-white" href="#demo" onClick={handleNavClick}>Demo</a></li>
                <li><a className="nav-link text-white" href="#more" onClick={handleNavClick}>More</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item"><a className="nav-link text-white" href="#contact" onClick={handleNavClick}><FaEnvelope /> Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
