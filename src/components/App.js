import React, { Component } from 'react';
import LoginPop from './public/login-pop'
import {setLoginPop} from '../redux/action';
import { connect } from 'react-redux';
import Footer from './public/footer'; // 头部
import Header from './public/header'; // 底部
import Loading from './public/loading'; //加载控件
import { BackTop } from 'antd';
import 'antd/lib/back-top/style/css';
// import 'antd/dist/antd.min.css'

class Container extends Component {
    constructor(props){
        super(props);
    }
    render() {
        // console.log(Cookies)
        var { loading, loginPop } = this.props;
        var load, loginPopDOM;
        if (loading) {
            load = <Loading />;
        }
        if (loginPop) {
            loginPopDOM = <LoginPop dispatch={this.props.dispatch} />
        }
        return (
            <div >
                {load}
                {loginPopDOM}
                <Header 
                    dispatch={this.props.dispatch}
                    loginState ={this.props.loginState} 
                    userInfo={this.props.userInfo} 
                    pageInfo= {this.props.pageInfo} />
                {this.props.children}
                <Footer />
                <BackTop />
            </div>
        )
    }   
}
export default Container;