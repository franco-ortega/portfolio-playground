import Carousel from '../carousel/Carousel';
import Project from './Project';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <section>
        <h2>Team Projects</h2>
        <Carousel>
          <Project title="One" />
          <Project title="Two" />
          <Project title="Three" />
          <Project title="Four" />
          <Project title="Five" />
          <Project title="Six" />
        </Carousel>
      </section>
      <section>
        <h2>Personal Projects</h2>
        <Carousel>
          <Project title="A" />
          <Project title="B" />
          <Project title="C" />
          <Project title="D" />
          <Project title="E" />
        </Carousel>
      </section>
    </div>
  );
};

export default Projects;
