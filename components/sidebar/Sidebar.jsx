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
  // const [hamburgerActive, setHamburgerActive] = useState(false);

  const onMouseOverSidebar = () => {
    setSidebarActive(true);
  };

  const onMouseOutsideSidebar = () => {
    setSidebarActive(false);
  };

  const onSidebarClick = () => {
    // setSidebarActive((prevState) => !prevState);
    if(sidebarActive) setSidebarActive(false);
    if(!sidebarActive) setSidebarActive(true);
  };

  // const onHamburgerClick = async() => {
  //   await setHamburgerActive((prevState) => !prevState);
  //   if(hamburgerActive) setSidebarActive(true);
  //   if(!hamburgerActive) setSidebarActive(false);
  // };

  // console.log(sidebarActive, hamburgerActive);

  return (
    <nav
      className={
        sidebarActive
          ? styles.Sidebar
          : `${styles.Sidebar} ${styles.SidebarClosed}`
      }
      onMouseOver={onMouseOverSidebar}
      onMouseOut={onMouseOutsideSidebar}
      onClick={onSidebarClick}
    >
      {/* <p
        className={styles.Hamburger}
        onClick={onHamburgerClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </p> */}
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
