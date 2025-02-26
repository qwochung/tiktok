
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';


import Button from '~/components/Button';
import styles from './Menu.module.scss';




const cx = classNames.bind(styles);


function MenuItem({ data, onClick}) {


    const classess = cx('menu-item', {
        separate: data.separate 
    })


    return <Button className={classess} leftIcon={data.icon} to ={data.to} onClick={onClick} >
            {data.title}
        </Button>;
}

export default MenuItem;
