import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import portfolioItems from '../data/portfolioData';

const categories = ['All', 'App', 'Product', 'Branding', 'Books'];

const PortfolioSection = () => {
	const [selected, setSelected] = useState('All');
	const [zoomImg, setZoomImg] = useState(null);
	const navigate = useNavigate();

	const filteredItems =
		selected === 'All'
			? portfolioItems
			: portfolioItems.filter((item) => item.category === selected);

	return (
		<section
			id="portfolio"
			style={{ minHeight: '100vh', background: '#f6fbff', padding: '40px 0' }}
		>
			{/* Inline CSS for Portfolio Section */}
			<style>{`
        .portfolio-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; margin-right: 80px; } /* Added right margin */
        .portfolio-title { font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem; text-align: left; } /* Left align title */
        .portfolio-underline { width: 60px; height: 3px; background: #2196f3; margin: 0 0 1.5rem 0; } /* Underline left aligned below title */
        .portfolio-desc { color: #222; font-size: 1.1rem; margin-bottom: 2rem; text-align: center; }
        .portfolio-filters { display: flex; gap: 1.5rem; justify-content: center; margin-bottom: 2.5rem; }
        .portfolio-filter-btn { background: none; border: none; font-size: 1rem; color: #222; cursor: pointer; padding: 0.5rem 1rem; border-bottom: 2px solid transparent; transition: color 0.2s, border-color 0.2s; }
        .portfolio-filter-btn.active, .portfolio-filter-btn:hover { color: #2196f3; border-bottom: 2px solid #2196f3; }
        .portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
        .portfolio-item { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.07); transition: box-shadow 0.2s; position: relative; }
        .portfolio-img-wrapper { position: relative; overflow: hidden; height: 220px; }
        .portfolio-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s cubic-bezier(.4,2,.6,1); }
        .portfolio-item:hover .portfolio-img { transform: scale(1.12); }
        .portfolio-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(33,150,243,0.65); color: #fff; opacity: 0; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end; padding: 1.2rem; transition: opacity 0.3s; }
        .portfolio-item:hover .portfolio-overlay { opacity: 1; }
        .portfolio-tag { background: #222; color: #fff; font-size: 0.95rem; padding: 0.2rem 0.7rem; border-radius: 6px; margin-bottom: 0.7rem; }
        .portfolio-icons { display: flex; gap: 0.7rem; }
        .portfolio-icon { font-size: 1.3rem; background: #fff; color: #2196f3; border-radius: 50%; padding: 0.4rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); cursor: pointer; transition: background 0.2s, color 0.2s; }
        .portfolio-icon:hover { background: #2196f3; color: #fff; }
        .portfolio-caption { padding: 1rem 1.2rem; font-size: 1rem;font-weight:500; color: #333;color: blue; }
        .zoom-modal-bg { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 9999; }
        .zoom-modal-img { max-width: 90vw; max-height: 90vh; border-radius: 12px; box-shadow: 0 4px 32px rgba(0,0,0,0.3); }
        .zoom-modal-close { position: fixed; top: 32px; right: 48px; font-size: 2.5rem; color: #fff; background: none; border: none; cursor: pointer; z-index: 10000; }
        @media (max-width: 600px) { .portfolio-grid { grid-template-columns: 1fr; } .portfolio-container { padding: 0 8px; margin-right: 0; } .zoom-modal-close { right: 16px; top: 16px; } }
      `}</style>
			<div className="portfolio-container">
				<h2 className="portfolio-title">Portfolio</h2>
				<div className="portfolio-underline"></div>
				<p className="portfolio-desc">
				Welcome to my portfolio — a collection of projects that highlight my skills in web development and design.
Each project represents hands-on experience with modern technologies and clean, scalable code.
From UI/UX design to backend logic, these works reflect creativity, passion, and precision.
				</p>
				<div className="portfolio-filters">
					{categories.map((cat) => (
						<button
							key={cat}
							className={`portfolio-filter-btn${
								selected === cat ? ' active' : ''
							}`}
							onClick={() => setSelected(cat)}
						>
							{cat.toUpperCase()}
						</button>
					))}
				</div>
				<div className="portfolio-grid">
					{filteredItems.map((item) => (
						<div className="portfolio-item" key={item.id}>
							<div className="portfolio-img-wrapper">
								<img
									src={typeof item.image === 'string' ? item.image : item.image.default || item.image}
									alt={item.title}
									className="portfolio-img"
								/>
								<div className="portfolio-overlay">
									<span className="portfolio-tag">{item.title}</span>
									<div className="portfolio-icons">
										<span className="portfolio-icon" onClick={() => setZoomImg(typeof item.image === 'string' ? item.image : item.image.default || item.image)} title="Zoom">🔍</span>
										<span className="portfolio-icon" onClick={() => navigate(`/portfolio/${item.id}`)} title="View Details" style={{ marginLeft: 8 }}>🔗</span>
									</div>
								</div>
							</div>
							<div className="portfolio-caption">{item.description}</div>
						</div>
					))}
				</div>
			</div>
			{zoomImg && (
				<div className="zoom-modal-bg" onClick={() => setZoomImg(null)}>
					<button className="zoom-modal-close" onClick={() => setZoomImg(null)} title="Close">&times;</button>
					<img src={zoomImg} alt="Zoomed" className="zoom-modal-img" />
				</div>
			)}
		</section>
	);
};

export default PortfolioSection;
