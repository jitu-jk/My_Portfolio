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

const ContactSection = () => (
  <section id="contact" style={{ minHeight: '100vh', background: '#f6fbff', padding: '40px 0' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <h2 style={sectionHeaderStyle}>Contact</h2>
      <div style={sectionUnderlineStyle}></div>
      <p style={{ color: '#222', fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center' }}>
        Whether you’re hiring for your next big tech project or looking to bring your ideas to life, let’s turn them into robust, real-world applications. I’m just a message away—open to freelance work, internships, or full-time roles in global tech environments.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'flex-start', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32 }}>
        {/* Left: Contact Info */}
        <div style={{ flex: '1 1 340px', minWidth: 320 }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
              <span style={{ fontSize: 28, color: '#2196f3' }}>📍</span>
              <div>
                <b style={{ fontSize: '1.15rem' }}>Address</b>
                <div style={{ color: '#444', marginTop: 2 }}>U Block DLF Phase 3, Sector 24 Gurugram, Haryana 122022</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
              <span style={{ fontSize: 28, color: '#2196f3' }}>📞</span>
              <div>
                <b style={{ fontSize: '1.15rem' }}>Call Us</b>
                <div style={{ color: '#444', marginTop: 2 }}>91- 8292195642</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
              <span style={{ fontSize: 28, color: '#2196f3' }}>✉️</span>
              <div>
                <b style={{ fontSize: '1.15rem' }}>Email Us</b>
                <div style={{ color: '#444', marginTop: 2 }}>jitesh62684@gmail.com</div>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 8px rgba(33,150,243,0.08)' }}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.12345678901234!3d28.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc1234567890%3A0xabcdef1234567890!2sU%20Block%20DLF%20Phase%203%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122022%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form action="https://formspree.io/f/xqabbkwo" method="POST" style={{ flex: '2 1 400px', minWidth: 320, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', gap: 18 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Your Name</label>
              <input name="name" type="text" required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #dde3e6', marginTop: 4 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Your Email</label>
              <input name="email" type="email" required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #dde3e6', marginTop: 4 }} />
            </div>
          </div>
          <div>
            <label style={{ fontWeight: 500 }}>Subject</label>
            <input name="subject" type="text" required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #dde3e6', marginTop: 4 }} />
          </div>
          <div>
            <label style={{ fontWeight: 500 }}>Message</label>
            <textarea name="message" rows={6} required style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #dde3e6', marginTop: 4, resize: 'vertical' }} />
          </div>
          <button type="submit" style={{ background: '#2196f3', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 0', fontWeight: 600, fontSize: '1.1rem', marginTop: 8, cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
