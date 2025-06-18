import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import portfolioItems from '../data/portfolioData';

function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const item = portfolioItems.find((p) => p.id === Number(id));

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  if (!item) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h2>Project not found</h2>
        <button onClick={() => navigate('/')} style={{ marginTop: 20 }}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ background: '#f6fbff', minHeight: '100vh', padding: 0, display: 'flex' }}>
      <Sidebar disabled={true} />
      <div style={{ flex: 1 }}>
        <div style={{ background: '#0b1623', color: '#fff', padding: '32px 0 24px 0', marginBottom: 32 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>Portfolio Details</h1>
            <div style={{ fontSize: 16 }}>
              <span onClick={() => navigate('/')} style={{ color: '#b0c4d6', textDecoration: 'underline', cursor: 'pointer' }}>Home</span> <span style={{ color: '#2196f3', margin: '0 8px' }}>/</span> 
              <span
                onClick={() => navigate('/', { state: { scrollTo: 'portfolio' } })}
                style={{ color: '#2196f3', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Portfolio
              </span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 32, padding: '0 32px 48px 32px' }}>
          <div style={{ flex: 2 }}>
            <img src={typeof item.image === 'string' ? item.image : item.image.default || item.image} alt={item.title} style={{ width: '100%', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', marginBottom: 0 }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32, marginBottom: 0 }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 18 }}>Project information</h2>
              <div style={{ fontSize: 16, lineHeight: 2 }}>
                <div><b>Category:</b> {item.category}</div>
                <div><b>Technology:</b> {item.technology}</div>
                <div><b>Project date:</b> {item.date}</div>
                <div><b>Project URL:</b> <a href={`${item.url}`} target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>{item.url}</a></div>
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: 32 }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 10 }}>{item.title}</h2>
              <div style={{ fontSize: 15, color: '#555', marginBottom: 12, fontWeight: 'bold' }}>{item.description}</div>
              <div style={{ fontSize: 16, color: '#222' }}>{item.info}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
  }

export default PortfolioDetail;
