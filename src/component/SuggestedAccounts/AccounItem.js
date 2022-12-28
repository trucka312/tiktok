import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import Image from "../../component/Image";
import { Wrapper as PopperWrapper } from "../popper";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem({data}) {
  const renderPreview = (...props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <div>
            <AccountPreview data={data} />
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
          <Image
            className={cx("avatar")}
            src={data.avatar}
            alt={data.nickname}
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>{data.nickname}</strong>
              {data.tick && 
              
              <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
              }
            </p>
            <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  data : PropTypes.object.isRequired,
};

export default AccountItem;
