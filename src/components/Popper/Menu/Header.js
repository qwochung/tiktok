

import classNames from 'classnames/bind'; 
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
  
const cx = classNames.bind(styles);

function Header({ title, onBack}) {
   

    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronCircleLeft}/>
                <span className={cx('header-title')}>{title}</span>
            </button>
        </header>
    );
}

export default Header;
