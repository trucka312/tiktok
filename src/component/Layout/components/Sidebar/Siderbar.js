import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import config from "../../../../config";
import SuggestedAccounts from "../../../SuggestedAccounts/SuggetedAccounts";

import Menu, { MenuItem } from "./Menu";
import {HomeIcon, GroupUserIcon, BigLiveIcons,HomeIconActive, GroupUserIconActive, BigLiveIconsActive,} from "../../../Icons"

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wapper")}>
      <Menu >
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />}/>
        <MenuItem title="Following" to={config.routes.following} icon={<GroupUserIcon />} activeIcon={<GroupUserIconActive />}/>
        <MenuItem title="LIVE" to={config.routes.live} icon={<BigLiveIcons />} activeIcon={<BigLiveIconsActive />}/>
      </Menu>

      {/* suggeted account */}

      <SuggestedAccounts label='Suggested accounts' />
    </aside>
  );
}

export default Sidebar;
