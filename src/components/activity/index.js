import React, { Component } from 'react';
import Nav from '../public/nav'; // 导航
require('./css/style.css');

// 优惠活动主dom
var ActivityDOM = (props) => {
    return (
        <div className="clothing">
            <div className="subBanner ">
                <div className="ban_item">
                    <img src={require('./img/subBanner6.jpg')} alt="优惠活动" height="502" />
                </div>
            </div>
            <div className="privilege_desc w1200">
                <div className="preDes_left">
                    <ul className="preDes_navItem">
                        <li>
                            <ul className="preDes_navSubItem panel-group" id="allPrivile">
                            </ul>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div style={{ marginBottom: '10px' }}>
                        <img src={require('./img/rule-title.png')} alt="优惠活动" />
                    </div>
                    <p style={{ color: '#FFF', fontSize: '16px', lineHeight: '25px', marginBottom: '40px' }}>
                        1. 每位玩家、每户、每一住址、每一电子邮箱地址、每一电话号码、相同支付方式(相同借记卡/信用卡/银行账户) 及IP地址只能享有一次优惠资格。<br />
                        2. 所有参与此次优惠活动的会员必须遵守 T博娱乐所有规则，包括网站上列出的相关规则与条款。<br />
                        3. T博娱乐将会严密保存客户的详细资料，保证会员信息安全，并不对外泄漏任何个人信息。<br />
                        4. 申请首存奖金玩家需完成全部投注要求后，才可获得参与其他优惠的资格。当玩家的账户余额低于5元时，所有投注要求自动清零。<br />
                        5. 老虎机有效游戏及老虎机有效投注不包括：Progressive Slot Machines(累积老虎机),Spin a Win，所有21点游戏，所有轮盘游戏，所有视频扑克游戏，所有Pontoon游戏，所有刮刮乐游戏，各种Craps游戏，VIP百家乐，赌场战争游戏，娱乐场Hold’em游戏，牌九游戏，多旋转老虎机和老虎机奖金翻倍投注。<br />
                        6. 所有游戏产生的对赌、无效、被取消、走盘，小于0.5（香港盘）或无胜负的投注，均不会计算到有效的投注内。<br />
                        7. T博娱乐所有优惠活动仅针对于是真实参与游戏的娱乐性质玩家，如发现会员为职业赌徒或只为寻求奖金的玩家，T博娱乐保留取消该玩家奖金的权利，有权冻结所有相关账户及资金并无需特别通知。<br />
                        8. T博娱乐有权单方面决定会员是否利用优惠活动进行异常或无风险投注。对会员行为做出严格监视，如发现有任何违背、欺骗、或利用规则与条款进行非法获利的会员， T博娱乐有权终止会员的登陆、暂停会员使用网站和没收奖金及盈利的权力，无须特别通知。<br />
                        9. T博娱乐保留在任何时候修改此优惠活动条款与规则的所有权利，包括暂停、修改或取消此优惠活动等。<br />
                        10. T博娱乐保留活动最终解释权。<br />
                    </p>
                </div>
            </div>
        </div>
    )
}


class Activity extends Component {
    render() {
        return (
            <div>
                <Nav />
                <ActivityDOM />
            </div>
        )
    }
}


export default Activity;