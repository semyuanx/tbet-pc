import React, { Component } from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import App from '../components/App.js'; //页面容器
import Home from '../components/home';     //首页
import LivePlat from '../components/live_plat'; //真人平台
import Sports from '../components/sports';  //体育投注
import Lottery from '../components/lottery';    //彩票
import VIP from '../components/vip'; //vip尊享
import Activity from '../components/activity'; //优惠活动
import Egame from '../components/egame'; //电子游戏
import MyCenter from '../components/my_center'; //个人中心
import InMail from '../components/in_mail'; //站内信
import ErrorPage from '../components/404'; // 404页面
import About from '../components/about'; //关于我们
import Register from '../components/register'; //注册页面
import ForgotPwd from '../components/forgot_pwd';//忘记密码
import { requireAuthentication } from './requireAuthentication';

// 路由配置
const RouteConfig = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            {About}
            <Route path="/liveplat.html" component={requireAuthentication(LivePlat)} onEnter={this.goTop} />
            <Route path="/sports.html" component={requireAuthentication(Sports)} onEnter={this.goTop} />
            <Route path="/lottery.html" component={requireAuthentication(Lottery)} onEnter={this.goTop} />
            <Route path="/vip.html" component={VIP} onEnter={this.goTop} />
            <Route path="/activity.html" component={Activity} onEnter={this.goTop} />
            {Egame}
            {MyCenter}
            <Route path="/inmail.html" component={requireAuthentication(InMail)} onEnter={this.goTop} />
            <Route path='/register.html' component={Register} onEnter={this.goTop} />
            <Route path='/forgot_pwd.html' component={ForgotPwd} onEnter={this.goTop} />
            <Route path='/404.html' component={ErrorPage} onEnter={this.goTop} />
            <Redirect from='*' to='/404.html' />
        </Route>
    </Router>
)


export default RouteConfig;