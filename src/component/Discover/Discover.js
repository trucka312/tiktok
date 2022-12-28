import classNames from "classnames/bind";
import styles from "./Discover.module.scss";
import DiscoverItems from "./DiscoverItems/DiscoverItems";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Discover({ title }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>{title}</div>
      <div className={cx("list-item")}>
        <DiscoverItems className={cx("item")} hashtagStyle text="thứ gì đó" />
        <DiscoverItems className={cx("item")} musicStyle text="someone you love" />
        <DiscoverItems className={cx("item")}
          hashtagStyle
          text="những đứa trẻ rồi sẽ đi xa nhà, sẽ có rất nhiều hành trình qua trong đ"
        />
        <DiscoverItems className={cx("item")}
          musicStyle
          text="Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng"
        />
        <DiscoverItems className={cx("item")} musicStyle text="Tình Đã Đầy Một Tim - Huyền Tâm Môn" />
        <DiscoverItems className={cx("item")} hashtagStyle text="kìa con gà" />
        <DiscoverItems className={cx("item")}
          musicStyle
          text="Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham"
        />
        <DiscoverItems className={cx("item")} hashtagStyle text="gì vậy" />
        <DiscoverItems className={cx("item")} hashtagStyle text="làm việc" />
        <DiscoverItems className={cx("item")} hashtagStyle text="chan nan" />
        <DiscoverItems className={cx("item")}
          musicStyle
          text="ai la nguoi thuong em- duyen duyen so so "
        />
        <DiscoverItems className={cx("item")} musicStyle text="Lac troi" />
        <DiscoverItems className={cx("item")} musicStyle text="waiting for love" />
        <DiscoverItems className={cx("item")} hashtagStyle text="7749 cach lam gi do" />
        <DiscoverItems className={cx("item")} musicStyle />
        <DiscoverItems className={cx("item")} hashtagStyle />
      </div>
    </div>
  );
}

Discover.propTypes = {
  title :PropTypes.string,
}

export default Discover;
