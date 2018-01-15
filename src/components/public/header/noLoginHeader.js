import React, { Component } from 'react';
import { Link } from 'react-router';
// 未登录状态
class NoLoginHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pwd: '',
            captcha: '',
            captchaImg: "/public/captcha.do"
        }
        this.enterDown = this.enterDown.bind(this);
        this.loginSub = this.loginSub.bind(this);
    }
    render() {
        return (
            <div className="head_right">
                <div className="head_login" onKeyDown={this.enterDown} style={{ "border": 0 }}>
                    <div className="head_loginInput">
                        <input type="text"
                            value={this.state.username}
                            placeholder="帐号"
                            onChange={(e) => this.setState({ username: e.target.value })}
                            id="h_username" />
                        <input type="password"
                            value={this.state.pwd}
                            onChange={(e) => this.setState({ pwd: e.target.value })}
                            placeholder="密码"
                            id="h_userpwd"
                            style={{ marginLeft: "5px" }} />
                        <div className="clear"></div>
                    </div>
                    <div className="head_loginCode">
                        <div className="input-group">
                            <input type="text"
                                value={this.state.captcha}
                                onChange={(e) => this.setState({ captcha: e.target.value })}
                                className="form-control"
                                placeholder="验证码" id="h_code" />

                            <span className="hade_code" id="hade_code"
                                onClick={(e) => { this.setState({ captchaImg: "/public/captcha.do?" + Math.random() }) }}>

                                <img alt="验证码" src={this.state.captchaImg} alt="加载中..." />

                            </span>

                            <div className="clear"></div>
                        </div>
                        <a className="hade_go" onClick={this.loginSub} id="hade_go">登 录</a>
                        <Link to="/register.html" className="h_reg">注 册</Link>
                        <Link to="/forgot_pwd.html" className="h_fotgot">忘记密码</Link>
                    </div>
                </div>
            </div>
        )
    }
    enterDown(e) {
        var key = window.event ? e.keyCode : e.which;
        if (key.toString() === "13") {
            var { loginBtn } = this.props;
            loginBtn(this.state.username, this.state.pwd, this.state.captcha);
        }
    }
    loginSub() {
        var { loginBtn } = this.props;
        loginBtn(this.state.username, this.state.pwd, this.state.captcha);
        this.setState({
            captchaImg: "/public/captcha.do?randow"+Math.random()
        })
    }
    componentDidMount() {
        this.setState({
            captchaImg: "/public/captcha.do?" + Math.random()
        })
    }
}
export default NoLoginHeader;