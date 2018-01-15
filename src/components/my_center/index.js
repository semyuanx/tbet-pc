import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MyCenterContainer from './container.js';
import Info from './page/info.js'; //个人信息
import ApplyDiscount from './page/apply_discount.js'; // 申请优惠
import Detailed from './page/detailed.js'; // 账户清单
import Drawings from './page/drawings.js'; // 账户提款
import Lotto from './page/lotto.js'; // 抽奖
import Recharge from './page/recharge.js'; // 账户充值
import Recommend from './page/recommend.js'; // 好友推荐
import SignIn from './page/sign_in.js';// 签到
import PlayCash from './page/play_cash.js'; //平台余额
require('./css/style.css');

var Routers = (
     <Route path="/my_center.html" component={MyCenterContainer}>
        <IndexRoute component={Info} />
        <Route path="/apply_discount.html" component={ApplyDiscount} />
        <Route path="/detailed.html" component={Detailed} />
        <Route path="/drawings.html" component={Drawings} />
        <Route path="/lotto.html" component={Lotto} />
        <Route path="/recharge.html" component={Recharge} />
        <Route path="/recommend.html" component={Recommend} />
        <Route path="/sign_in.html" component={SignIn} />
        <Route path="/play_cash.html" component={PlayCash} />
    </Route>
)
export default Routers;