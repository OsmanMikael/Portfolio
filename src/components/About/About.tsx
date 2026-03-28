import React, { useEffect, useState } from "react";
import "./About.css";
import backpack from "../../assets/CV1.png";
import ScrollReveal from "scrollreveal";

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".about-content", { origin: "top" });
    sr.reveal(".about-img", { origin: "bottom" });
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-img">
          <img src={backpack} alt="About" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            Om <span>Meg</span>
          </h2>
          <h3>Frontend Utvikler</h3>

          <p>
            Jeg er en positiv og løsningsorientert person med to bachelorgrader.
            Den nyeste er en bachelor i dataingeniørfag fra OsloMet, og den
            andre er en bachelor i geologi fra Universitetet i Damaskus. Jeg er
            lærevillig og har stor interesse for realfag, spesielt innen logisk
            problemløsning.
          </p>

          {showMore && (
            <p>
              Gjennom studiene ved OsloMet har jeg opparbeidet meg god
              kompetanse innen blant annet ASP.NET Core og React, samt
              teknologier som Java, JavaScript, Vue.js, Vuetify, Spring Boot,
              MySQL, HTML og CSS. I bacheloroppgaven utviklet vi en ny funksjon
              til Norrønas interne nettside («Insight»), som visualiserer og
              sammenligner salgsdata per butikk. Jeg har også god kunnskap og
              praktisk erfaring med utvikling av løsninger i WordPress, særlig
              knyttet til WooCommerce, Shopify og moderne tema- og
              blokkløsninger som Blocksy. Som frivillig har jeg utviklet en
              webapplikasjon for https://nor-senter.no/ . Her benyttet jeg React
              og TypeScript i frontend, samt Firebase Console fra Google som
              backend-løsning.
            </p>
          )}

          <button className="btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Les mindre" : "Les mer"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
