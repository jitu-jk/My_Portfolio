import React from 'react';

const sectionStyle = {
  minHeight: '100vh',
  padding: '40px 0',
  background: '#fff',
  fontFamily: 'Montserrat, Arial, sans-serif',
};

const sectionHeaderStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  textAlign: 'left',
};

const sectionUnderlineStyle = {
  width: '60px',
  height: '3px',
  background: '#2196f3',
  margin: '0 0 1.5rem 0',
  borderRadius: '2px',
};

const columnsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',
  justifyContent: 'space-between',
};

const colStyle = {
  flex: '1 1 350px',
  minWidth: '320px',
};

const sectionTitle = {
  fontSize: '2rem',
  fontWeight: 700,
  margin: '40px 0 20px 0',
};

const timelineDot = {
  display: 'inline-block',
  width: '14px',
  height: '14px',
  background: '#fff',
  border: '3px solid #2196f3',
  borderRadius: '50%',
  marginRight: '10px',
  verticalAlign: 'middle',
};

const timelineItem = {
  borderLeft: '2px solid #2196f3',
  paddingLeft: '30px',
  marginBottom: '30px',
  position: 'relative',
};

const timelineDotPos = {
  position: 'absolute',
  left: '-9px',
  top: '5px',
};

const ResumeSection = () => (
  <section id="resume" style={sectionStyle}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '20px 0 0 0', justifyContent: 'flex-start' }}>
        <h2 style={{ ...sectionHeaderStyle, margin: 0 }}>Resume</h2>
        <a
          href="https://drive.google.com/file/d/1U1dTNUY9XLRVJ09MvH2AREb3af8pCH6b/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{
            display: 'inline-block',
            background: '#2196f3',
            color: '#fff',
            padding: '10px 28px',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(33,150,243,0.08)',
            transition: 'background 0.2s',
            marginLeft: '250px',
          }}
        >
          Preview & Download
        </a>
      </div>
      <div style={sectionUnderlineStyle}></div>
      <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center' }}>
        A Computer Applications graduate with expertise in full-stack development, web management, and database management using SQL and Excel. Skilled in building dynamic web solutions, optimizing databases, and enhancing system efficiency. Committed to continuous learning in the evolving tech industry.
      </p>
      <div style={columnsStyle}>
        {/* Left Column: Summary & Education */}
        <div style={colStyle}>
          <div style={sectionTitle}>Summary</div>
          <div style={{ ...timelineItem, marginBottom: '40px' }}>
            <span style={{ ...timelineDot, ...timelineDotPos }}></span>
            <div style={{ fontWeight: 600, fontSize: '1.2rem', color: '#444' }}>Jitesh Kumar</div>
            <em style={{ color: '#2196f3', fontWeight: 500, display: 'block', margin: '8px 0' }}>
              Full-stack developer and AI/ML trainer with hands-on experience in web development, database management, and delivering technical training. Adept at building scalable, user-centric applications and fostering practical learning environments.
            </em>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#333', fontSize: '1rem' }}>
              <li>East Champaran, Bihar</li>
              <li>91-8292195642</li>
              <li>jitesh62684@gmail.com</li>
             <li><a href="https://www.linkedin.com/in/jiteshkumarjk/" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com/jitu-jk" target="_blank">GitHub</a></li>
            </ul>
          </div>
          <div style={sectionTitle}>Education</div>
          <div style={timelineItem}>
            <span style={{ ...timelineDot, ...timelineDotPos }}></span>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#444' }}>Master in Computer Application (MCA)</div>
            <div style={{ fontWeight: 700, color: '#222', margin: '6px 0' }}>2022/07 - 2024/05</div>
            <div style={{ fontStyle: 'italic', color: '#2196f3', marginBottom: '6px' }}>
              Lovely Professional University, Phagwara, Punjab
            </div>
            <div style={{ color: '#333' }}>
              CGPA: 7.35
            </div>
          </div>
          <div style={timelineItem}>
            <span style={{ ...timelineDot, ...timelineDotPos }}></span>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#444' }}>Bachelor in Computer Application (BCA)</div>
            <div style={{ fontWeight: 700, color: '#222', margin: '6px 0' }}>2019/07 - 2022/07</div>
            <div style={{ fontStyle: 'italic', color: '#2196f3', marginBottom: '6px' }}>
              Lovely Professional University, Phagwara, Punjab
            </div>
            <div style={{ color: '#333' }}>
              CGPA: 7.34
            </div>
          </div>
          <div style={{ color: '#333', fontSize: '1rem', background: '#f5f7fa', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 8px rgba(33,150,243,0.08)', marginTop: '30px' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2196f3', marginBottom: '8px' }}>Certifications</div>
            <ul style={{ margin: 0, paddingLeft: '22px', listStyle: 'square', color: '#222' }}>
              <li><b>HTML, CSS, and Javascript for Web Developers</b> <span style={{ color: '#888', fontSize: '0.95em' }}>(Coursera, 2024)</span></li>
              <li><b>Training in C++ Programming</b> <span style={{ color: '#888', fontSize: '0.95em' }}>(Cyber Schools, 2023)</span></li>
              <li><b>Python for Everybody</b> <span style={{ color: '#888', fontSize: '0.95em' }}>(Coursera, 2023)</span></li>
            </ul>
           
          </div>
        </div>
        {/* Right Column: Experience */}
        <div style={colStyle}>
          <div style={sectionTitle}>Work Experience</div>
          <div style={timelineItem}>
            <span style={{ ...timelineDot, ...timelineDotPos }}></span>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#444' }}>WordPress Developer and AI/ML Trainer</div>
            <div style={{ fontWeight: 700, color: '#222', margin: '6px 0' }}>NIELIT Noida | 2024/09 - 2025/03</div>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#333', fontSize: '1rem' }}>
              <li><b>WordPress Development:</b> Led the design, development, and maintenance of the official website for NIELIT Noida, <a href="https://coenoida.in/" target="_blank">coenoida.in</a>, delivering a scalable, responsive, and user-centric platform.</li>
              <li><b>AI/ML Trainer:</b> Delivered comprehensive training on AI, Machine Learning, and Python for Kendriya Vidyalaya Sangathan, focusing on practical applications and hands-on projects.</li>
            </ul>
          </div>
          <div style={sectionTitle}>Projects</div>
          <div style={timelineItem}>
            <span style={{ ...timelineDot, ...timelineDotPos }}></span>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#444' }}>Lenskart Clone</div>
            <div style={{ fontWeight: 700, color: '#222', margin: '6px 0' }}>2024/01 - 2024/02</div>
            <div style={{ color: '#333' }}>
              Independently designed and developed a Lenskart clone using HTML, CSS, and JavaScript, focusing on responsive design and user-centric features for a high-quality web application.
            </div>
          </div>
          <div style={timelineItem}>
            <span style={{ ...timelineDot, ...timelineDotPos }}></span>
            <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#444' }}>Weather Forecasting Web Application</div>
            <div style={{ fontWeight: 700, color: '#222', margin: '6px 0' }}>2024/04 - 2024/05</div>
            <div style={{ color: '#333' }}>
              Developed a ReactJS-based web application to forecast weather for specific locations, providing real-time data on temperature, humidity, wind speed, and weather conditions.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeSection;
