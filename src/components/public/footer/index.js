// 公用底部
import React from 'react';
import { Link } from 'react-router';
import './css/style.css';

var Footer = () => (
    <div>
        <div className="b_wechat w1200">
            <ul className="b_wechatItem">
                <li className="b_weAdd">
                    <p>微信客服</p>
                    <span>CSTBET</span>
                    <i></i>
                    <b><img alt="联系我们"
                        src={require('./img/icon_wechat_c_qr.png')} /></b>
                </li>
                <li className="b_weAdd">
                    <p>微信公众号</p>
                    <span>TBET_CASINO</span>
                    <i></i>
                    <b><img alt="联系我们"
                        src={require('./img/icon_wechat_p_qr.png')} width="86" /></b>
                </li>
                <li className="b_weNum">
                    <p>官方微博</p>
                    <span>T博娱乐TBET</span>
                    <i></i>
                    <b><img alt="联系我们"
                        src={require('./img/icon_weibo_qr.png')} /></b>
                </li>
                <li className="b_weEmail">
                    <p>客服邮箱</p>
                    <span>cs@tbet.com</span>
                    <i></i>
                </li>
            </ul>
        </div>
        <div className="footer">
            <div className="footer_icon w1200">
                <img alt="联系我们"
                    src={require('./img/footer_icon.png')} />
            </div>
            <div className="footer_about w1200">
                <div className="footer_aboutItem">
                    <Link to="/about.html" >关于我们</Link>
                    <Link activeClassName="active" to="/notice.html">最新公告</Link>
                    <a href="http://aff.tbetdl.com/" target="_blank" className="cooperate">合作代理<i></i></a>
                    <Link activeClassName="active" to="/duty.html">博彩责任</Link>
                    <Link activeClassName="active" to="/question.html">常见问题</Link>
                    <Link activeClassName="active" to="/safetys.html">隐私安全</Link>
                    <Link activeClassName="active" to="/clause.html">条款与协议</Link>
                    <Link activeClassName="active" to="/contact_us.html">联系我们</Link>
                </div>
                <p>copyright&nbsp;&nbsp;©&nbsp;&nbsp; 2010-2017&nbsp;&nbsp;&nbsp;TBET&nbsp;保留一切权利</p>
            </div>
        </div>
    </div>
)

export default Footer;