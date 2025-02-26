
import classNames from "classnames/bind";
import styles  from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrappper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/04c26c73206e8997c961c50194ee9ae5~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&nonce=42422&refresh_token=90959b5e5aede7f122a6ce49c7660474&x-expires=1740546000&x-signature=OIDB37lie%2B3DQAw0hi7Upfz8svs%3D&idc=my&ps=13740610&shcp=c1333099&shp=30310797&t=4d5b0474" alt="img"></img>
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