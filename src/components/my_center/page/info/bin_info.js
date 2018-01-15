/**
 * 绑定个人信息
 */
import ajax from 'superagent';
import React, { Component } from 'react';
import { message } from 'antd';

// 头部
var BinInfoHead = () => (
    <h3 className="u_index_title">个人资料完善：
                     <span>为保障您的账户安全，*个人资料*不可自行修改，如需修改请联系</span>
        <a target="_blank"
            className="u_index_server"
            href="http://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=387948&configID=47009&jid=6484960942">
        </a>
    </h3>
)

//绑定姓名
class BinName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:""
        }
        this.binNameBtn = this.binNameBtn.bind(this);
    }
    render() {
        var { trueName } = this.props;
        if (trueName) {
            return (
                <div className="u_perInput fl">
                    <div className="user_input perInput">
                        <label >真实姓名：</label>
                        <div className="bin_over" id="user_trueName" >
                            <p>{trueName}</p>
                        </div>
                    </div>
                    <div style={{ clear: "both" }}></div>
                </div>
            )
        } else {
            return (
                <div className="u_perInput fl">
                    <div className="user_input perInput">
                        <label >真实姓名</label>
                        <div className="trueName_onread" >
                            <input type="text" placeholder="请输入真实姓名"
                                style={{ width: "245px" }}
                                value={this.state.name}
                                onChange={(e) => { this.setState({ name: e.target.value }) }}
                                className="form-control" />
                            <a onClick={this.binNameBtn}>确定</a>
                        </div>
                    </div>
                    <div style={{ clear: "both" }}></div>
                </div>
            )
        }
    }
    binNameBtn() {
        const pattern = /^[\u4E00-\u9FA5]{2,4}$/;
        var txt = this.state.name.trim();
        if (!pattern.exec(txt)) {
            message.error("请输入中文名");
            return false;
        }
        var { binName } = this.props;
        binName(this.state.name);
    }
}

//修改密码

class ChangePwd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            count: 60,
            sendStatus: false,
            tipStatus: false,
            sendType: "",
            newPwd: '',
            newPwd1: '',
            errorMsg: '',
            changePwdCode: ''
        }
        this.openInput = this.openInput.bind(this);
        this.getCode = this.getCode.bind(this);
        this.changePwdSub = this.changePwdSub.bind(this);
    }
    render() {
        var dom;
        if (this.state.status) {
            // 获取父组件的值 绑定邮箱状态及绑定手机状态
            var { binStatus } = this.props;
            var child = [<option key={-1}>请选择</option>];
            // 循环生成下拉框的值
            for (var i = 0; i < binStatus.length; i++) {
                child.push(<option key={i} value={binStatus[i].value}>{binStatus[i].name}</option>)
            }
            // 倒计时
            if (this.state.sendStatus) {
                this.timer = setInterval(function () {
                    var { count } = this.state;
                    this.state.sendStatus = false;
                    count -= 1;
                    if (count < 1) {
                        this.setState({
                            tipStatus: false
                        })
                        count = 60

                        clearInterval(this.timer);
                    }
                    this.setState({
                        count
                    })
                }.bind(this), 1000)
            }

            dom = (<div className="openChagePwd">
                <div className="openVerifyDom">
                    <div className="user_verify">
                        <label>验证方式</label>
                        <select
                            onChange={(e) => { this.setState({ sendType: e.target.value != "请选择" ? e.target.value : -1 }) }}
                            className="form-control">
                            {child}
                        </select>
                        <a id="getChgePwdCode"
                            className="getChageCode"
                            onClick={this.getCode}
                            style={this.state.count < 60 ? { backgroundColor: '#ccc', color: "#333" } : {}}
                        >{this.state.count === 60 ? '获取验证码' : this.state.count + '秒后重发'}</a>
                        <input type="text"
                            value={this.state.changePwdCode}
                            onChange={(e) => { this.setState({ changePwdCode: e.target.value }) }}
                            className="form-control"
                            placeholder="输入验证码" />
                    </div>
                    <span className="perHint" id="getCodeTip">{this.state.errorMsg}</span>
                    <div className="h15"></div>
                </div>
                <div className="clear"></div>
                <div className="newInput">
                    <input type="password"
                        placeholder="请输入新密码"
                        value={this.state.newPwd}
                        onChange={(e) => { this.setState({ newPwd: e.target.value }) }}
                        className="form-control" />
                    <input
                        type="password"
                        placeholder="请再次输入新密码"
                        value={this.state.newPwd1}
                        onChange={(e) => { this.setState({ newPwd1: e.target.value }) }}
                        className="form-control" />
                    <span className="perHint chageTip" style={{ marginLeft: "0" }}>{this.state.errorMsg}</span>
                </div>
                <div className="clear"></div>
                <div className="changePwdBtn" id="changePwdBtn">
                    <div style={{ height: '10px' }}></div>
                    <a className="confirm" onClick={this.changePwdSub}>确定</a>
                    <a className="close" onClick={this.openInput} id="chegePwdClose">取消</a>
                </div>
                <div className="clear"></div>
            </div>)
        } else {
            dom = (<div id="chageFrDom">
                <label>修改密码</label>
                <span onClick={this.openInput} className="openBinBtn" id="chegePwd">点击修改密码</span>
            </div>)
        }
        return (
            <div className="u_perInput fr">
                <div className="user_input perInput">
                    {dom}
                </div>
            </div>
        )
    }
    openInput() { //点击修改密码按钮
        var { binStatus } = this.props;
        if (binStatus.length > 0) {
            var { status } = this.state;
            this.setState({
                status: !status
            })
        } else {
            message.error("请先绑定邮箱或手机");
        }
    }
    getCode(value) { //获取验证码
        var { sendType, newPwd, newPwd1, sendStatus, tipStatus } = this.state;
        var pattern = /^[A-Za-z0-9]{8,15}$/;
        if (!newPwd || !newPwd1) {
            this.setState({ errorMsg: "请填写密码" })
            return false;
        }
        if (!pattern.exec(newPwd) || !pattern.exec(newPwd1)) {
            this.setState({ errorMsg: "密码格式错误" })
            return false;
        }
        if (newPwd != newPwd1) {
            this.setState({ errorMsg: "两次密码不一致" })
            return false;
        }
        if (sendType) {
            var _this = this;
            if (!tipStatus) {
                this.setState({ tipStatus: true })
                ajax
                    .post("/user/update_pwd_code.do")
                    .query({ code_type: sendType })
                    .then(function (res) {
                        var data = res.text ? JSON.parse(res.text) : null;
                        if (data.Status === 200) {
                            _this.setState({
                                errorMsg: "",
                                sendStatus: true
                            })
                        } else if (data.Status === 600) {
                            window.location.reload();
                        } else {
                            message.error(data.Msg);
                        }
                    })
            }

        } else {
            this.setState({ errorMsg: "请选择验证方式" })
        }
    }
    changePwdSub() {
        var { sendType, changePwdCode, newPwd, newPwd1 } = this.state;
        var pattern = /^[A-Za-z0-9]{8,15}$/;
        if (changePwdCode) {
            message.error("请输入验证码");
            return false;
        }
        if (!newPwd || !newPwd1) {
            this.setState({ errorMsg: "请填写密码" })
            return false;
        }
        if (!pattern.exec(newPwd) || !pattern.exec(newPwd1)) {
            this.setState({ errorMsg: "密码格式错误" })
            return false;
        }
        if (newPwd != newPwd1) {
            this.setState({ errorMsg: "两次密码不一致" })
            return false;
        }

        this.props.changePwd(sendType, changePwdCode, newPwd, newPwd1);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

// 绑定邮箱
class BinEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            sendStatus: false,
            codeState: false,
            email: "",
            emailCode: "",
            count: 59,
            agentGetCode: false,
            tipStatus: true
        }
        this.sendCode = this.sendCode.bind(this);
        this.agentSend = this.agentSend.bind(this);
        this.binEmailBtn = this.binEmailBtn.bind(this);
    }
    render() {
        var { binEmailStatus, binEmailValue } = this.props, //获取页面初始化值
            { status, sendStatus, codeState, emailCode, agentGetCode, count } = this.state,
            dom;
        // 倒计时
        if (this.state.agentGetCode) {
            this.timer = setInterval(function () {
                var { count } = this.state;
                this.state.agentGetCode = false;
                count -= 1;
                if (count < 1) {
                    this.setState({
                        tipStatus: true
                    })
                    count = 60

                    clearInterval(this.timer);
                }
                this.setState({
                    count
                })
            }.bind(this), 1000)
        }

        if (binEmailStatus > 0) {
            dom = (<div className="bin_over" >
                <p id="binEmailVal" className="emailDom" >{binEmailValue}</p> <span>已绑定</span>
            </div>)
        } else {
            var binEmailDom; //第一次点击绑定邮箱按钮后的dom
            var disable = this.state.agentGetCode ? "disable='disable'" : "";
            if (status) {
                if (!sendStatus && !codeState) {
                    binEmailDom = (<div className="openChageEail" >
                        <div className="agin_code" >
                            <input type="text"
                                value={this.state.email ? this.state.email : binEmailValue}
                                onFocus={(e) => { e.target.value = "" }}
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                                className="form-control"
                                ref="myEmail"
                            />
                            <a onClick={this.sendCode} className="getCodeBtn">点击获取验证码</a>
                            <div style={{ clear: "both" }}></div>
                        </div>
                        <div className="h25"></div>
                        <div className="binEmail_suss" >
                            <div className="changePwdBtn" id="changeEmailBtn">
                                <a className="close" onClick={(e) => { this.setState({ status: false, codeState: false }) }} >取消</a>
                            </div>
                        </div>
                    </div>)
                } else if (sendStatus && codeState) {
                    binEmailDom = (<div className="openChageEail" >
                        <div className="agin_code" >
                            <input
                                type="text"
                                value={emailCode}
                                onChange={(e) => { this.setState({ emailCode: e.target.value }) }}
                                className="form-control" />
                            <a className={(count < 60) ? 'closeCode' : ''} onClick={this.agentSend} >
                                {(count === 60) ? '重新发送' : count + '秒后重发'}
                            </a>
                            <div style={{ clear: "both" }}></div>
                            <span className="perHint ">验证码已发送，请注意查收</span>
                            <div style={{ clear: "both" }}></div>
                        </div>
                        <div className="binEmail_suss" >
                            <div className="changePwdBtn" id="changeEmailBtn">
                                <a className="confirm" onClick={this.binEmailBtn} >确定</a>
                                <a className="close" onClick={(e) => { this.setState({ status: false, sendStatus: true }) }} >取消</a>
                            </div>
                        </div>
                    </div>)
                }
            } else {
                binEmailDom = (
                    <span className="openBinBtn" onClick={(e) => { this.setState({ status: true }) }}>点击绑定邮箱</span>
                )
            }
            dom = (<div className="binEmail_read" >
                {binEmailDom}
            </div>)
        }

        return (
            <div className="u_binEmail u_perInput">
                <div className="user_input perInput">
                    <label>绑定邮箱</label>
                    {dom}
                    <div style={{ clear: "both" }}></div>
                </div>
            </div>
        )
    }
    sendCode(e) { //发送验证码按钮
        var { email } = this.state;
        var emailValue = this.refs.myEmail;
        var val;
        if (email) {
            var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!pattern.exec(email)) {
                message.error("邮箱格式错误")
                return false;
            }
            val = email;
        } else {
            val = "";
        }
        var that = this;
        ajax
            .post("/user/email.do")
            .query({ email: val })
            .then(function (res) {
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    message.success("邮件已发送请注意查收")
                    that.setState({
                        sendStatus: true,
                        codeState: true,
                        agentGetCode: true
                    })
                } else {
                    message.error(data.Msg)
                }
            })

    }
    agentSend() {
        // 再次发送验证码
        if (this.state.count === 60 && this.state.tipStatus) {
            this.setState({ tipStatus: false })
            var email = this.state.email ? this.state.email : this.props.emailValue;
            var that = this;
            ajax
                .post("/user/email.do")
                .query({ email })
                .then(function (res) {
                    var data = res.text ? JSON.parse(res.text) : null;
                    if (data.Status === 200) {
                        message.success("邮件已发送请注意查收")
                        that.setState({ agentGetCode: true })
                    } else {
                        message.error(data.Msg)
                    }
                })
        }
    }
    binEmailBtn() {
        var { emailCode } = this.state;
        if (!emailCode) {
            message.error("请填写验证码")
            return false;
        }
        this.props.binEmailSub(emailCode)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
}


// 绑定手机
class BinPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            subStatus: false,
            phone: "",
            phoneCode: '',
            codeStatus: false,
            count: 59,
            agentCodeStatus: false
        }
        this.getCode = this.getCode.bind(this);
        this.getAgentCode = this.getAgentCode.bind(this);
        this.binTelBtn = this.binTelBtn.bind(this);
    }
    render() {
        var { binPhoneStatus, binPhoneValue } = this.props,// 获取页面初始化值
            { status, subStatus, phone, phoneCode, codeStatus } = this.state,
            dom;
        //倒计时
        if (codeStatus) {
            this.timer = setInterval(function () {
                var { count } = this.state;
                this.setState({ codeStatus: false });
                count -= 1;
                if (count < 1) {
                    count = 60;
                    clearInterval(this.timer)
                    this.setState({ agentCodeStatus: true })
                }
                this.setState({ count });
            }.bind(this), 1000)
        }

        if (Number(binPhoneStatus)) {
            dom = (<div className="bin_over">
                <p className="emailDom" id="binPhoneVal">{binPhoneValue}</p>
                <span>已绑定</span>
            </div>)
        } else {
            var subdom, smdom;
            if (status) {
                if (subStatus) {
                    smdom = (<div className="binPhone_suss" >
                        <input type="text"
                            placeholder="请输入验证码"
                            value={phoneCode}
                            onChange={(e) => { this.setState({ phoneCode: e.target.value }) }}
                            className="form-control" />
                        <a onClick={this.getAgentCode} className={(this.state.count < 60) ? 'closeCode' : ''}>
                            {this.state.count < 60 ? this.state.count + '秒后重发' : "重新发送"}
                        </a>
                        <span className="perHint">验证码已经发送，请注意查收</span>
                        <div className="clear"></div>
                        <div className="changePwdBtn">
                            <a onClick={this.binTelBtn} className="confirm">确定</a>
                            <a onClick={(e) => { this.setState({ status: false }) }} className="close">取消</a>
                        </div>
                    </div>)
                } else {
                    smdom = (<div className="agin_code" >
                        <input type="text"
                            id="phoneName"
                            value={phone ? phone : binPhoneValue}
                            onChange={(e) => { this.setState({ phone: e.target.value }) }}
                            onFocus={(e) => { e.target.value = "" }}
                            className="form-control" />
                        <a onClick={this.getCode} >点击获取验证码</a>
                    </div>)

                }
                subdom = (smdom);
            } else {
                subdom = (<span onClick={(e) => { this.setState({ status: true }) }} className="openBinBtn" >点击绑定手机</span>);
            }
            dom = (<div className="binPhone_read" >{subdom}</div>)
        }
        return (
            <div>
                <div className="bin_phone u_perInput">
                    <div className="user_input perInput">
                        <label>绑定手机</label>
                        {dom}
                    </div>
                </div>
                <div className="clear"></div>
                <div className="h25"></div>
            </div>
        )
    }
    getCode() {
        var { phone } = this.state;
        const pattern = /^0?1\d{10}$/;
        if (!pattern.exec(phone) && phone) {
            message.error("手机号格式错误");
            return false;
        }
        var val = phone ? phone : '';
        var _this = this;
        console.log(val)
        ajax
            .post("/user/phone.do")
            .query({ phone: val })
            .then(function (res) {
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    _this.setState({
                        subStatus: true,
                        codeStatus: true
                    })
                } else {
                    message.error(data.Msg);
                }
            })
    }
    getAgentCode() {
        var { agentCodeStatus, phone } = this.state;
        if (agentCodeStatus) {
            var val = phone ? phone : '';
            var _this = this;
            ajax
                .post("/user/phone.do")
                .query({ phone: val })
                .then(function (res) {
                    var data = res.text ? JSON.parse(res.text) : null;
                    if (data.Status === 200) {
                        _this.setState({
                            codeStatus: true,
                            agentCodeStatus: false,
                            count: 59
                        })
                    } else {
                        message.error(data.Msg);
                    }
                })
        }
    }
    binTelBtn() { //绑定手机
        var { phoneCode } = this.state;
        if (!phoneCode) {
            message.error("请输入验证码");
            return false;
        }
        this.props.binPhoneSub(phoneCode);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
}


//注册时间
var RegTime = (props) => (
    <div className="u_binEmail u_perInput">
        <div className="user_input perInput">
            <label>注册时间</label>
            <div className="bin_over" id="ctime">{props.regTime}</div>
        </div>
        <div className="clear"></div>
    </div>
)

//绑定谷歌
var BinGoogle = (props) => {
    return (
        <div className="bin_phone u_perInput">
            <div className="user_input perInput">
                <label>动态验证</label>
                <span className="openBinBtn googleBinBtn" style={{ width: "315px" }} id="googleBinBtn">点击动态验证</span>
                <div className="bin_over googleSucc" id="googleSucc"><span>已绑定</span></div>
            </div>
            <div className="clear"></div>
        </div>
    )
}

var BinInfo = (props) => {
    var { info, binName } = {
                            info:{bind_mail:0,info_bind_tel:0},
                        };
    var binStatus = [];
    if (info.bind_mail > 0) {
        var binMailStatus = { name: "邮箱", value: 1 }
        binStatus.push(binMailStatus);
    }
    if (info.info_bind_tel > 0) {
        var binTelStatus = { name: "手机", value: 2 }
        binStatus.push(binTelStatus);
    }
    return (
        <div className="u_perfect">
            <BinInfoHead />

            <BinName
                trueName={info.true_name}
                binName={binName}
                binStatus={binStatus}
            />

            <ChangePwd
                binStatus={binStatus}
                changePwd={props.changePwd}
            />

            <div style={{ clear: "both" }}></div>
            <div className="h25"></div>

            <BinEmail
                binEmailStatus={info.bind_mail}
                binEmailValue={info.email}
                binEmailSub={props.binEmail}
            />

            <BinPhone
                binPhoneStatus={info.bind_tel}
                binPhoneValue={info.telephone}
                binPhoneSub={props.binPhone}
            />

            <RegTime
                regTime={info.reg_time}
            />

            <BinGoogle />

            <div className="clear h50"></div>
            <div className="user_line"></div>
        </div>
    )
}



export default BinInfo;