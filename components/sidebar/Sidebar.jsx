import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faFolder,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.scss';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
  return (
    <nav className={styles.Sidebar}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouse} /> Home
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} /> About
        </li>
        <li>
          <FontAwesomeIcon icon={faFolder} />
          Projects
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressBook} />
          Contact
        </li>
        <li>
          <FontAwesomeIcon icon={faFile} />
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
