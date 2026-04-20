import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndoAlt, faInfo, faHome } from '@fortawesome/free-solid-svg-icons';

const FooterNav = ({ handleInfoClick }) => {
  let history = useHistory();
  return (
    <footer>
      <Link to='/' className='footer-nav-btn'>
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <button className='footer-nav-btn' onClick={() => history.goBack()}>
        <FontAwesomeIcon icon={faUndoAlt} />
      </button>
      <button className='footer-nav-btn'>
        <FontAwesomeIcon icon={faInfo} onClick={handleInfoClick} />
      </button>
    </footer>
  );
};

export default FooterNav;
