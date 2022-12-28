import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from './DefaultLayout.module.scss'
import Body from "../components/Body";

const cx = classNames.bind(styles);

function DefaultLayout () {
    return (
        <div className={cx('wapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                    <Body />    
                {/* <div className={cx('content')}>
                    {children}
                </div> */}

            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children : PropTypes.node.isRequired,
}

export default DefaultLayout;