
import classNames from "classnames/bind";
import styles  from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";


const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrappper')}>
            <Image className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ecc37f16c700bdbb667a66ec317fb8dc~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&nonce=19361&refresh_token=a678c65a77f2667f2032878f46087083&x-expires=1740718800&x-signature=uWszrJKEysXfT%2BDqXfCXc%2FAsuSY%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474" alt="img"></Image>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('userName')}>@avan</span>
            </div>


        </div>
     );
}

export default AccountItem;