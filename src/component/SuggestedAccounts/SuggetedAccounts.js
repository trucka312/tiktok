import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccounItem";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, isSeeLess = false, data = [], onViewChange, text}) {
  return (
    <div className={cx("wapper")}>
      <p className={cx("label")}> {label} </p>
      <p className={cx('text')}>{text}</p>
      {data.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <p className={cx("more-btn")} onClick={() => onViewChange(isSeeLess)} >
        {isSeeLess ? "See Less" : "See more"}
      </p>
      
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default SuggestedAccounts;
