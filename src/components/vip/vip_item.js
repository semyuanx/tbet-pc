import React from 'react';
// 老虎机俱乐部
var VIPSlot = () => (
    <li>
        <div className="vip_pt50"></div>
        <div className="vip_title"><img alt="VIP" src={require('./img/vip_title2.png')} /></div>
        <div className="vip_101"><img alt="VIP" src={require('./img/vip201.png')} /></div>
        <div className="vip_102"><img alt="VIP" src={require('./img/vip202.png')} /></div>
        <div className="vip_103"><img alt="VIP" src={require('./img/vip203.png')} /></div>
        <div className="vip_104"><img alt="VIP" src={require('./img/vip104.png')} /></div>
        <div className="vip_105"><img alt="VIP" src={require('./img/vip106.png')} /></div>
    </li>
)

// 返水俱乐部
var VIPRelease = () => (
    <li>
        <div className="vip_pt50"></div>
        <div className="vip_title"><img alt="VIP" src={require('./img/vip_title2.png')} /></div>
        <div className="vip_101"><img alt="VIP" src={require('./img/vip101.png')} /></div>
        <div className="vip_102"><img alt="VIP" src={require('./img/vip102.png')} /></div>
        <div className="vip_103"><img alt="VIP" src={require('./img/vip103.png')} /></div>
        <div className="vip_104"><img alt="VIP" src={require('./img/vip104.png')} /></div>
        <div className="vip_105"><img alt="VIP" src={require('./img/vip105.png')} /></div>
    </li>
)

var VIPItem = (props) => {
    let { active } = props;
    var dom = "";
    if (active === 0) {
        dom = <VIPSlot />;
    } else {
        dom = <VIPRelease />;
    }
    return (
        <div className="vip_subItem ">
            <ul className="vip_subContent">
                {dom}
            </ul>
        </div>
    )
}

export default VIPItem;
