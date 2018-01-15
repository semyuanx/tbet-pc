import React,{Component} from 'react';
import { Link  } from 'react-router';
require('./css/style.css');

class Nav extends Component{
    render(){
        return (
            <div className="nav w1200">
                <ul className="nav_item" id="nav_item">                   
                    <li>                       
                        <a href="/fishing.shtml" className="pdhref">捕鱼天下</a>
                        <span></span>
                    </li>                    
                    <li className="electron">
                        <Link to="/egame.html" activeClassName="active" >电子游艺<span></span></Link>
                        <ul className="nav_subItem">
                            <li>
                                <Link to="/pt.html" >PT电子游戏</Link>
                            </li>
                            <li>
                                <Link to="/mg.html" >MG电子游戏</Link>
                            </li>
                            <li>
                                <Link to="/ttg.html"  >TTG电子游戏</Link>
                            </li>
                            <li>                     
                                <a>AG电子游戏</a>
                            </li>
                            <li>
                                <Link to="/gg.html"  >GG电子游戏<i className="new"></i></Link>
                            </li>
                            <li>
                                <Link to="/gpi.html"  >GPI电子游戏<i className="new"></i></Link>                     
                            </li>
                            <li>
                                <Link to="/tgp.html"  >TGP电子游戏<i className="new"></i></Link>                     
                            </li>
                            <li>
                                <a>
                                    BBIN电子游戏<i className="new"></i></a>
                            </li>
                            <li style={{display: 'none'}}>
                                <a >T博捕鱼</a>
                            </li>
                        </ul>
                    </li>
                    <li className="immortal">
                        <Link to="/liveplat.html" activeClassName="active">真人娱乐<span></span></Link>
                        <ul className="nav_subItem">
                            <li>
                                <a  >AG国际平台</a>
                            </li>
                            <li>
                                <a  >AG极速平台</a>
                            </li>
                            <li>
                                <a >MG平台</a>
                            </li>
                            <li>
                                <a  >BBIN平台</a>
                            </li>
                            <li>
                                <a  >EA平台</a>
                            </li>
                            <li>
                                <a  >PT平台</a>
                            </li>
                            <li>
                                <a  >EBET平台</a>
                            </li>
                            <li>
                                <a  >小金真人</a>
                            </li>
                            <li>
                                <a  >GPI真人游戏</a>
                            </li>
                            <li>
                                <a href="/tgp_landing.shtml" className="pdhref">TGP真人游戏</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/sports.html" activeClassName="active">体育游戏<span></span></Link>
                        <ul className="nav_subItem">
                            <li>
                                <a>小金体育</a>
                            </li>
                            <li>
                                <a >BBIN体育</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/lottery.html" activeClassName="active">彩票游戏<span></span></Link>
                        <ul className="nav_subItem">
                            <li>
                                <a >BBIN</a>
                            </li>
                            <li>
                                <a>VR</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/vip.html" activeClassName="active">VIP尊享<span></span></Link>
                    </li>
                       
                    <li>
                        <Link to="/activity.html" activeClassName="active">优惠活动<span></span></Link>
                    </li>
                    <li className="nav_lastItem">
                        <a href="http://aff.tbetdl.com/" target="_blank">合作代理</a> <span></span></li>
                    <div className="nav_line"></div>
                </ul>
            </div>
        )
    }
}

export default Nav;