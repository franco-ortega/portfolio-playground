import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
      <ul>
        <li>Resources</li>
        <li>Cartography</li>
      </ul>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
      </ul>
    </nav>
  );
};

export default Nav;
