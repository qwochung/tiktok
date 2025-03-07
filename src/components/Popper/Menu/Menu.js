
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
 
const cx = classNames.bind(styles);



const defaultFn = ()=>{}

function Menu({ children, items = [],hideOnClick = false ,  onChange= defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
 
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else{
                            onChange(item)
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
        
            interactive
            delay={[0, 500]}
             
            appendTo="parent"
            placement="bottom-end"
            offset={[15, 15]}
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length >1 &&  <Header title={current.title} onBack={()=>{
                            setHistory(prev=> prev.slice(0, prev.length -1))
                        }}/>}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}

            onHide={()=> setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}


Menu.propTypes = {
    children : PropTypes.node, 
    items : PropTypes.array , 
    hideOnClick : PropTypes.bool , 
    onChange : PropTypes.func , 
     
}
export default Menu;
