
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


import Image from "../Image";
import styles  from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem( {data}) {

    // console.log('data:', data );
    
    return ( 
        <Link to={`/user/${data.nickname}`} className={cx('wrappper')}>
            <Image className={cx('avatar')} 
                    src={data.avatar}
                    alt={data.nickname}>
            </Image>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick &&  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                </h4>
                <span className={cx('userName')}>@{data.nickname}</span>
            </div>


        </Link>
     );
}

export default AccountItem;