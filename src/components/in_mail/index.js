/**
 * 站内信
 */
import React, { Component } from 'react';
require('.//css/style.css')

// 站内信列表

var InMailTable = (props) => {
    return (
        <div className="mgeR_list">
            <div className="mgeR_th">
                <h3 className="fl">所有信件列表</h3>
                <div className="mgeR_del fr">
                    <div className="checkbox fl">
                        <label>
                            <input type="checkbox" name="msg_all" id="allMegChek" /> 全选
								            </label>
                    </div>
                    <span className="meg_change fl" style={{ display: 'none' }} id="meg_change">标记已读</span>
                    <span className="meg_delAll fl">删除</span>
                </div>
                <div className="clear"></div>
            </div>
            <div className="mgeR_tbl">
                <table className="meg_table table  table-hover" id="meg_table ">
                    <tbody id="msg_tbody">
                    </tbody>
                </table>
                <div className="pageNav">
                    <div className="paging" id="paging">
                    </div>
                </div>
            </div>
        </div>
    )
}
// 站内信详情
var InMailDetails = (props) => {
    return (
        <div className="mgeR_detailed" id="mgeR_detailed" style={{ display: 'none' }}>
        </div>
    )
}

// 站内信DOM 
var InMailDOM = (props) => {
    return (
        <div className="clothing ">
            <div className="w1200">
                <div className="message">
                    <div className="mge_head">
                        <div className="fl msg_info">
                            <i id="mg_usericon" className="msg_icon"></i>
                            <h2 className="mg_username " id="mg_username"></h2>
                        </div>
                        <p>站内信件<i></i></p>
                        <span>感谢您对T博娱乐的一路支持！</span>
                    </div>
                    <div className="mge_left">
                        <ul className="mge_item">
                            <li className="inbox on">
                                <h3>收件箱</h3>
                            </li>
                            <li className="unread">
                                <h3>未读信件<span id="meg_wd"></span></h3>
                            </li>
                            <li className="read">
                                <h3>已读信件<span id="meg_yd"></span></h3>
                            </li>
                        </ul>
                    </div>
                    <div className="mge_right">
                        <h3 className="mgeR_h">收件箱</h3>
                        <InMailTable />
                        <InMailDetails />
                    </div>
                </div>
            </div>
        </div>
    )
}

class InMail extends Component {
    render() {
        return (
            <div>
                <InMailDOM />
            </div>
        )
    }
}

export default InMail;