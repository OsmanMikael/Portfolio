import React, { useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse?.classList.contains('show')) {
          const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without jumping
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand logo1" href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
            Osman Mikael
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
                  <i className="fa-solid fa-house"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>
                  <i className="fa-solid fa-user"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>
                  <i className="fa-solid fa-cog"></i> Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio" onClick={(e) => handleSmoothScroll(e, 'portfolio')}>
                  <i className="fa-solid fa-folder"></i> Portfolio
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
                  <i className="fa-solid fa-envelope"></i> Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;