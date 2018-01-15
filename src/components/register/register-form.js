import React from 'react';
import { Form, Input, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import ajax from 'superagent';

const FormItem = Form.Item;


//验证公用方法
function validate(val, reg, errorMsg) {
    var pattern = reg;
    if (pattern.exec(val)) {
        return {
            validateStatus: 'success',
            errorMsg: null
        }
    } else {
        return {
            validateStatus: 'error',
            errorMsg: errorMsg
        }
    }
}

const accountReg = /^[A-Z-a-z]{1}[A-Za-z0-9]{5,9}$/; //用户名
const pwdReg = /^[A-Za-z0-9]{8,15}$/; //密码
const phoneReg = /^0?1\d{10}$/; //手机号
const emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //邮箱
const qqReg = /^\d*$/; //qq正则

/**
 * 注册表单
 */

// class RegisterForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             captchaImg: "/public/captcha.do",
//             result: [],
//             account: {
//                 value: null,
//                 tip: '首位必须为字母,用户名必须由6-10个字母和数字组成'
//             },
//             pwd: {
//                 value: null,
//                 tip: '密码由8-15个英文或数字组成'
//             },
//             pwd1: {
//                 value: null,
//                 tip: '密码由8-15个英文或数字组成'
//             },
//             phone: {
//                 value: null,
//                 tip: '输入您的手机号'
//             },
//             email: {
//                 value: null,
//                 tip: '输入您的邮箱'
//             },
//             qq: {
//                 value: null,
//                 tip: '输入您的QQ号码'
//             },
//             tjCode: {
//                 value: null
//             },
//             checked: true,
//             captcha: ''
//         }
//         this.subBtn = this.subBtn.bind(this);
//         this.handleQQ = this.handleQQ.bind(this);
//         this.accountBlur = this.accountBlur.bind(this);
//         this.handleEmail = this.handleEmail.bind(this);
//         this.searchEmail = this.searchEmail.bind(this);
//         this.blurPhone = this.blurPhone.bind(this);
//         this.pwdBlur = this.pwdBlur.bind(this);
//         this.handlePwd1 = this.handlePwd1.bind(this);
//         this.handlePwd = this.handlePwd.bind(this);
//         this.handleAccount = this.handleAccount.bind(this);
//         this.blurAccount = this.blurAccount.bind(this);
//     }
//     render() {
//         var { account, pwd, pwd1, phone, email, result, qq, tjCode, checked } = this.state;
//         var { loading } = this.props;//父组件传来loading状态
//         const formItemLayout = { //定义样式
//             labelCol: {
//                 xs: { span: 24 },
//                 sm: { span: 6 },
//             },
//             wrapperCol: {
//                 xs: { span: 24 },
//                 sm: { span: 10 },
//             },
//         };
//         return (
//             <Form >
//                 <FormItem
//                     {...formItemLayout}
//                     label="用户名："
//                     validateStatus={account.validateStatus}
//                     hasFeedback
//                     help={account.errorMsg || account.tip}
//                     required
//                 >
//                     <Input
//                         value={account.value}
//                         onChange={this.handleAccount.bind(this, accountReg, '用户名格式错误')}
//                         onBlur={this.blurAccount}
//                         placeholder="请输入账号"
//                     />
//                 </FormItem>
//                 <FormItem
//                     {...formItemLayout}
//                     label="密码："
//                     validateStatus={pwd.validateStatus}
//                     hasFeedback
//                     help={pwd.errorMsg || pwd.tip}
//                     required
//                 >
//                     <Input
//                         value={pwd.value}
//                         onChange={this.handlePwd.bind(this, pwdReg, '密码格式错误')}
//                         type="password"
//                         placeholder="请输入密码"
//                         onBlur={this.pwdBlur}
//                     />
//                 </FormItem>
//                 <FormItem
//                     {...formItemLayout}
//                     label="再次输入密码"
//                     validateStatus={pwd1.validateStatus}
//                     hasFeedback
//                     help={pwd1.errorMsg || pwd1.tip}
//                     required
//                 >
//                     <Input
//                         value={pwd1.value}
//                         onChange={this.handlePwd1.bind(this, pwdReg, '密码格式错误')}
//                         onBlur={this.pwdBlur}
//                         type="password"
//                         placeholder="请再次输入密码"
//                     />
//                 </FormItem>
//                 <FormItem
//                     {...formItemLayout}
//                     label="手机号："
//                     validateStatus={phone.validateStatus}
//                     hasFeedback
//                     help={phone.errorMsg || phone.tip}
//                     required
//                 >
//                     <Input
//                         value={phone.value}
//                         onChange={this.handlePhone.bind(this, phoneReg, '手机格式错误')}
//                         onBlur={this.blurPhone}
//                         placeholder="请输入手机号"
//                     />
//                 </FormItem>
//                 <FormItem
//                     {...formItemLayout}
//                     label="邮箱："
//                     validateStatus={email.validateStatus}
//                     hasFeedback
//                     help={email.errorMsg || email.tip}
//                     required
//                 >
//                     <AutoComplete
//                         dataSource={result}
//                         onSearch={this.searchEmail}
//                         placeholder="请输入邮箱"
//                         value={email.value}
//                         onChange={this.handleEmail}
//                     >
//                         <Input onBlur={this.accountBlur} />
//                     </AutoComplete>
//                 </FormItem>
//                 <FormItem
//                     {...formItemLayout}
//                     label="QQ："
//                     validateStatus={qq.validateStatus}
//                     hasFeedback
//                     help={qq.errorMsg || qq.tip}
//                 >
//                     <Input
//                         value={qq.value}
//                         onChange={this.handleQQ.bind(this, qqReg, 'qq格式错误')}
//                         placeholder="请输入QQ号"
//                     />
//                 </FormItem>
//                 <FormItem
//                     {...formItemLayout}
//                     label="推荐码："
//                     validateStatus={tjCode.validateStatus}
//                     hasFeedback
//                 >
//                     <Input
//                         value={tjCode.value}
//                         onChange={(e) => {
//                             this.setState({
//                                 tjCode: {
//                                     value: e.target.value
//                                 }
//                             })
//                         }
//                         }
//                         placeholder="请输入推荐码"
//                     />
//                     <p>注意区分大小写，没有可不填<br />(推荐好友注册您可以享受获取丰厚的奖金，详情请点击优惠页面或联系在线客服进行了解)</p>
//                 </FormItem>
//                 <FormItem
//                     {...formItemLayout}
//                     label="验证码："
//                     required
//                 >
//                     <Row gutter={8}>
//                         <Col span={8}>
//                             <Input placeholder="请输入验证码" onChange={(e) => { this.setState({ captcha: e.target.value }) }} />
//                         </Col>
//                         <Col span={4}>
//                             <img
//                                 onClick={(e) => { this.setState({ captchaImg: "/public/captcha.do?" + Math.random() }) }}
//                                 src={this.state.captchaImg}
//                                 alt="加载失败"
//                                 style={{ width: '100%', marginTop: '2px' }}
//                             />
//                         </Col>
//                         <Col span={8}>
//                             <span style={{ color: '#d2a972' }}>看不清？
//                                 <i
//                                     onClick={(e) => { this.setState({ captchaImg: "/public/captcha.do?" + Math.random() }) }}
//                                     style={{ color: '#b90000', cursor: 'pointer' }}
//                                 >换一张</i>
//                             </span>
//                         </Col>
//                     </Row>
//                 </FormItem>
//                 <Row >
//                     <Col offset={5} span={12}>
//                         <div className="agreement">本公司是合法互联网路交易机构，现提醒有意参与本公司所有游戏之客户，应注意其国家或居住地区的相关法律规定，如有疑问，应就相关问题寻求当地法律意见。<br />
//                             交易声明<br />
//                             1、如客户对本游戏有任何问题或疑问时，请立即停止游戏，并即时与你的上线代理联络跟进事件．如客户仍继续参与游戏，即表示客户了解及接受所发生的问题，本公司有权在这问题上不做出任何解释或跟进，敬请客户留意！<br />
//                             2、请用户确保处于稳定网络环境下进行本游戏，因网络速度问题而出现不稳定情况，客户必须理解及接受。本公司不接受使用无线上网卡客户投诉。<br />
//                             3、所有因网络因素引起的“投注是否成功”问题，最终结果会以本公司的资料库数据，相等于客户投注前台右下方的“记录”功能内所显示的投注记录为准，用户不得异议。<br />
//                             4、倘若发生不可抗拒的灾害或人为的入侵破坏行为，而导致网站故障，资料损坏，数据丢失等情况，会以本网站的最终数据为最后处理数据．为确保各方的真实利益，请各会员保留或列印投注资料，本网站才接受投诉及处理。<br />
//                             5、本公司保留判定任何涉嫌以非正常方式进行投注的客户投注无效之权利。<br />
//                             6、因人为而导致的发牌错误，如： 1) 发牌方向或次序错误。 2) 不正确之显示或结果 (此情况会发生於发牌时连发两张或以上的牌 ) 本公司会按照正常的「牌理」和次序还原至正确的结果，最终结果将按还原至正确的结果计算。<br />
//                             责任声明<br />
//                             1、用户在进行游戏前应核实其所在地区进行线上游戏是否符合当地法律。</div>
//                     </Col>
//                 </Row>
//                 <FormItem
//                     wrapperCol={{ span: 10, offset: 8, }}
//                     style={{ marginTop: 10, color: checked ? "#fff" : 'red' }}
//                 >
//                     <Checkbox
//                         checked={checked}
//                         onChange={(e) => { this.setState({ checked: e.target.checked }) }}>
//                         我已满18周岁，并且以阅读及同意《T博娱乐游戏协议条款》
//                     </Checkbox>
//                 </FormItem>
//                 <FormItem
//                     wrapperCol={{
//                         span: 2, offset: 11
//                     }}
//                 >
//                     <Button onClick={(this.subBtn)} type="primary" loading={loading}>确定</Button>
//                 </FormItem>
//             </Form>
//         )
//     }
//     subBtn() {
//         var { email, account, pwd, pwd1, phone, qq, tjCode, captcha, checked } = this.state;
//         console.log(email.validateStatus, 'email', account.validateStatus, 'accout',
//             pwd.validateStatus, 'pwd', pwd1.validateStatus, 'pwd1', phone.validateStatus,
//             'phone', captcha, 'captcha'
//         )
//         if (email.validateStatus === 'success' && account.validateStatus === 'success'
//             && pwd.validateStatus === 'success' && pwd1.validateStatus === 'success'
//             && phone.validateStatus === 'success' && captcha && qq.validateStatus !== 'error'
//             && checked == true
//         ) {
//             this.props.subFun(account.value, pwd.value, pwd1.value, phone.value, email.value, qq.value, tjCode.value, captcha);
//         }

//     }
//     handleQQ(qqReg, error, event) {
//         this.setState({
//             qq: {
//                 ...validate(event.target.value, qqReg, error),
//                 value: event.target.value
//             }
//         })
//     }
//     accountBlur(e) {
//         var value = e.target.value;
//         this.setState({
//             email: {
//                 value,
//                 validateStatus: 'validating'
//             }
//         })
//         var that = this;
//         ajax
//             .post('/public/is_exist_email.do')
//             .query({ email: value })
//             .then(function (res) {
//                 var data = JSON.parse(res.text);
//                 if (data.Status === 200) {
//                     that.setState({
//                         email: {
//                             value,
//                             validateStatus: 'success'
//                         }
//                     })
//                 } else {
//                     that.setState({
//                         email: {
//                             value,
//                             validateStatus: 'error',
//                             errorMsg: data.Msg
//                         }
//                     })
//                 }
//             })
//     }
//     handleEmail(value) {
//         this.setState({
//             email: {
//                 ...validate(value, emailReg, "邮箱格式错误"),
//                 value: value
//             }
//         })
//     }
//     searchEmail(value) {
//         let result;
//         if (!value || value.indexOf('@') >= 0) {
//             result = [];
//         } else {
//             result = ["qq.com", "163.com",
//                 "126.com", "263.com",
//                 "gmail.com", "sina.com",
//                 "sina.com.cn", "hotmail.com",
//                 "yahoo.com", "189.com", "live.com"].map(domain => `${value}@${domain}`);
//         }
//         this.setState({ result })
//     }
//     blurPhone(e) {
//         var { phone } = this.state;
//         var targetVal = phone.value;
//         if (phone.validateStatus === 'success') {
//             this.setState({
//                 phone: {
//                     value: targetVal,
//                     validateStatus: 'validating'
//                 }
//             })
//             var that = this;
//             ajax
//                 .post('/public/is_exist_phone.do')
//                 .query({ phone: targetVal })
//                 .then(function (res) {
//                     var data = JSON.parse(res.text);
//                     if (data.Status === 200) {
//                         that.setState({
//                             phone: {
//                                 value: targetVal,
//                                 validateStatus: 'success'
//                             }
//                         })
//                     } else {
//                         that.setState({
//                             phone: {
//                                 value: targetVal,
//                                 validateStatus: 'error',
//                                 errorMsg: data.Msg
//                             }
//                         })
//                     }
//                 })
//         }
//     }
//     pwdBlur() {
//         var { pwd, pwd1 } = this.state;
//         var val1 = pwd.value;
//         var val2 = pwd1.value;
//         if (val1 !== val2) {
//             this.setState({
//                 pwd: {
//                     value: val1,
//                     validateStatus: 'error',
//                     errorMsg: '两次密码不一致'
//                 },
//                 pwd1: {
//                     value: val2,
//                     validateStatus: 'error',
//                     errorMsg: '两次密码不一致'
//                 }
//             })
//         } else if (pwd1.validateStatus === 'success' || pwd.validateStatus === 'success') {
//             this.setState({
//                 pwd: {
//                     value: val1,
//                     validateStatus: 'success',
//                     errorMsg: null
//                 },
//                 pwd1: {
//                     value: val2,
//                     validateStatus: 'success',
//                     errorMsg: null
//                 }
//             })
//         }
//     }
//     handlePwd1(accountReg, error, event) {
//         this.setState({
//             pwd1: {
//                 ...validate(event.target.value, accountReg, error),
//                 value: event.target.value
//             }
//         })
//     }
//     handlePwd(accountReg, error, event) {
//         this.setState({
//             pwd: {
//                 ...validate(event.target.value, accountReg, error),
//                 value: event.target.value
//             }
//         })
//     }
//     handleAccount(accountReg, error, event) {
//         this.setState({
//             account: {
//                 ...validate(event.target.value, accountReg, error),
//                 value: event.target.value
//             }
//         })
//     }
//     blurAccount(e) {
//         var accountState = this.state.account.validateStatus;
//         var targetVal = e.target.value;
//         if (accountState === 'success') {
//             this.setState({
//                 account: {
//                     value: targetVal,
//                     validateStatus: 'validating'
//                 }
//             })
//             var that = this;
//             ajax
//                 .post('/public/is_exist_name.do')
//                 .query({ name: targetVal })
//                 .then(function (res) {
//                     var data = JSON.parse(res.text);
//                     if (data.Status === 200) {
//                         that.setState({
//                             account: {
//                                 value: targetVal,
//                                 validateStatus: 'success'
//                             }
//                         })
//                     } else {
//                         that.setState({
//                             account: {
//                                 value: targetVal,
//                                 validateStatus: 'error',
//                                 errorMsg: data.Msg
//                             }
//                         })
//                     }
//                 })
//         }
//     }
// }



var RegisterForm = React.createClass({
    getInitialState() {
        return {
            captchaImg: "/public/captcha.do",
            result: [],
            account: {
                value: null,
                tip: '首位必须为字母,用户名必须由6-10个字母和数字组成'
            },
            pwd: {
                value: null,
                tip: '密码由8-15个英文或数字组成'
            },
            pwd1: {
                value: null,
                tip: '密码由8-15个英文或数字组成'
            },
            phone: {
                value: null,
                tip: '输入您的手机号'
            },
            email: {
                value: null,
                tip: '输入您的邮箱'
            },
            qq: {
                value: null,
                tip: '输入您的QQ号码'
            },
            tjCode: {
                value: null
            },
            checked: true,
            captcha: ''
        }
    },
    render() {
        var { account, pwd, pwd1, phone, email, result, qq, tjCode, checked } = this.state;
        var { loading } = this.props;//父组件传来loading状态
        const formItemLayout = { //定义样式
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };
        // const { getFieldDecoratorgetFieldDecorator, getFieldsError } = this.props.form;
        return (
            <Form >
                <FormItem
                    {...formItemLayout}
                    label="用户名："
                    validateStatus={account.validateStatus}
                    hasFeedback
                    help={account.errorMsg || account.tip}
                    required
                >
                    <Input
                        value={account.value}
                        onChange={this.handleAccount.bind(this, accountReg, '用户名格式错误')}
                        onBlur={this.blurAccount}
                        placeholder="请输入账号"
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="密码："
                    validateStatus={pwd.validateStatus}
                    hasFeedback
                    help={pwd.errorMsg || pwd.tip}
                    required
                >
                    <Input
                        value={pwd.value}
                        onChange={this.handlePwd.bind(this, pwdReg, '密码格式错误')}
                        type="password"
                        placeholder="请输入密码"
                        onBlur={this.pwdBlur}
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="再次输入密码"
                    validateStatus={pwd1.validateStatus}
                    hasFeedback
                    help={pwd1.errorMsg || pwd1.tip}
                    required
                >
                    <Input
                        value={pwd1.value}
                        onChange={this.handlePwd1.bind(this, pwdReg, '密码格式错误')}
                        onBlur={this.pwdBlur}
                        type="password"
                        placeholder="请再次输入密码"
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号："
                    validateStatus={phone.validateStatus}
                    hasFeedback
                    help={phone.errorMsg || phone.tip}
                    required
                >
                    <Input
                        value={phone.value}
                        onChange={this.handlePhone.bind(this, phoneReg, '手机格式错误')}
                        onBlur={this.blurPhone}
                        placeholder="请输入手机号"
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="邮箱："
                    validateStatus={email.validateStatus}
                    hasFeedback
                    help={email.errorMsg || email.tip}
                    required
                >
                    <AutoComplete
                        dataSource={result}
                        onSearch={this.searchEmail}
                        placeholder="请输入邮箱"
                        value={email.value}
                        onChange={this.handleEmail}
                    >
                        <Input onBlur={this.accountBlur} />
                    </AutoComplete>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="QQ："
                    validateStatus={qq.validateStatus}
                    hasFeedback
                    help={qq.errorMsg || qq.tip}
                >
                    <Input
                        value={qq.value}
                        onChange={this.handleQQ.bind(this, qqReg, 'qq格式错误')}
                        placeholder="请输入QQ号"
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="推荐码："
                    validateStatus={tjCode.validateStatus}
                    hasFeedback
                >
                    <Input
                        value={tjCode.value}
                        onChange={(e) => {
                            this.setState({
                                tjCode: {
                                    value: e.target.value
                                }
                            })
                        }
                        }
                        placeholder="请输入推荐码"
                    />
                    <p>注意区分大小写，没有可不填<br />(推荐好友注册您可以享受获取丰厚的奖金，详情请点击优惠页面或联系在线客服进行了解)</p>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="验证码："
                    required
                >
                    <Row gutter={8}>
                        <Col span={8}>
                            <Input placeholder="请输入验证码" onChange={(e) => { this.setState({ captcha: e.target.value }) }} />
                        </Col>
                        <Col span={4}>
                            <img
                                onClick={(e) => { this.setState({ captchaImg: "/public/captcha.do?" + Math.random() }) }}
                                src={this.state.captchaImg}
                                alt="加载失败"
                                style={{ width: '100%', marginTop: '2px' }}
                            />
                        </Col>
                        <Col span={8}>
                            <span style={{ color: '#d2a972' }}>看不清？
                                <i
                                    onClick={(e) => { this.setState({ captchaImg: "/public/captcha.do?" + Math.random() }) }}
                                    style={{ color: '#b90000', cursor: 'pointer' }}
                                >换一张</i>
                            </span>
                        </Col>
                    </Row>
                </FormItem>
                <Row >
                    <Col offset={5} span={12}>
                        <div className="agreement">本公司是合法互联网路交易机构，现提醒有意参与本公司所有游戏之客户，应注意其国家或居住地区的相关法律规定，如有疑问，应就相关问题寻求当地法律意见。<br />
                            交易声明<br />
                            1、如客户对本游戏有任何问题或疑问时，请立即停止游戏，并即时与你的上线代理联络跟进事件．如客户仍继续参与游戏，即表示客户了解及接受所发生的问题，本公司有权在这问题上不做出任何解释或跟进，敬请客户留意！<br />
                            2、请用户确保处于稳定网络环境下进行本游戏，因网络速度问题而出现不稳定情况，客户必须理解及接受。本公司不接受使用无线上网卡客户投诉。<br />
                            3、所有因网络因素引起的“投注是否成功”问题，最终结果会以本公司的资料库数据，相等于客户投注前台右下方的“记录”功能内所显示的投注记录为准，用户不得异议。<br />
                            4、倘若发生不可抗拒的灾害或人为的入侵破坏行为，而导致网站故障，资料损坏，数据丢失等情况，会以本网站的最终数据为最后处理数据．为确保各方的真实利益，请各会员保留或列印投注资料，本网站才接受投诉及处理。<br />
                            5、本公司保留判定任何涉嫌以非正常方式进行投注的客户投注无效之权利。<br />
                            6、因人为而导致的发牌错误，如： 1) 发牌方向或次序错误。 2) 不正确之显示或结果 (此情况会发生於发牌时连发两张或以上的牌 ) 本公司会按照正常的「牌理」和次序还原至正确的结果，最终结果将按还原至正确的结果计算。<br />
                            责任声明<br />
                            1、用户在进行游戏前应核实其所在地区进行线上游戏是否符合当地法律。</div>
                    </Col>
                </Row>
                <FormItem
                    wrapperCol={{ span: 10, offset: 8, }}
                    style={{ marginTop: 10, color: checked ? "#fff" : 'red' }}
                >
                    <Checkbox
                        checked={checked}
                        onChange={(e) => { this.setState({ checked: e.target.checked }) }}>
                        我已满18周岁，并且以阅读及同意《T博娱乐游戏协议条款》
                    </Checkbox>
                </FormItem>
                <FormItem
                    wrapperCol={{
                        span: 2, offset: 11
                    }}
                >
                    <Button onClick={(this.subBtn)} type="primary" loading={loading}>确定</Button>
                </FormItem>
            </Form>
        )
    },
    subBtn() {
        var { email, account, pwd, pwd1, phone, qq, tjCode, captcha, checked } = this.state;
        console.log(email.validateStatus, 'email', account.validateStatus, 'accout',
            pwd.validateStatus, 'pwd', pwd1.validateStatus, 'pwd1', phone.validateStatus,
            'phone', captcha, 'captcha'
        )
        if (email.validateStatus === 'success' && account.validateStatus === 'success'
            && pwd.validateStatus === 'success' && pwd1.validateStatus === 'success'
            && phone.validateStatus === 'success' && captcha && qq.validateStatus !== 'error'
            && checked==true
        ) {
            this.props.subFun(account.value, pwd.value, pwd1.value, phone.value, email.value, qq.value, tjCode.value, captcha);
        }

    },
    handleQQ(qqReg, error, event) {
        this.setState({
            qq: {
                ...validate(event.target.value, qqReg, error),
                value: event.target.value
            }
        })
    },
    accountBlur(e) {
        var value = e.target.value;
        this.setState({
            email: {
                value,
                validateStatus: 'validating'
            }
        })
        var that = this;
        ajax
            .post('/public/is_exist_email.do')
            .query({ email: value })
            .then(function (res) {
                var data = JSON.parse(res.text);
                if (data.Status === 200) {
                    that.setState({
                        email: {
                            value,
                            validateStatus: 'success'
                        }
                    })
                } else {
                    that.setState({
                        email: {
                            value,
                            validateStatus: 'error',
                            errorMsg: data.Msg
                        }
                    })
                }
            })

    },
    handleEmail(value) {
        this.setState({
            email: {
                ...validate(value, emailReg, "邮箱格式错误"),
                value: value
            }
        })
    },
    searchEmail(value) {
        let result;
        if (!value || value.indexOf('@') >= 0) {
            result = [];
        } else {
            result = ["qq.com", "163.com", 
                      "126.com", "263.com", 
                      "gmail.com", "sina.com", 
                      "sina.com.cn","hotmail.com",
                      "yahoo.com","189.com","live.com"].map(domain => `${value}@${domain}`);
        }
        this.setState({ result })
    },
    blurPhone(e) {
        var { phone } = this.state;
        var targetVal = phone.value;
        if (phone.validateStatus === 'success') {
            this.setState({
                phone: {
                    value: targetVal,
                    validateStatus: 'validating'
                }
            })
            var that = this;
            ajax
                .post('/public/is_exist_phone.do')
                .query({ phone: targetVal })
                .then(function (res) {
                    var data = JSON.parse(res.text);
                    if (data.Status === 200) {
                        that.setState({
                            phone: {
                                value: targetVal,
                                validateStatus: 'success'
                            }
                        })
                    } else {
                        that.setState({
                            phone: {
                                value: targetVal,
                                validateStatus: 'error',
                                errorMsg: data.Msg
                            }
                        })
                    }
                })
        }
    },
    handlePhone(phoneReg, error, event) {
        this.setState({
            phone: {
                ...validate(event.target.value, phoneReg, error),
                value: event.target.value
            }
        })
    },
    pwdBlur() {
        var { pwd, pwd1 } = this.state;
        var val1 = pwd.value;
        var val2 = pwd1.value;
        if (val1 !== val2) {
            this.setState({
                pwd: {
                    value: val1,
                    validateStatus: 'error',
                    errorMsg: '两次密码不一致'
                },
                pwd1: {
                    value: val2,
                    validateStatus: 'error',
                    errorMsg: '两次密码不一致'
                }
            })
        } else if (pwd1.validateStatus === 'success' || pwd.validateStatus === 'success') {
            this.setState({
                pwd: {
                    value: val1,
                    validateStatus: 'success',
                    errorMsg: null
                },
                pwd1: {
                    value: val2,
                    validateStatus: 'success',
                    errorMsg: null
                }
            })
        }
    },
    handlePwd1(accountReg, error, event) {
        this.setState({
            pwd1: {
                ...validate(event.target.value, accountReg, error),
                value: event.target.value
            }
        })
    },
    handlePwd(accountReg, error, event) {
        this.setState({
            pwd: {
                ...validate(event.target.value, accountReg, error),
                value: event.target.value
            }
        })
    },
    handleAccount(accountReg, error, event) {
        this.setState({
            account: {
                ...validate(event.target.value, accountReg, error),
                value: event.target.value
            }
        })
    },
    blurAccount(e) {
        var accountState = this.state.account.validateStatus;
        var targetVal = e.target.value;
        if (accountState === 'success') {
            this.setState({
                account: {
                    value: targetVal,
                    validateStatus: 'validating'
                }
            })
            var that = this;
            ajax
                .post('/public/is_exist_name.do')
                .query({ name: targetVal })
                .then(function (res) {
                    var data = JSON.parse(res.text);
                    if (data.Status === 200) {
                        that.setState({
                            account: {
                                value: targetVal,
                                validateStatus: 'success'
                            }
                        })
                    } else {
                        that.setState({
                            account: {
                                value: targetVal,
                                validateStatus: 'error',
                                errorMsg: data.Msg
                            }
                        })
                    }
                })
        }
    }

})

export default RegisterForm;