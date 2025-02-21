import classNames from 'classnames/bind';

import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return <h2 className={cx('wrapper')}>
        <div className={cx('inner')}></div>
    </h2>;
}

export default Header;
