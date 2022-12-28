import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from "./AccountPreview.module.scss";
import Button from "../../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview({ data = [] }) {
  return (
    <div className={cx("wrapper")}>

      <div className={cx("header")}>
        <img className={cx("avatar")} src={data.avatar} alt={data.nickname}  />
        <Button  primary>Follow</Button>
      </div>

      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />}
          
        </p>
        <p className={cx("name")}>{data.last_name}</p>
      </div>

      <p className={cx("analytics")}>
        <strong className={cx('value')}>{data.followers_count} </strong>
        <span className={cx("label")}>Followers</span>
        <strong className={cx('value')}>{data.likes_count}</strong>
        <span className={cx("label")}>Likes</span>
      </p>
    </div>
  );
}

AccountPreview.propTypes = {
  data : PropTypes.object.isRequired,
}

export default AccountPreview;
