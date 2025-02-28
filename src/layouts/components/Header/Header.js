import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAsia,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router';

import style from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { ChatIcon, NotiIcon, UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import config from '~/config';

const cx = classNames.bind(style);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
                { type: 'language', code: 'ja', title: 'Japanese' },
                { type: 'language', code: 'th', title: 'Thailand' },
                { type: 'language', code: 'zh', title: 'Chinese' },
                { type: 'language', code: 'ko', title: 'Korean' },
                { type: 'language', code: 'fr', title: 'French' },
                { type: 'language', code: 'de', title: 'German' },
                { type: 'language', code: 'es', title: 'Spanish' },
                { type: 'language', code: 'pt', title: 'Portuguese' },
                { type: 'language', code: 'it', title: 'Italian' },
                { type: 'language', code: 'ru', title: 'Russian' },
                { type: 'language', code: 'ar', title: 'Arabic' },
                { type: 'language', code: 'hi', title: 'Hindi' },
                { type: 'language', code: 'id', title: 'Indonesian' },
                { type: 'language', code: 'ms', title: 'Malay' },
                { type: 'language', code: 'tl', title: 'Tagalog' },
                { type: 'language', code: 'tr', title: 'Turkish' },
                { type: 'language', code: 'nl', title: 'Dutch' },
                { type: 'language', code: 'sv', title: 'Swedish' },
                { type: 'language', code: 'no', title: 'Norwegian' },
                { type: 'language', code: 'da', title: 'Danish' },
                { type: 'language', code: 'fi', title: 'Finnish' },
                { type: 'language', code: 'pl', title: 'Polish' },
                { type: 'language', code: 'cs', title: 'Czech' },
                { type: 'language', code: 'ro', title: 'Romanian' },
                { type: 'language', code: 'hu', title: 'Hungarian' },
                { type: 'language', code: 'el', title: 'Greek' },
                { type: 'language', code: 'he', title: 'Hebrew' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback end Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language

                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@user',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok"></img>
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <ChatIcon />
                            </button>

                            <button className={cx('action-btn')}>
                                <NotiIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button primary>Log In</Button>
                            <Button outline>Register</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="name"
                                src="https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg"
                                fallback="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </h2>
    );
}

export default Header;
