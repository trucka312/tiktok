import classNames from "classnames/bind";
import styles from "./BodyItem.module.scss";
import Image from "../../../../Image";
import  {MusicIcon} from "../../../../Icons";
import Button from "../../../../button";
import Video from "../../../../Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function BodyItem({ srcvideo, srcimg , musiclink, description, sharecount, likecount, commentcount}) {
  return (
    <div className={cx("wapper")}>
      <div className={cx("container")}>
        {/* left */}
        <div className={cx("left")}>
          <Image src={srcimg} className={cx("avarta")} alt="avarta" />
        </div>

        {/* mid */}
        <div className={cx("mid")}>
          <div className={cx("name-container")}>
            <a href="." className={cx("name-link")}>
              <h3 className={cx("nickname")}>Mai anh thu</h3>
            </a>
            <h4 className={cx("realname")}>Mai Anh Thu</h4>
          </div>
            <span className={cx("description")}> {description}
            <a href={musiclink} className={cx("description-link")}>
              {musiclink}
            </a>
            </span>
          <div className={cx("music-container")}>
            <MusicIcon />
            <a href="." className={cx("music-link")}>
              {musiclink}
            </a>
          </div>

          <div className={cx("content")}>
            <div className={cx("video")}>
                <Video src={srcvideo} />
            </div>
            <div className={cx("actions")}>
              <button className={cx('action-btn')}>
                <div className={cx('actions-container--icon')}>
                    <FontAwesomeIcon icon={faHeart} className={cx('action-icon')}/>
                </div>
                <strong className={cx('action-text')}>{likecount}</strong>
              </button>
              <button className={cx('action-btn')}>
                <div className={cx('actions-container--icon')}>
                <FontAwesomeIcon icon={faCommentDots}className={cx('action-icon')} />
                    
                </div>
                <strong className={cx('action-text')}>{commentcount}</strong>
              </button>
              <button className={cx('action-btn')}>
                <div className={cx('actions-container--icon')}>
                <FontAwesomeIcon icon={faShare} className={cx('action-icon')}/>
                    
                </div>
                <strong className={cx('action-text')}>{sharecount}</strong>
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className={cx("right")}>
          <Button outline  children="Follow" />
        </div>
      </div>
    </div>
  );
}

export default BodyItem;
