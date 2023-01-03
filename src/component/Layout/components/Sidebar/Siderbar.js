import { useState, useEffect,  } from "react";

import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import config from "../../../../config";
import SuggestedAccounts from "../../../SuggestedAccounts/SuggetedAccounts";
import About from "../../../About/About";

import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  GroupUserIcon,
  BigLiveIcons,
  HomeIconActive,
  GroupUserIconActive,
  BigLiveIconsActive,
} from "../../../Icons";
import * as userSuggestedServices from "../../../../apiServices/userSuggestedService";
import Discover from "../../../Discover/Discover";

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
  const [isSeeLess, setIsSeeLess] = useState(false);
  const [page, setPage] = useState(INIT_PAGE);
  const [suggestedUser, setSuggestedUser] = useState([]);

  useEffect(() => {
    userSuggestedServices
      .getSuggested({ page  , perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUser(prevUsers => [...prevUsers, ...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page] );

  const handleViewChange = (isSeeLess) => {
    setIsSeeLess((prevState) => !prevState);
    
    if (!isSeeLess) {
      setPage(page + 1);
    }else{
      setPage(page);
    }
  };

  return (
    <aside className={cx("wapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeIconActive />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<GroupUserIcon />}
          activeIcon={<GroupUserIconActive />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<BigLiveIcons />}
          activeIcon={<BigLiveIconsActive />}
        />
      </Menu>

      {/* suggeted account */}

      <SuggestedAccounts
        label="Suggested accounts"
        data={suggestedUser}
        isSeeLess={isSeeLess}
        onViewChange={handleViewChange}
      />

      {/* following */}
      <SuggestedAccounts label="Following accounts" text="Accounts you follow will appear here" />
      
      {/* discover */}
      <Discover title='Discover' />
      
      {/* about */}
      <About />
    </aside>
  );
}

export default Sidebar;
