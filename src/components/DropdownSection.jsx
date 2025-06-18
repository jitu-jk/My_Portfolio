import React from 'react';

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

const DropdownSection = () => (
  <section id="dropdown" style={{ minHeight: '100vh', background: '#f6fbff', padding: '40px 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={sectionHeaderStyle}>Dropdown</h2>
      <div style={sectionUnderlineStyle}></div>
      <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: '2.5rem' }}>Extra content or dropdown info.</p>
      {/* ...rest of your dropdown content... */}
    </div>
  </section>
);

export default DropdownSection;
