import React, { useEffect, useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  // Hvilken seksjon er aktiv akkurat nå
  const [activeSection, setActiveSection] = useState("home");

  // Følger med på hvilken seksjon som er synlig på skjermen
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hvis seksjonen er synlig → sett den som aktiv
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% må være synlig
      }
    );

    // Start å "lytte" på alle seksjoner
    sections.forEach((section) => observer.observe(section));
  }, []);

  // Smooth scroll når du klikker på link
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // gjør den aktiv med en gang
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          {/* Logo */}
          <a
            href="#home"
            className="logo1"
            onClick={(e) => handleSmoothScroll(e, "home")}
          >
            Osman Mikael
          </a>

          {/* Navbar */}
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
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
