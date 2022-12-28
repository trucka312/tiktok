import classNames from "classnames/bind";
import styles from "./DiscoverItems.module.scss";

import { MusicIcon, HashtagIcon } from "../../Icons";
const cx = classNames.bind(styles);

function DiscoverItems({ hashtagStyle, musicStyle, text }) {
  return <div className={cx("wrapper")}>
    <a href="#" className={cx('link')}>
        {musicStyle && <MusicIcon /> }
        {hashtagStyle && <HashtagIcon /> }
        <p className={cx('text')}>{text}</p>
    </a>
    
  </div>;
}

export default DiscoverItems;
