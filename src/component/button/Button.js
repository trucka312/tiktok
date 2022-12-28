import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  disabled = false,
  large = false,
  small = false,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  leftIcon = false,
  rightIcon = false,
  onClick,
  children,
  simple,
  ...passprops
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passprops,
  };
  //remove event 
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key] ;
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    leftIcon,
    rightIcon,
    simple
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('iconleft',)}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('iconright')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.prototype = {
  to :PropTypes.string,
  href :PropTypes.string,
  disabled :PropTypes.bool,
  large :PropTypes.bool,
  small :PropTypes.bool,
  primary :PropTypes.bool,
  outline :PropTypes.bool,
  text :PropTypes.bool,
  rounded :PropTypes.bool,
  leftIcon :PropTypes.node,
  rightIcon :PropTypes.node,
  onClick :PropTypes.func,
  children :PropTypes.node.isRequired,
  simple :PropTypes.bool,
}

export default Button;
