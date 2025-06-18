import React from "react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
      style={{
       // marginLeft: '250px', // Adjust if your sidebar width is different
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.64)',
          zIndex: 1,
        }}
      ></div>

      {/* Background image */}
      <img
        src="/src/assets/profile.png" // <-- Change to your image path
        alt="Jitesh Kumar"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
         // objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Overlay Text */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: '#fff',
          textAlign: 'left',
          marginTop: '10%',
          paddingLeft: '5%',
          width: '100%',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Jitesh Kumar</h1>
        <p style={{ fontSize: '1.5rem' }}> Full Stack Web Developer</p>
      </div>
    </section>
  );
};

export default HomeSection;
