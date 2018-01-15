import React, { Component } from 'react';
import {Link} from 'react-router';
import ajax from 'superagent';
import {getPageState,setLoginPop} from '../../../redux/action'
import './css/style.css';


class loginPop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:"",
            account:"",
            code:"",
            errorMsg:""
        }
        this.sub = this.sub.bind(this);
        this.closePop = this.closePop.bind(this);
    }
    render() {
        return (
            <div className='loginPop'>
                <div className="popCover"></div>
                <div className="popMain">
                    <div className="modal_h">
                        <span 
                            onClick={this.closePop} 
                            className="closePop">×</span>
                    </div>
                    <div className="modal_m">
                        <div className="modal_tx">
                            <span className="modal_hr_l"></span>
                            <span className="modal_hr_r"></span>
                            <span className="modal_erro error">
                                {this.state.errorMsg?this.state.errorMsg:"立即登录　更多精彩"}
                            </span>
                        </div>
                        <div className="modal_grop">
                            <div className="loginInput">
                                <div className="input_row phone">
                                    <label ></label>
                                    <input 
                                        onChange={(e)=>{this.setState({account:e.target.value})}}
                                        value={this.state.account} 
                                        type="text" 
                                        placeholder="用户名" 
                                    />
                                    <div className="clear"></div>
                                </div>
                                <div className="input_row pswor">
                                    <label ></label>
                                    <input type="password" 
                                        id="pop_userpwd" 
                                        placeholder="密码"
                                        onChange={(e)=>{this.setState({password:e.target.value})}}
                                         />
                                    <Link onClick={this.closePop} to="/forgot_pwd.html">忘记密码？</Link>
                                    <div className="clear"></div>
                                </div>
                                <div className="input_row no_bor popCode">
                                    <label ></label>
                                    <input 
                                        type="text"
                                        id="pop_code" 
                                        placeholder="验证码"
                                        onChange={(e)=>{this.setState({code:e.target.value})}}
                                         />
                                    <span className="popCode" id="popCode">
                                        <img src="/public/captcha.do?0.21911672728794995"
                                            alt="正在加载中..." />
                                    </span>
                                    <div className="clear">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="modal_goLogin" onClick={this.sub}></a>
                        <p className="modal_reg">还没有T博账号？
                            <Link onClick={this.props.closePop} to="/register.html">立即注册&gt;&gt;</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    closePop(){
        //关闭弹窗
        this.props.dispatch(setLoginPop(false));
    }
    sub() {
        //弹窗登录
        var {account,password,code} = this.state,
            {dispatch} = this.props,
            _this = this;

        dispatch({
            type: 'loading',
            loadState: true
        });
        ajax
            .post('/public/login.do')
            .query({ 'username': account, 'password': password, 'captcha': code })
            .then(function(res){
                var data = res.text?JSON.parse(res.text):null;
                dispatch({
                    type: 'loading',
                    loadState: false
                });
                if(data.Status === 200){
                    window.Login = true;
                    // message.success('登录成功');
                    window.userinfo = data.Data;
                    // 获取用户信息
                    dispatch(getPageState())
                    dispatch(setLoginPop(false));
                }else{
                    _this.setState({
                        errorMsg:data.Msg
                    })
                }
            })
    }
}


export default loginPop;