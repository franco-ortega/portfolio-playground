import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <nav className={styles.Sidebar}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
        </ul>
    </nav>
  );
};

export default Sidebar;
