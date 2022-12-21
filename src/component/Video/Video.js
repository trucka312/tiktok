import classNames from "classnames/bind";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles);

function Video() {
  return (
    <div className={cx("wrapper")}>
      <video className={cx("video")}></video>
    </div>
  );
}

export default Video;
