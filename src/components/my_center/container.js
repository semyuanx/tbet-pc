import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setLoginPop} from '../../redux/action';
import { Link } from 'react-router';
import CenterHead from './centerHead.js';
import CenterLeft from './centerLeft.js';
import CenterRigth from './centerRight.js'
import { getBalance } from '../../redux/action.js'

/**
 * 个人中心
 */
class MyCenter extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }
    render() {
        return (
            <div>
                <CenterHead />
                <div className="user w1200" >
                    <CenterLeft  />
                    <div className="user_right">
                        <CenterRigth />
                        <div style={{ padding: '20px 0' }}>
                            <div className="fadeIn animated">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        // if(!window.Login){
        //     this.context.router.push("/");
        //     return;
        // }
    }
    componentDidMount() {
    }
}

export default MyCenter;