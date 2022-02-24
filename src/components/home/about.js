import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../title';
import dhis from '../../assets/images/dhis.png';

import '../../css/about.css';

const About = () => {
  return (
    <section className="about">
      <div className="img-container">
        <img
          src={dhis}
          alt="dhis"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="container">
        <Title label="About us" />
        <p>
          This project started some 15 years ago as a small scale research
          project whose initial outcomes led to its adoption by the Ministry of
          Health, Community Development, Gender, Elderly and Children (MoHCDEC),
          which served as a catalyst to enable its full scale roll out in the
          health sector of Tanzania. Apart from the Ministry being the main
          partner and beneficiary, our innovations have continuously attracted
          attention of vertical health programmes (TB, HIV, Malaria,
          Immunization, etc.) and various other stakeholders, some of whom have
          continued to support the ongoing research, innovation, development,
          and implementation efforts. To- date the UDSM DHIS Project ...{' '}
          <Link to="/">Read More</Link>
        </p>
      </div>
    </section>
  );
};

export default About;
