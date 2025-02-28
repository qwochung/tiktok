import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header/Header';
import style from '~/layouts/DefaultLayout/DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar/Sidebar';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
