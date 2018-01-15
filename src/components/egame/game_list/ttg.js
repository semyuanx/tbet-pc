import React,{Component} from 'react';
import Nav from '../../public/nav'; // 导航
import GameNav from '../game_nav'; //游戏导航
//pt 头部
var TTGHeader = () => (
    <div className="subBanner w1200 pt">
        <div className="ptBanr_con">
            <div className="ptBanr_up">
                <h2 className="animateNum" id="allCount" data-value="" data-type="number" data-option="money"></h2>
                <div className="pt_carousel fl">
                </div>
                <ul className="down_icon fr">
                    <li className="pc_down">
                        <a target="_blank" href="http://cdn.win88.co/setupglx.exe">
                            <img alt="GPI" style={{ width: '100%' }} src={require('../img/xiazaipc.png')} />
                        </a>
                    </li>
                    <li>
                        <div className="ptPhoneDown">
                            <img alt="GPI" src={require('../img/pcDownright.png')} width="40px" />
                        </div>
                        <p className="phoneCode">
                            <img alt="GPI" style={{ width: '100%' }} src={require('../img/pt_phoneCode.png')} />
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)


// pt游戏
var TTGContainer = (props) => {
    return (
        <div style={{ height: '500px' }}></div>
    )
}

class TTG extends Component {
    render() {
        return (
            <div>
                <Nav />
                <TTGHeader />
                <GameNav />
                <TTGContainer />
            </div>
        )
    }
}
export default TTG;