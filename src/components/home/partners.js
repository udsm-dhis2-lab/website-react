import React from 'react';
import '../../css/partners.css';
// partners
import abt from '../../assets/images/partners/abt.png';
import ega from '../../assets/images/partners/ega.png';
import jica from '../../assets/images/partners/jica.png';
import jsi from '../../assets/images/partners/jsi.png';
import me from '../../assets/images/partners/me.png';
import oslo from '../../assets/images/partners/oslo.png';
import unicef from '../../assets/images/partners/unicef.png';

const partners = [abt, ega, jica, jsi, me, oslo, unicef];

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-container">
        <h2>Project Partners</h2>
        <div
          className="showcase"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          {partners?.map((partner) => (
            <div key={partner}>
              <img
                src={partner}
                alt=""
                style={{
                  display: 'block',
                  height: 70,
                  width: 'auto',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
