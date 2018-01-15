import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

var CenterRigth = (props) => {
    return (
        <div className="user_module" >
                <div className="user_con">
                    <i></i>
                    <div className="i_noticeRight">
                        <marquee id="index_notice" className="i_noticItem" height="30">
                        </marquee>
                    </div>
                </div>
                <div className="user_pay" >
                    <div className="user_remain">
                        <i></i>
                        <ul>
                            <li className="user_remain_cash">
                                <p>钱包余额</p>
                                <p className="money" >
                                    ￥<span id="money" ></span>
                                </p>
                            </li>
                            <li className="user_remain_btn">
                                <div className="user_getBtn">
                                    <a className="pay" href="#/toPay" id="index_cz">充&nbsp;值</a>
                                    <a className="embody" href="#/draw" id="index_tx">提&nbsp;现</a>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                                <div className="plat_limit_btn">
                                    <Link to="/play_cash.html">查看平台余额</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="user_sign" style={{ float: 'right' }}>
                        <ul>
                            <li className="singn_bor" style={{ float: 'right', border: '0' }}>
                                <div className="singn_con">
                                    <Link activeClassName="active" className="singn_btn" to="/sign_in.html"><i></i><span></span></Link>
                                </div>
                            </li>
                            <li className="" style={{ display: 'none' }}>
                                <div className="task_con">
                                    <a href="#" className="singn_btn"></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
    )
}

export default CenterRigth;