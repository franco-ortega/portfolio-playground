import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div>
        {/* <h1>Franco Ortega</h1> */}
        {/* <h2>Software Engineer</h2> */}
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
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
