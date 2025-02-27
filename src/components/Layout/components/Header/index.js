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
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { ChatIcon, NotiIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

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
            ] ,
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
                    <Link to={routesConfig.home} className={cx('logo-link')}>
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
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e3a0b0421f1ba9252d5ce0e609edaaad~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&nonce=58851&refresh_token=6c7c2237207fd23a3add950bd59583e0&x-expires=1740708000&x-signature=LIkfGkIeKn3PuRlIboPLHfGENPg%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
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
