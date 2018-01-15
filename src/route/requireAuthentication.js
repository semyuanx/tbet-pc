import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setLoginPop} from '../redux/action';
export function requireAuthentication(Component) {
    // 组件有已登陆的模块 直接返回 (防止从新渲染)
    if (Component.AuthenticatedComponent) {
        return Component.AuthenticatedComponent
    }
    class AuthenticatedComponent extends Component {
        static contextTypes = {
            router: React.PropTypes.object.isRequired,
        }
        componentWillMount() {
            this.checkAuth();
        }
        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }
        checkAuth() {

            // 判断登陆
            const token = window.Login;
            const login = token ?  1:null;
            // 未登陆重定向到登陆页面
            if (!login) {
                this.props.dispatch(setLoginPop(true));
                this.context.router.push("/");
                return;
            }
        }
        render(){
            return(<Component {...this.props}/>)           
        }
    }
    function store2props(store) {
        return {}
    }
    Component.AuthenticatedComponent = connect(store2props)(AuthenticatedComponent);
    return Component.AuthenticatedComponent;
}