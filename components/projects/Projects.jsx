import Carousel from '../carousel/Carousel';
import styles from './Projects.module.scss';

const Project = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // color: 'white',
        border: '3px solid green',
        // width: '20rem',
      }}
    >
      <h3 style={{ backgroundColor: 'gray', width: 'fit-content' }}>{title}</h3>
      <p style={{ backgroundColor: 'darkgray' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti
        ullam necessitatibus quasi. Dolores provident aliquid non id cumque
        porro tempore cupiditate soluta quo quasi?
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <section>
        <h2>Team Projects</h2>
        <Carousel>
          <Project title="One" />
          <Project title="Two" />
          <Project title="Three" />
        </Carousel>
      </section>
      <section>
        <h2>Personal Projects</h2>
        <Carousel>
          <Project title="A" />
          <Project title="B" />
          <Project title="C" />
        </Carousel>
      </section>
    </div>
  );
};

export default Projects;
