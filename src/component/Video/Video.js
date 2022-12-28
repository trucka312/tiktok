import classNames from "classnames/bind";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles);

function Video({src}) {
  return (
    <div className={cx("wrapper")} mode="1">
      <video className={cx("video")} src={src} tabIndex="2" playsInline="5"  preload  controls>
        
      </video>
    </div>
  );
}

export default Video;
