/**
 * 个人中心首页
 */
import React, { Component } from 'react';
import { message } from 'antd';
import { init, goLoginOut, getUserBankList } from '../../../redux/action.js';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import ajax from 'superagent';
import BinInfo from './info/bin_info'; //绑定用户信息
import BinCart from './info/bin_cart'; //绑定银行卡

class Info extends Component {
    constructor(props) {
        super(props);
        this.binName   = this.binName.bind(this);
        this.binEmail  = this.binEmail.bind(this);
        this.changePwd = this.changePwd.bind(this);
        this.binPhone  = this.binPhone.bind(this);
        this.bindCard  = this.bindCard.bind(this);
    }
    render() {
        return (
            <div>
                <BinInfo
                    info={this.props.userInfo}
                    binName={this.binName}
                    binEmail={this.binEmail}
                    changePwd={this.changePwd}
                    binPhone={this.binPhone}
                />
                <BinCart
                    userBankList={this.props.userBankList}
                    trueName={""}
                    bindCard={this.bindCard}
                />
            </div>
        )
    }
    binName(name) { //绑定真实姓名方法
        ajax
            .post("/user/real_name.do")
            .query({ real: name })
            .then(function (res) {
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    message.success('绑定成功');
                } else if (data.Status === 600) {
                    window.location.reload();
                } else {
                    message.error(data.Msg);
                }
            })
    }
    binEmail(code) { //绑定邮箱方法 
        ajax
            .post("/user/email_verify.do")
            .query({ email_code: code })
            .then(function (res) {
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    message.success('绑定成功');
                } else if (data.Status === 600) {
                    window.location.reload();
                } else {
                    message.error(data.Msg);
                }
            })
    }
    changePwd(codeType, codeVal, pwd1, pwd2) { //修改密码
        ajax
            .post("/user/update_pwd_update.do")
            .query({
                code_type: codeType,
                code_value: codeVal,
                pwd_new: pwd1,
                pwd_sure: pwd2
            })
            .then(function (res) {
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    message.success("修改成功");
                    browserHistory.push("/");
                    window.Login = false;

                } else {
                    message.error(data.Msg)
                }
            })
    }
    binPhone(code) { //绑定手机
        ajax
            .post("/user/phone_verify.do")
            .query({ phone_code: code })
            .then(function (res) {
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    message.success("绑定成功");
                } else if (data.Status === 600) {
                    window.location.reload();
                } else {
                    message.error(data.Msg);
                }
            })
    }
    bindCard(bank_code, yhkh, khhzh) {
        ajax
            .post("/cash/bank_add.do")
            .query({ bank_code, yhkh, khhzh })
            .then(function (res) {

                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    message.success("绑定成功");
                } else if (data.Status === 600) {
                    window.location.reload();
                } else {
                    message.error(data.Msg);
                }
            })

    }
    componentDidMount() {


    }
}


export default Info;