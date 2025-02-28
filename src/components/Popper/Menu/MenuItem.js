import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classess = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classess} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClickL: PropTypes.func,
};
export default MenuItem;
