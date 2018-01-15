import React, { Component } from 'react';
import { Link } from 'react-router';

var CenterLeftLink = () => (
    <ul className="user_gameItem" >
        <li className="far_game">
            <Link to="/pt.html">电子游戏</Link>
        </li>
        <li>
            <Link to="/liveplat.html">真人娱乐</Link>
        </li>
        <li>
            <Link to="/sports.html">体育投注</Link>
        </li>
        <li>
            <Link to="/lottery.html">彩票娱乐</Link>
        </li>
    </ul>
)

class CenterLeft extends Component {
    constructor(props){
        super(props);
        this.state={
            status: false
        }
    }
    render() {
        // const { info } = this.props;
        var selStatus = this.state.status;
        var sel;
        if (selStatus) {
            sel = <CenterLeftLink />
        }
        return (
            <div className="user_left">
                <h2>个人中心</h2>
                <div className="user_name" id="user_name_img" >
                    <Link to="/my_center.html" >
                        <p id="user_name" className="fadeIn animated"></p>
                    </Link>
                </div>
                <ul className="userL_icon">
                    <li className="mail">
                        <Link to="/inmail.html"><i></i>站内信</Link>
                    </li>
                    <li className="down">
                        <Link to="/inmail.html"><i></i>下载</Link>
                    </li>
                    <li className="esc">

                        <a id="out"><i></i>退出</a>
                    </li>
                </ul>
                <div style={{ clear: 'both' }}></div>
                <ul className="user_item">
                    <li>
                        <Link activeClassName="active" to="/recharge.html"><p>账户充值</p></Link>
                    </li>
                    <li onClick={(e) => { this.setState({ status: !selStatus }) }}>
                        <p>游戏大厅
                            <span className="trian"></span>
                        </p>
                        {sel}
                    </li>
                    <li>
                        <Link activeClassName="active" to="/drawings.html"><p>账户提款</p></Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/detailed.html"><p>账户清单</p></Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/recommend.html"><p>好友推荐</p></Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/activity.html"><p>优惠活动</p></Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/apply_discount.html"><p>优惠申请</p></Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/lotto.html"><p>抽奖活动</p></Link>
                    </li>
                    <li style={{ display: 'none' }}>
                        <p>T博商城</p>
                    </li>
                </ul>
            </div>
        )
    }
}


export default CenterLeft;