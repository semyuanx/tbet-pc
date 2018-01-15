import React, { Component } from 'react';
import Nav from '../public/nav'; //导航
require('./css/style.css');

//忘记密码dom
var ForgotPwdDOM = (props) => {
    return (
        <div>
            <div className="subBanner">
                <div className="ban_item">
                    <img src={require('./img/register.jpg')} height="502px" />
                </div>
            </div>
            <div className="register">
                <div className="reg_title">

                    <div className="w1200 kefu">忘记密码？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您可以通过注册时绑定邮箱或手机找回密码！
                            <a target="_blank" href="http://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=387948&configID=47009&jid=6484960942">
                            <img src={require('./img/user_service.png')} />
                        </a>
                    </div>
                </div>
                <div className="reg_main w1200">
                    <h2 className="regM_title">找回密码</h2>
                    <div className="regM_main">
                        <div className="reg_from">
                            <div className="reg_group reg_name">
                                <label >用户名：</label>
                                <input type="text" id="for_usename" placeholder="用户名" />
                                <div className="for_usernameTip">
                                    <i className="state on"></i>
                                    <span className="fast on">请输入注册申请时的用户名</span>
                                </div>
                            </div>
                            <div className="h25"></div>
                            <div className="reg_group">
                                <label>请选择一种验证方式找回密码：</label>
                                <ul className="getPass">
                                    <li className="fl on">电子邮箱</li>
                                    <li className="fr">手机号码</li>
                                </ul>
                            </div>
                            <div className="h25"></div>
                            <div className="emailForgot forgot_email">
                                <div className="reg_group inputBtn">
                                    <label>邮箱验证码：</label>
                                    <div className="input-group fl">
                                        <input type="text" className="form-control" id="fo_emailCode" placeholder="输入验证码" />
                                        <span className="input-group-btn">
                                            <a className="btn btn-default" id="getRegEmailCode">发送验证码</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="forgot_hint">验证码已发送至邮箱，请注意查收</div>
                                <div className="h25"></div>
                            </div>
                            <div className="emailForgot forgot_phone">
                                <div className="reg_group inputBtn">
                                    <label>手机验证：</label>
                                    <div className="input-group fl">
                                        <input type="text" id="fo_phoneCode" className="form-control" placeholder="输入验证码" />
                                        <span className="input-group-btn">
                                            <a className="btn btn-default" id="getRegPhoneCode">发送验证码</a>
                                        </span>
                                    </div>

                                </div>
                                <div className="forgot_hint">验证码已发送至手机，请注意查收</div>
                                <div className="h25"></div>
                            </div>
                            <a className="reg_btn" id="forgotSub">提交</a>
                        </div>
                        <div className="forgotPwd">
                            <div className="reg_group reg_name">
                                <label >输入新密码：</label>
                                <input type="password" id="for_newPwd" placeholder="输入密码" />
                                <i className="state"></i>
                                <span className="fast">密码由8-15个英文或数字组成</span>
                            </div>
                            <div className="h25"></div>
                            <div className="reg_group reg_name">
                                <label >再次输入新密码：</label>
                                <input type="password" id="for_agnNewPwd" placeholder="再次输入密码" />
                                <i className="state on"></i>
                                <span className="fast on">两次密码不一样</span>
                            </div>
                            <div className="h25"></div>
                            <a className="reg_btn" id="forgotPwdSub">提交</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

class ForgotPwd extends Component {
    render() {
        return (
            <div>
                <Nav />
                <ForgotPwdDOM />
            </div>
        )
    }
}

export default ForgotPwd;