import React from 'react';
import { Link } from 'react-router';
//登录状态

var LoginHeader = (props) => {
    var { info, level } = props;
    return (
        <div className="head_right">
            <div className="login_success">
                <div className="portrait fl">
                    <i id="portaritIcon" className={'level_' + level}></i>
                    <h2 className="userHeadName">{info.username}</h2>
                </div>
                <ul className="secc_h_states fl">
                    <li className="userGo">
                        <Link to="my_center.html"><i></i>个人中心</Link>
                    </li>
                    <li className="deposit">
                        <Link to="recharge.html"><i></i>立即存款</Link>
                    </li>
                    <li className="note">
                        <span className="note_tip">{info.msgCount}</span>
                        <Link to="inmail.html"><i></i>站内信</Link>
                    </li>
                    <li className="end" onClick={(e) => { props.logOut() }}>
                        <i></i>
                        <a ><i></i>安全退出</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LoginHeader;