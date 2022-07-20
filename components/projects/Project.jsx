import styles from './Project.module.scss';

const Project = ({ title }) => {
  return (
    <div className={styles.Project}>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti
        ullam necessitatibus quasi. Dolores provident aliquid non id cumque
        porro tempore cupiditate soluta quo quasi?
      </p>
    </div>
  );
};

export default Project;