import classNames from "classnames/bind";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("list-item")}>
        <div className={cx("item")}>
          <a href="." className={cx("item-link")}>
            About
          </a>
          <a className={cx("item-link")} href=".">
            Newsroom
          </a>
          <a className={cx("item-link")} href=".">
            Contact
          </a>
          <a className={cx("item-link")} href=".">
            Careers
          </a>
          <a className={cx("item-link")} href=".">
            ByteDance
          </a>
        </div>
        <div className={cx("item")}>
          {" "}
          <a href="." className={cx("item-link")}>
            TikTok for Good
          </a>
          <a className={cx("item-link")} href=".">
            Advertise
          </a>
          <a className={cx("item-link")} href=".">
            Developers
          </a>
          <a className={cx("item-link")} href=".">
            TikTok Rewards
          </a>
          <a className={cx("item-link")} href=".">
            TikTok Browse
          </a>
          <a className={cx("item-link")} href=".">
            TikTok Embeds
          </a>
        </div>
        <div className={cx("item")}>
          {" "}
          <a href="." className={cx("item-link")}>
            Help
          </a>
          <a className={cx("item-link")} href=".">
            Safety
          </a>
          <a className={cx("item-link")} href=".">
            Terms
          </a>
          <a className={cx("item-link")} href=".">
            Privacy
          </a>
          <a className={cx("item-link")} href=".">
            Creator Portal
          </a>
          <a className={cx("item-link")} href=".">
            Community Guidelines
          </a>
        </div>
        <div className={cx("item")}>
          <span className={cx("year")}>© 2022 TikTok</span>
        </div>
      </div>
    </div>
  );
}

export default About;
