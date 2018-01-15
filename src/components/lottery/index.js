import React, { Component } from 'react';
import Nav from '../public/nav'; // 导航
require('./css/style.css')

// 彩票Dom节点

class Lottery extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="clothing">
                    <div className="subBanner">
                        <div className="ban_item">
                            <img alt="加载中..." src={require('./img/subBanner4.jpg')} />
                        </div>
                    </div>
                    <div className="xiaojin w1200">
                        <div className="xiaojin_left" style={{ width: '850px' }}>
                            <a>
                                <img alt="加载中..." src={require('./img/lottery2_2.jpg')} style={{ height: '500px' }} />
                            </a>
                        </div>
                        <div className=" xiaojin_right" style={{ width: '320px' }}>
                            <a>
                                <img alt="加载中..." src={require('./img/lottery1.jpg')} style={{ height: '500px' }} />
                            </a>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lottery;