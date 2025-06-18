import React from "react";
import profileImg from "../assets/profile.png";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp,  FaReact, FaGitAlt, FaGithub, FaJava, FaLinux } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMongodb, SiPostgresql, SiLeetcode, SiC, SiCplusplus, SiExpress, SiNodedotjs, SiMysql } from "react-icons/si";

const sectionHeaderStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  textAlign: "left",
};
const sectionUnderlineStyle = {
  width: "60px",
  height: "3px",
  background: "#2196f3",
  margin: "0 0 1.5rem 0",
  borderRadius: "2px",
};

const iconCardStyle = {
  background: '#232b38',
  borderRadius: 12,
  width: 110,
  height: 110,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
  transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s, background 0.25s',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
};
const iconCardHoverStyle = {
  transform: 'translateY(-10px) scale(1.09) rotate(-2deg)',
  boxShadow: '0 8px 32px 0 rgba(33,150,243,0.25), 0 0 0 4px #2196f3aa',
  background: 'linear-gradient(135deg, #232b38 60%, #2196f3 100%)',
};

// Replace all icon card divs with a component that handles hover
function IconCard({ children }) {
  const [hover, setHover] = React.useState(false);
  const icon = React.Children.toArray(children)[0];
  const label = React.Children.toArray(children)[1];

  return (
    <div
      style={iconCardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {React.isValidElement(icon)
        ? React.cloneElement(icon, {
            style: {
              ...icon.props.style,
              ...(hover
                ? { filter: 'drop-shadow(0 0 12px #2196f3) brightness(1.25)', transform: 'scale(1.18) rotate(-6deg)', transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)' }
                : { filter: 'none', transform: 'none', transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)' }),
            },
          })
        : icon}
      {label}
    </div>
  );
}

const AboutSection = () => (
  <section
    id="about"
    style={{ minHeight: "100vh", background: "white", padding: "40px 0", color:'black' }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", color:'black' }}>
      <h2 style={sectionHeaderStyle}>About</h2>
      <div style={sectionUnderlineStyle}></div>
      <p
        style={{color: 'black', fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center'}}
      >
        A Computer Applications graduate with expertise in full-stack
        development, web management, and database management using SQL and
        Excel. Skilled in building dynamic web solutions, optimizing databases,
        and enhancing system efficiency. Committed to continuous learning in the
        evolving tech industry.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "0 0 320px", maxWidth: "320px" }}>
          <img
            src={profileImg}
            alt="Profile"
            style={{
              width: "100%",
              borderRadius: "8px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          />
        </div>
        <div style={{ flex: "1 1 400px", minWidth: "320px" }}>
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
              marginBottom: "0.5rem",
              color: 'black'
            }}
          >
            Full-Stack Developer & AI/ML Trainer
          </h2>
          <p
            style={{
              fontStyle: "italic",
              color: "black",
              marginBottom: "1.5rem",
            }}
          >
            Passionate about delivering scalable, responsive, and user-centric
            solutions. Experienced in training and mentoring students in AI/ML
            and web technologies.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                flex: "1 1 200px",
              }}
            >
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ color: "#00bfff", marginRight: 8 }}>
                  &#8250;
                </span>{" "}
                <b>Name:</b> Jitesh Kumar
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ color: "#00bfff", marginRight: 8 }}>
                  &#8250;
                </span>{" "}
                <b>Birthday:</b> 5 dec 2000
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ color: "#00bfff", marginRight: 8 }}>
                  &#8250;
                </span>{" "}
                <b>Phone:</b> 91-8292195642
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ color: "#00bfff", marginRight: 8 }}>
                  &#8250;
                </span>{" "}
                <b>City:</b> East Champaran, Bihar
              </li>
            </ul>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                flex: "1 1 200px",
              }}
            >
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ color: "#00bfff", marginRight: 8 }}>
                  &#8250;
                </span>{" "}
                <b>Age:</b> 24
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ color: "#00bfff", marginRight: 8 }}>
                  &#8250;
                </span>{" "}
                <b>Degree:</b> MCA , BCA
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ color: "#00bfff", marginRight: 8 }}>
                  &#8250;
                </span>{" "}
                <b>Email:</b> jitesh62684@gmail.com
              </li>
              <li style={{ marginBottom: "0.7rem" }}>
                <span style={{ color: "#00bfff", marginRight: 8 }}>
                  &#8250;
                </span>{" "}
                <b>Freelance:</b> Available
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      {/* Add margin between photo and Skills section */}
      <div style={{ height: '2rem' }}></div>
      {/* Skills Section below photo, left side only, in two columns */}
      <h2 style={sectionHeaderStyle}>Skills</h2>
      <div style={sectionUnderlineStyle}></div>
      <div style={{  textAlign: "center", borderRadius: 18, padding: '2.5rem 0' }}>
        {/* Frontend Section */}
        <h3 style={{  fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', color: 'black' }}>Frontend</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <IconCard>
            <FaReact style={{ color: '#61dafb', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>React</span>
          </IconCard>
          <IconCard>
            <FaHtml5 style={{ color: '#e44d26', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>HTML</span>
          </IconCard>
          <IconCard>
            <FaCss3Alt style={{ color: '#1572b6', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>CSS</span>
          </IconCard>
          <IconCard>
            <FaJs style={{ color: '#f7df1e', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>JavaScript</span>
          </IconCard>
          <IconCard>
            <SiTailwindcss style={{ color: '#38bdf8', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>Tailwind</span>
          </IconCard>
          <IconCard>
            <SiBootstrap style={{ color: '#7952b3', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>Bootstrap</span>
          </IconCard>
        </div>
        {/* Backend Section */}
        <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', color:'black' }}>Backend</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <IconCard>
            <FaPhp style={{ color: '#777bb4', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>PHP</span>
          </IconCard>
          <IconCard>
            <SiNodedotjs style={{ color: '#3c873a', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>Node.js</span>
          </IconCard>
          <IconCard>
            <SiExpress style={{ color:'black', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>Express</span>
          </IconCard>
        </div>
        {/* Database Section */}
        <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', color:'black' }}>Database</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <IconCard>
            <SiMongodb style={{ color: '#47a248', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>MongoDB</span>
          </IconCard>
          <IconCard>
            <SiMysql style={{ color: '#00758f', fontSize: 44, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>MySQL</span>
          </IconCard>
        </div>
      </div>
      {/* Version Control Section */}
      <div style={{  textAlign: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', color:'black' }}>Version Control</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <IconCard>
            <FaGitAlt style={{ color: '#f34f29', fontSize: 48, marginBottom: 10 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 20 }}>Git</span>
          </IconCard>
          <IconCard>
            <FaGithub style={{ color:'black', fontSize: 48, marginBottom: 10 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 20 }}>GitHub</span>
          </IconCard>
        </div>
        {/* Languages and Tools Section */}
        <h2 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', color:'black' }}>Languages and Tools</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          <IconCard>
            <FaJava style={{ color: '#ff9800', fontSize: 40, marginBottom: 8 }} />
            <span style={{ color: '#ff9800', fontWeight: 600, fontSize: 18 }}>Java</span>
          </IconCard>
          
          <IconCard>
            <FaLinux style={{ color:'black', fontSize: 40, marginBottom: 8 }} />
            <span style={{ color:'black', fontWeight: 600, fontSize: 18 }}>Linux</span>
          </IconCard>
          <IconCard>
            <SiC style={{ color: '#7b61ff', fontSize: 40, marginBottom: 8 }} />
            <span style={{ color: '#7b61ff', fontWeight: 600, fontSize: 18 }}>C</span>
          </IconCard>
          <IconCard>
            <SiCplusplus style={{ color: '#00e6ff', fontSize: 40, marginBottom: 8 }} />
            <span style={{ color: '#00e6ff', fontWeight: 600, fontSize: 18 }}>C++</span>
          </IconCard>
          <IconCard>
            <FaJs style={{ color: '#fff200', fontSize: 40, marginBottom: 8 }} />
            <span style={{ color: '#fff200', fontWeight: 600, fontSize: 18 }}>Javascript</span>
          </IconCard>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
