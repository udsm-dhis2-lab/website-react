import React from 'react';
import Title from '../title';

// data
import { services } from '../../data/services';

import '../../css/services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="container title-container">
        <Title label="Our Services" />
      </div>
      <div
        style={{
          background: '#EFF1F2',
        }}
      >
        <div
          className="container"
          style={{
            background: 'white',
          }}
        >
          <div
            className="showcase"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '0 2rem',
            }}
          >
            <article className="service service-title">
              <p className="faded-paragraph">
                <b>UDSM DHIS2 Project team</b>, technically we offer the
                following services
              </p>
            </article>
            <div
              className="inner-showcase"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {services.map(({ id, title, descr, icon }) => (
                <article className="service service-card" key={id}>
                  <div className="icon">
                    <img
                      src={icon}
                      alt="service icon"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                  <div className="main-body">
                    <h3>{title}</h3>
                    <p>{descr}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
