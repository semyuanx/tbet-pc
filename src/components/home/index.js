import React, { Component } from 'react';
import Carousel from './page/carousel';     // 轮播
import Nav from '../public/nav'; //导航
import IndexItem from './page/index-item.js'; // 底部跳转url
import './css/style.css'

class Index extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Carousel />
                <IndexItem />
            </div>
        )
    }
}
export default Index;