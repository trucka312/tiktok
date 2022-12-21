import classNames from "classnames/bind";
import styless from "./Body.module.scss";
import PropTypes from 'prop-types';
import AccountPreview from "../../../SuggestedAccounts/AccountPreview";


const cx = classNames.bind(styless);

function Body() {
    return ( 
        <div className={cx('waraper')}>
            <div className={cx('container')} >
            
                {/* top */}
                <AccountPreview />

                
            </div>
            
        </div>
    );
}

Body.prototype = {

};

export default Body;