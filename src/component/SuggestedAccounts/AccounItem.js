import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "../popper";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (...props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <div>
            <AccountPreview />
          </div>
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        offset={[-20, 10]}
        placement="bottom"
        delay={[800, 0]}
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/eb17c551b05d1837b579b9cefb1da224~c5_100x100.jpeg?x-expires=1670749200&x-signature=B%2B38QKb8MtWuCOfErA6I2OkY5L0%3D"
            alt="st"
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>Mai anh thu</strong>
              <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
            </p>
            <p className={cx("name")}>Anh Thu</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
