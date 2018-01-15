/**
 * 绑定银行卡
 */
import React, { Component } from 'react';
import ajax from 'superagent';
import { message } from 'antd';
//头部
var BankListHead = () => (
    <h3 className="u_index_title">已绑定银行卡：
		        <span>为保障资金安全，绑定银行卡姓名需与取款人姓名一致。如有任何疑问请联系</span>
        <a target="_blank" href="http://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=387948&configID=47009&jid=6484960942"></a>
    </h3>
)

//已绑定银行卡列表

var BankList = (props) => {

    var dom, domBtn, tr;
    var userbank = props.userbank ? props.userbank : [];
    if (props.pageState) { //添加增加银行卡后DOM
        dom = <AddBank bindCard={props.bindCard} trueName={props.trueName} closeDom={props.closeAddCart} />;
        domBtn = "";
    } else {
        domBtn = (
            <span className="setbtn"
                onClick={props.openAddCart}>
                增加银行卡
                </span>)
    }
    tr = userbank.map(function (obj, i) {
        return (
            <tr key={i}>
                <td>{obj.bank_title}</td>
                <td>{obj.cardnumber}</td>
                <td>{obj.cardname}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="table-striped">
                <thead>
                    <tr className="thend">
                        <th width="33%">银行</th>
                        <th width="33%">银行卡帐号</th>
                        <th width="33%">持卡人姓名</th>
                    </tr>
                </thead>
                <tbody id="bank_listBody">
                    {tr}
                </tbody>
            </table>
            <div className="addBankDom" >
                {domBtn}
            </div>
            {dom}
        </div>
    )
}

//增加银行卡
class AddBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choseBank: "",
            bankBranch: "",
            cartNum: '',
            cartNum1: '',
            errorMsg: '',
            bankList:[]
        }
        this.choseBank = this.choseBank.bind(this);
        this.save = this.save.bind(this);
    }
    render() {
        var { trueName } = this.props,
            { bankList, bankBranch, cartNum, cartNum1, errorMsg } = this.state,
            dom;
        dom = bankList.map(function (obj, i) {
            return (<option key={i} value={obj.code}>{obj.title}</option>)
        })
        return (
            <div className="u_bankCard" >
                <div className="user_input nameInput">
                    <label>持卡人姓名</label>
                    <span className={trueName ? '' : 'bankNameTip'} >{trueName ? trueName : '请先绑定真实姓名'}</span>

                </div>
                <div className="h25"></div>

                <div>
                    <div className="user_input nameInput">
                        <label>开户银行</label>
                        <select onChange={this.choseBank} className="form-control bankName" ref="bank" >
                            <option>请选择银行</option>
                            {dom}
                        </select>
                        <input type="text"
                            value={bankBranch}
                            onChange={(e) => { this.setState({ bankBranch: e.target.value }) }}
                            placeholder="分支行- 如: 北京中关村支行"
                            className="form-control bankNameInput"
                            style={{ marginTop: 0 }} />
                    </div>
                    <div className="h25"></div>
                    <div className="user_input nameInput">
                        <label>银行卡账号</label>
                        <input type="text"
                            value={cartNum}
                            onChange={(e) => { this.setState({ cartNum: e.target.value }) }}
                            style={{ width: '375px' }}
                            placeholder="输入银行卡帐号"
                            className="form-control accountInput" />
                        <input type="text"
                            value={cartNum1}
                            onChange={(e) => { this.setState({ cartNum1: e.target.value }) }}
                            placeholder="再次输入银行卡帐号"
                            className="form-control bankNameInput" />
                    </div>
                    <div className="h25"></div>
                    <p className="addBankError">{errorMsg}</p>
                </div>
                <div className="binBankBtnlist">
                    <a className="bBtn" onClick={this.save}>保存</a>
                    <a className="bBtn"
                        onClick={this.props.closeDom}
                        style={{ marginLeft: "10px" }}  >
                        取消
                    </a>
                </div>
            </div>
        )
    }
    choseBank() {
        this.setState({ choseBank: this.refs.bank.value })
    }
    save() {
        var { choseBank, bankBranch, cartNum, cartNum1 } = this.state;
        if (!choseBank) {
            this.setState({ errorMsg: "请选择银行" })
            return false;
        }
        if (!bankBranch) {
            this.setState({ errorMsg: "去输入分支行" })
            return false;
        }
        const pattern = /^(\d{16,19})$/;
        if (!pattern.exec(cartNum) || !pattern.exec(cartNum1)) {
            this.setState({ errorMsg: "银行卡号格式错误" })
            return false;
        }
        if (cartNum != cartNum1) {
            this.setState({ errorMsg: "两次卡号不一致" })
            return false;
        }
        this.props.bindCard(choseBank, cartNum, bankBranch);
    }
    componentDidMount() { //获取用户可以绑定的银行卡列表      
        if (this.state.bankList.length < 1) {
            var _this = this;
            ajax
                .post("/cash/bank_list.do")
                .then(function (res) {
                    var data = res.text ? JSON.parse(res.text) : null;
                    if (data.Status === 200) {
                        _this.setState({ bankList: data.Data.bank_list })
                    } else if (data.Status === 600) {
                        window.location.reload()
                    } else {
                        message.error(data.Msg);
                    }
                })
        }
    }
}

class BinCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageState: false
        }
        this.openAddCart = this.openAddCart.bind(this);
        this.closeAddCart = this.closeAddCart.bind(this);
    }
    render() {
        return (
            <div className="bankCardList">
                <BankListHead />
                <BankList
                    userbank={this.props.userBankList}
                    trueName={this.props.trueName}
                    bindCard={this.props.bindCard}
                    pageState={this.state.pageState}
                    openAddCart={this.openAddCart}
                    closeAddCart={this.closeAddCart}
                />
            </div>
        )
    }
    openAddCart() {
        this.setState({
            pageState: true
        });
    }
    closeAddCart() {
        this.setState({
            pageState: false
        })
    }
    

}

export default BinCart;