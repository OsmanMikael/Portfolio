import React, { useEffect } from "react";
import "./Portfolio.css";
import projectImg from "../../assets/22.jpg";
import ScrollReveal from "scrollreveal";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Nor Senter",
      description:
        "Webapplikasjon med react/typescript i frontend og firebase i backend",
      image: projectImg,
      link: "https://nor-senter.no/",
    },
    {
      title: "Osman Mikael",
      description: "Portfolio netside",
      image: projectImg,
      link: "osmanmikael.com",
    },
    {
      title: "Norway Portal",
      description: "En webapplikasjon med wordpress",
      image: projectImg,
      link: "norwayportal.net",
    },
    {
      title: "Web Design",
      description: "quae earum sit quam architecto! Repellat!",
      image: projectImg,
      link: "#",
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".portfolio-content", { origin: "top" });
    sr.reveal(".portfolio-box", { origin: "bottom", interval: 200 });
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="heading">
          Mine <span>Prosjekter</span>
        </h2>

        <div className="portfolio-content">
          {projects.map((project, index) => (
            <div className="portfolio-box" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
