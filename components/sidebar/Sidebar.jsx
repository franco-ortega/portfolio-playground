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
import Link from 'next/link';

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
    if (sidebarActive) setSidebarActive(false);
    if (!sidebarActive) setSidebarActive(true);
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
          <Link href="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        {/* <li>
          <FontAwesomeIcon icon={faHouse} /> <span>Home</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} /> <span>About</span>
        </li> */}
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
          <FontAwesomeIcon icon={faHashtag} />{' '}
          <span>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHashtag} />{' '}
          <span>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHashtag} />{' '}
          <span>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
