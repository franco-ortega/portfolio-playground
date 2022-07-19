import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
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
    </header>
  );
};

export default Header;
