import React, { useEffect, useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Hvilken seksjon er synlig
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  // Smooth scroll + lukk meny
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          {/* Logo */}
          <a
            href="#home"
            className="logo1 navbar-brand"
            onClick={(e) => handleSmoothScroll(e, "home")}
          >
            Osman Mikael
          </a>

          {/* Collapse knapp */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse meny */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, "home")}
                  className={`nav-link ${
                    activeSection === "home" ? "active" : ""
                  }`}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#about"
                  onClick={(e) => handleSmoothScroll(e, "about")}
                  className={`nav-link ${
                    activeSection === "about" ? "active" : ""
                  }`}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className={`nav-link ${
                    activeSection === "services" ? "active" : ""
                  }`}
                >
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={(e) => handleSmoothScroll(e, "portfolio")}
                  className={`nav-link ${
                    activeSection === "portfolio" ? "active" : ""
                  }`}
                >
                  Prosjekter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
