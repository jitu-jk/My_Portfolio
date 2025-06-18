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

const ServicesSection = () => (
  <section id="services" style={{ minHeight: '100vh', background: '#f6fbff', padding: '40px 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={sectionHeaderStyle}>Services</h2>
      <div style={sectionUnderlineStyle}></div>
      <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center' }}>From frontend interfaces to robust backend systems, I offer full-cycle development solutions that align with industry standards and client goals. My services are crafted to help businesses scale with technology that’s clean, efficient, and reliable.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
        <div className="service-card" style={{ background: '#CCDFE6', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32, width: 320, textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💻</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Web Development</h3>
          <p style={{ color: '#555' }}>Building modern, responsive websites and web apps using React, Node.js, and more.</p>
        </div>
        <div className="service-card" style={{ background: '#CCDFE6', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32, width: 320, textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🎨</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>UI/UX Design</h3>
          <p style={{ color: '#555' }}>Designing user-friendly interfaces and experiences for web and mobile platforms.</p>
        </div>
        <div className="service-card" style={{ background: '#CCDFE6', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32, width: 320, textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🗄️</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Database Management</h3>
          <p style={{ color: '#555' }}>Efficient database design, optimization, and management using SQL and Excel.</p>
        </div>
        <div className="service-card" style={{ background: '#CCDFE6', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32, width: 320, textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🧑‍🏫</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>AI/ML Training</h3>
          <p style={{ color: '#555' }}>Delivering hands-on training in Artificial Intelligence, Machine Learning, and Python.</p>
        </div>
        <div className="service-card" style={{ background: '#CCDFE6', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32, width: 320, textAlign: 'center', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌐</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>WordPress Development</h3>
          <p style={{ color: '#555' }}>Custom WordPress site development, theme customization, and maintenance.</p>
        </div>
      </div>
      <style>{`
        .service-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 8px 32px rgba(33,150,243,0.13), 0 2px 16px rgba(0,0,0,0.10);
        }
      `}</style>
    </div>
  </section>
);

export default ServicesSection;
