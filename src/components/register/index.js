import React,{Component} from 'react';
import { message } from 'antd';
import { getPageState } from '../../redux/action';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import ajax from 'superagent';
import Nav from '../public/nav'; //导航
import RegisterForm from './register-form';
// import RegisterForm from './form';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/auto-complete/style/css';
require('./css/style.css');


/**
 * 注册
 */

//  注册DOM
var RegisterDOM = (props) => (
    <div>
        <div className="subBanner">
            <div className="ban_item">
                <img src={require("./img/register.jpg")} />
            </div>
        </div>
        <div className="register">
            <div className="reg_title" id="regtop">20秒完成免费注册 感谢您选择了T博娱乐，我们将带领您体验在线博彩乐趣！</div>
            <div className="reg_main w1200">
                <h2 className="regM_title">填写用户信息<span>&nbsp;&nbsp;*&nbsp;为必填项</span></h2>
                <div className="regM_main">
                    <div className="reg_from" id="reg_from">
                        <RegisterForm subFun={props.subRegister} loading={props.loading} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:false
        }
        this.subRegister = this.subRegister.bind(this);
    }
    render(){
        return (
            <div>
                <Nav />
                <RegisterDOM loading={this.state.loading} subRegister={this.subRegister} />
            </div>
        )
    }
    subRegister(username, password, confirmpassword, telephone, email, qq, tjcode, captcha) {
        const { dispatch } = this.props;
        this.setState({
            loading: true
        })
        var that = this;
        ajax
            .post('/public/register.do')
            .query({ username, password, confirmpassword, telephone, email, qq, tjcode, captcha })
            .then(function (res) {
                var data = res.text ? JSON.parse(res.text) : null;
                that.setState({
                    loading: false
                })
                if (data.Status === 200) {
                    message.success("注册成功");
                    browserHistory.push("/");
                } else {
                    message.error(data.Msg)
                }
            })
    }
}


export default Register;