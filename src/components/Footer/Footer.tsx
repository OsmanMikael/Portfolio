import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-text">
          <p>Copyright &copy; {new Date().getFullYear()} av Osman Mikael</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home" onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up-long"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;