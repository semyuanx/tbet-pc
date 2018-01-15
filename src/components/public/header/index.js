//  公用头部 
import React from 'react';
import { connect } from 'react-redux'
import ajax from 'superagent';
import { Link } from 'react-router';
import LoginHeader from './loginHeader';
import NoLoginHeader from './noLoginHeader';
import { goLogin, getPageState,goLoginOut } from '../../../redux/action';
import './css/style.css';
// import 'antd/dist/antd.min.css'

var Header = React.createClass({
    render() {
        var  {pageInfo,loginState,userInfo}  = this.props;
        var html = '';
        if (loginState && pageInfo.username && userInfo) {
            html = <LoginHeader level={userInfo.level} info = {pageInfo}  logOut={this.loginOut} />
        } else {
            html = <NoLoginHeader  loginBtn={this.goLogin} />
        }
        return (
            <div className="head">
                <div className="w1200">
                    <div className="head_left">
                        <Link to="/">
                        <img src={require('./img/logo.png')} alt="T博娱乐" /></Link>
                    </div>
                    {html}
                </div>
            </div>
        )
    },
    goLogin(username, pwd, captcha) {
    },
    loginOut(){

    },
    componentDidMount() {
 
    }
})



export default Header;
