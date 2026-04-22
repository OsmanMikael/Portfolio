import React, { useEffect } from "react";
import "./Home.css";
import ScrollReveal from "scrollreveal";
import chickenLeg from "../../assets/CV1.png";


const Home: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".home-content", { origin: "top" });
    sr.reveal(".home-img", { origin: "bottom" });
  }, []);

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-content">
          <h3>Hei, Dette er jeg</h3>
          <h1>Osman Mikael</h1>
          <h3>
            Og jeg er en <span>Frontend utvikler</span>
          </h3>

          <p>
            Jeg bygger moderne, responsive nettsider med fokus på
            brukeropplevelse, ytelse og ren kode. Jeg liker å jobbe med React,
            TypeScript, UI-design og ikke minst .NET Core.
          </p>

          <div className="social-icons">
            <a
              href="https://github.com/OsmanMikael"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/osman-mikael-346358174/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/Osman.Mikeal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>

          <a href="/CV.pdf" target="_blank" className="btn">
            Last ned CV
          </a>
        </div>

        <div className="home-img">
          <img src={chickenLeg} alt="Osman Mikael" />
        </div>
      </div>
    </section>
  );
};

export default Home;
