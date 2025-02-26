import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import 'tippy.js/dist/tippy.css';

import style from './Search.module.scss';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);


    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus();
    }


    const handleHideResult =() =>{
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive
            appendTo="parent"
            visible={showResult &&  searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        return setSearchValue(e.target.value);
                    }}
                    onFocus={()=> setShowResult(true)}
                />

                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear }>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                </button> */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearchengin} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
