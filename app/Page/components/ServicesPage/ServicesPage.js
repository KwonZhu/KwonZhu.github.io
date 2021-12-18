import React from "react";

const ServicesPage = () => (
  <div className="page">
    <div className="page__header">
      <h2 className="page__title">Services</h2>
    </div>
    <div className="page__content">
      <div className="servicesPage__services">
        <h3 className="services__title">
          My <span className="services__titleHightLight">Services</span>
        </h3>
        <div className="services">
          <div className="serviceItem">
            <div className="serviceItem__imageContainer">
              <img alt="Web Design" src="" className="serviceItem__image"></img>
            </div>
            <h4 className="serviceItem__name">Web Design</h4>
            <div className="serviceItem__description">
              Plan, design, create and deploy websites.
            </div>
          </div>
          <div className="serviceItem">
            <div className="serviceItem__imageContainer">
              <img
                alt="UI Design"
                src="./assets/css3.png"
                className="serviceItem__image"
              ></img>
            </div>
            <h4 className="serviceItem__name">UI Design</h4>
            <div className="serviceItem__description">
              Collect, research, investigate and evaluate user requirements, to
              deliver an outstanding user experience providing an exceptional
              and intuitive application design.
            </div>
          </div>
          <div className="serviceItem">
            <div className="serviceItem__imageContainer">
              <img
                alt="More to come"
                src="./assets/js.png"
                className="serviceItem__image"
              ></img>
            </div>
            <h4 className="serviceItem__name">More to come</h4>
            <div className="serviceItem__description">...</div>
          </div>
        </div>
      </div>
      <div className="servicesPage__clients">
        <h3 className="services__title">My Clients</h3>
        <div className="clients">
          <img alt="REA Group" src="" className="clientItem"></img>
          <img alt="carsales.com.au" src="" className="clientItem"></img>
          <img alt="Seek" src="" className="clientItem"></img>
        </div>
      </div>
    </div>
  </div>
);
export default ServicesPage;
