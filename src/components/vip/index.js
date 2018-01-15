import React, { Component } from 'react';
import Nav from '../public/nav'; // 导航
import VIPItem from './vip_item'; //vip子选项
require('./css/style.css');

var VIPDOM = (props) => (
    <div className="clothing">
        <div className="subBanner">
            <div className="ban_item">
                <img src={require('./img/subBanner8.jpg')} />
            </div>
        </div>
        <div className="vip w1200">
            <div className="vip_pt50"></div>
            <div className="vip_item">
                <ul className="vip_itemIcon">
                    <li onClick={()=>{props.activeClick(0)}} className={props.active === 0 ? 'on laohu' : 'laohu'} ></li>
                    <li onClick={()=>{props.activeClick(1)}} className={props.active === 1 ? 'on fanshui' : 'fanshui'}></li>
                </ul>
            </div>
            <div style={{ clear: 'both' }}></div>
            <div className="vip_subItem ">
                <VIPItem active={props.active} />
            </div>
        </div>
    </div>
)

class VIP extends Component {
    constructor(props){
        super(props);
        this.state={
            active: 0
        }
        this.activeClick = this.activeClick.bind(this);
    }
    render() {
        return (
            <div>
                <Nav />
                <VIPDOM activeClick={this.activeClick} active={this.state.active} />
            </div>
        )
    }
    activeClick(val) {
        this.setState({
            active:val
        })
    }

}
export default VIP;