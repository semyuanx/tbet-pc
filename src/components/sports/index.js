import React, { Component } from 'react';
import Nav from '../public/nav'; // 导航
require('./css/style.css');

// 体育投注dom容器

var SportsDOM = () => (
    <div className="clothing">
        <div className="subBanner">
            <div className="ban_item">
                <img alt="加载中..."
                    src={require('./img/subBanner3.jpg')} />
            </div>
        </div>
        <div className="xiaojin w1200">
            <div className="xiaojin_left" style={{ width: '850px' }}>
                <a>
                    <img alt="加载中..."
                        src={require('./img/xiaojin1.jpg')} style={{ height: '500px' }} />
                </a>
            </div>
            <div className="xiaojin_right" style={{ width: '320px' }} >
                <a>
                    <img alt="加载中..."
                        src={require('./img/xiaojin2.jpg')} style={{ height: '500px' }} />
                </a>
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
    </div>
)

class Sports extends Component {
    render() {
        return (
            <div>
                <Nav />
                <SportsDOM />
            </div>
        )
    }
}


export default Sports;