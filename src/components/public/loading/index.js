import React from 'react';
import { Spin } from 'antd';
import 'antd/lib/spin/style/css';

var Loading = () => (
    <div className="loading">
        <div className="load-cover"></div>
        <div className="load-body">
            <Spin
                tip="加载中..."
                size="large"
            />
        </div>
    </div>
)
export default Loading;