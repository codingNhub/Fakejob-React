import React from 'react';
import './HeaderSection.css';
import { Link } from 'react-router-dom';
const HeaderSection = () => {
  return (
    <section className="header18 fullscreen-header-section mbr-fullscreen">
      <div className="mbr-overlay" style={{ opacity: 0.3, backgroundColor: 'rgb(0, 0, 0)' }}></div>
      <div className="container-fluid">
        <div className="row">
          <div className="content-wrap col-12 col-md-8">
            <h1 className="mbr-section-title mbr-fonts-style mbr-white mb-4 display-1 animate__animated animate__delay-1s animate__fadeInUp">
              <strong>FakeJobDetect</strong>
            </h1>
            <p className="mbr-fonts-style mbr-text mbr-white mb-4 display-7 animate__animated animate__delay-1s animate__fadeInUp">
              Navigate Real Job Opportunities with Powerful Filters and User-Friendly AI Verification
            </p>
            <div className="mbr-section-btn">
            <Link to="./Registration" className="btn btn-white-outline display-7 animate__animated animate__delay-1s animate__fadeInUp">Join Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
