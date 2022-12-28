import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import PropTypes from 'prop-types';

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../popper";
import MenuItem from "./MenuItem.js";
import Header from "./Header";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          keys={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      // visible
      interactive
      delay={[0, 500]}
      offset={[12, 8]}
      hideOnClick = {false}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1))
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children :  PropTypes.node.isRequired,
  items : PropTypes.array,
};

export default Menu;
