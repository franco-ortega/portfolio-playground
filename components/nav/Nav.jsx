import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <div>
        <h1>Franco Ortega</h1>
      </div>
      <div>
        <h2>Software Engineer</h2>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          {/* <li>About</li> */}
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Resources</li>
          <li>Cartography</li>
        </ul>
        {/* <ul> */}
        {/* <li>GitHub</li> */}
        {/* <li>LinkedIn</li> */}
        {/* <li>Twitter</li> */}
        {/* </ul> */}
      </nav>
    </div>
  );
};

export default Nav;
