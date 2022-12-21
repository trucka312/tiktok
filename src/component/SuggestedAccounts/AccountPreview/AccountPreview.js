import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "../../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>

      <div className={cx("header")}>
        <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/eb17c551b05d1837b579b9cefb1da224~c5_100x100.jpeg?x-expires=1670749200&x-signature=B%2B38QKb8MtWuCOfErA6I2OkY5L0%3D" alt="" className={cx("avatar")} />
        <Button  primary>Follow</Button>
      </div>

      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>Mai anh thu</strong>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </p>
        <p className={cx("name")}>Anh Thu</p>
      </div>

      <p className={cx("analytics")}>
        <strong className={cx('value')}>8.2M </strong>
        <span className={cx("label")}>Followers</span>
        <strong className={cx('value')}>5.2M </strong>
        <span className={cx("label")}>Likes</span>
      </p>
    </div>
  );
}

export default AccountPreview;
