import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faFolder,
  faFile,
  faHashtag,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.scss';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const onMouseOverSidebar = () => {
    console.log('on mouse over');
    setSidebarActive(true);
  };

  const onMouseOutsideSidebar = () => {
    console.log('on mouse outside');
    setSidebarActive(false);
  };

  console.log(sidebarActive);

  const onHamburgerClick = () => {
    console.log('HANBURGER!!!');
    setSidebarActive((prevState) => !prevState);
  };

  return (
    <nav
      className={
        sidebarActive
          ? styles.Sidebar
          : `${styles.Sidebar} ${styles.SidebarClosed}`
      }
      // onMouseOver={onMouseOverSidebar}
      // onMouseOut={onMouseOutsideSidebar}
    >
      <p
        className={styles.Hamburger}
        onClick={onHamburgerClick}
        // onMouseOver={onMouseOverSidebar}
        // onMouseOut={onMouseOutsideSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouse} /> <span>Home</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} /> <span>About</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faFolder} /> <span>Projects</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressBook} /> <span>Contact</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faFile} /> <span>Resume</span>
        </li>
      </ul>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHashtag} /> <span>GitHub</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHashtag} /> <span>LinkedIn</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHashtag} /> <span>Twitter</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
