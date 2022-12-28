import classNames from "classnames/bind";
import styless from "./Body.module.scss";
import BodyItem from "./BodyItem/BodyItem";

const cx = classNames.bind(styless);

function Body() {

    return ( 
        <div className={cx('wapper')}>
           <BodyItem srcvideo="https://v16-webapp.tiktok.com/732706144680177aa5aecc594a08e645/63acb184/video/tos/useast2a/tos-useast2a-pve-0037-aiso/c31970c192c14b72bfc6bc78d9229406/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=676&bt=338&cs=0&ds=3&ft=4b~OyM3a8Zmo0My5.64jVwedPpWrKsdm&mime_type=video_mp4&qs=0&rc=ZGVnODU3OTs3PDVoNDtoOUBpaml1cDg6Zjd2ZTMzZjgzM0AyMV82MTY0XzAxLjRiLjQxYSNpbDNgcjRvcG9gLS1kL2Nzcw%3D%3D&l=202212281510406EB230A934815629F8B4&btag=80000" musiclink="  #duyen duyen so so" description="something went wrong" commentcount="623" sharecount="128" likecount="23940" srcimg="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b3643d46fc72cab1d7de6a627c690af2.jpeg?x-expires=1672419600&x-signature=5iMKv7f5KPxX%2FUqffUuew0o5Kc0%3D"/>
           <BodyItem srcvideo="https://v16-webapp.tiktok.com/3e062ec39163969569459b4883ac377a/63acb093/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oIXJmf6BhUOIoY046nt3rInAKsupxznhhQNAAN/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4510&bt=2255&cs=0&ds=3&ft=4b~OyM3a8Zmo0BB5.64jVXhqPpWrKsdm&mime_type=video_mp4&qs=0&rc=N2k1O2lmNGY8OGRoNWY2ZEBpajk6ZTw6Zm1vaDMzZjgzM0BfYjFiYjEvX2ExX19fLS8vYSNpZWhxcjRva2dgLS1kL2Nzcw%3D%3D&l=202212281509076EB230A934815629CC7B&btag=80000" musiclink="  #duyen duyen so so #hana camtien" description="nhac hay moi ngay" commentcount="182" sharecount="29930" likecount="993094" srcimg="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b755e3cf478e5c6126207134cca3a528~c5_100x100.jpeg?x-expires=1672412400&x-signature=brIa1KxXdQKqMhapDwe5zKx7CFs%3D"/>
        </div>
    );
}

Body.prototype = {

};

export default Body;