import { Link } from 'react-router-dom';
import Title from '../title';

// data
import { projects } from '../../data/projects';

import '../../css/projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <Title label="Our Projects" />
        <div
          className="showcase"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <article className="project project-title">
            <p className="faded-paragraph">
              <b>Digital</b> Health Innovation for Development Tanzania Among
              the Digital Health Solution Developed by DHIS2 UDSM Project Team
              <br />
              <Link to="/projects">View All</Link>
            </p>
          </article>
          <div
            className="inner-showcase"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {projects?.map(({ id, name, img, icon }) => (
              <article className="project project-card" key={id}>
                <div className="img-container">
                  <img
                    src={img}
                    alt={`${name}`}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '300px',
                    }}
                  />
                </div>
                <p
                  style={{
                    padding: '.7rem 1rem',
                  }}
                >
                  <Link to={`/projects/${id}`}>{name}</Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
