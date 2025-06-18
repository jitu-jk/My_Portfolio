import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './Sidebar';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ResumeSection from './ResumeSection';
import PortfolioSection from './PortfolioSection';
import ServicesSection from './ServicesSection';
// import DropdownSection from './DropdownSection';
import ContactSection from './ContactSection';
//import './MainContent.css';

const MainContent = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'portfolio') {
      const el = document.getElementById('portfolio');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar />

      <div className="flex-grow-1 bg-white" style={{ scrollBehavior: 'smooth', height: '100vh', overflowY: 'auto' }}>
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <ServicesSection />
        {/* <DropdownSection /> */}
        <ContactSection />
      </div>
    </div>
  );
};

export default MainContent;
