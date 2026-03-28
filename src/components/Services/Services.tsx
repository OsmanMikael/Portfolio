import React, { useEffect } from 'react';
import './Services.css';
import ScrollReveal from 'scrollreveal';
interface Service {
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: "fa-solid fa-code",
      title: "Webutvikling",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat, quae optio recusandae praesentium fuga minus consectetur animi, iste, vitae cum cumque distinctio."
    },
    {
      icon: "fa-solid fa-paint-roller",
      title: "Grafisk Design",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat, quae optio recusandae praesentium fuga minus consectetur animi, iste, vitae cum cumque distinctio."
    },
    {
      icon: "fa-solid fa-arrow-trend-up",
      title: "Digitalt Marketing",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat, quae optio recusandae praesentium fuga minus consectetur animi, iste, vitae cum cumque distinctio."
    }
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });
  
    sr.reveal('.services-container', { origin: 'top' });
    sr.reveal('.service-box', { origin: 'bottom', interval: 200 });
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="heading">Vår <span>Tjenester</span></h2>
        <div className="services-content">
          {services.map((service, index) => (
            <div className="service-box" key={index}>
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="btn">Les Mer</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;