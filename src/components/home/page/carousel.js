import React, {Component} from 'react';
import Carousel from 'antd/lib/carousel';
import 'antd/lib/carousel/style/css';

/**
 * 轮播
 */
var Carousels = (props) => {
    return (
        <Carousel effect="fade">
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    )
}

export default Carousels;