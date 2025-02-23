import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
 




import style from './Header.module.scss';
import images from '~/assets/images';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(style);


function Header() {

const inputRef = useRef(null);

    const [searchResult, setSearchResult] = useState([])

    useEffect(( )=> {
        setTimeout(() => {
            // setSearchResult([1,2,3])
            
        }, 0);
        
    }, [])
    
    return (
        <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
              
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok'></img>
                </div>
                

                <Tippy  
                        interactive
                         appendTo="parent"
                        visible= {searchResult.length >0}
                        render={(attrs ) => (
                           
                                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('search-title')}>
                                            Accounts
                                        </h4>

                                        <AccountItem/>
                                        <AccountItem/>
                                        <AccountItem/>
                                        <AccountItem/>
                                    </PopperWrapper>
                                  
                                </div>
                         )}
                    >
                <div className={cx('search')}>
                    <input 
                        ref={inputRef}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                    />

                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    
                    <button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner } />
                    </button>

                   
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearchengin} />
                        </button>

                </div>
                    </Tippy>

                <div className={cx('actions')}>

                </div>





            </div>
        </h2>
    );
}

export default Header;
