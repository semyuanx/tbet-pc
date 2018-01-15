// import ajax from 'superagent';
// import { message } from 'antd';
// import { browserHistory } from 'react-router';
// import 'antd/lib/message/style/css';

// var api = {
//     login: '/public/login.do',//登录
//     balance:'/user/show_cash_fast.do',
//     pageState: '/public/get_data.do',//获取用户登录状态及站内信
//     info: '/user/info.do', //获取用户详细信息
//     userBankList:'/cash/user_bank_list.do', //获取用户绑定的银行卡
//     out: '/user/logout.do' //退出
// }
// // 登录
// export function login() {
//     return {
//         type: 'login',
//         loginStatus: true
//     }
// }
// // 登录方法
// export function goLogin(query) {
//     return function (dispatch) {
//         dispatch({
//             type: 'loading',
//             loadState: true
//         });
//         // 登录
//         ajax
//             .post(api.login)
//             .query(query)
//             .then(function (res) {
//                 var data = res.text?JSON.parse(res.text):null;
//                 dispatch({
//                     type: 'loading',
//                     loadState: false
//                 });
//                 if (data.Status === 200) {
//                     window.Login = true;
//                     message.success('登录成功');
//                     window.userinfo = data.Data;
//                     // 获取用户信息
//                     dispatch(getPageState())
//                 } else {
//                     message.error(data.Msg);
//                 }
//             })

//     }
// }
// // 获取用户余额
// export function getBalance(){
//     return function(dispatch){
//         dispatch({
//             type:'loading',
//             loadState:true
//         })
//         ajax
//             .post(api.balance)
//             .then(function(res){
//                 dispatch({
//                     type:'loading',
//                     loadState:false
//                 })
//                 var data = res.text?JSON.parse(res.text):null;
//                 if(data.Status==200){
//                     dispatch({
//                         type:'balance',
//                         balance:data.Data
//                     })
//                 }else if(data.Status === 600){
//                     // message.error(data.Msg);
//                     // browserHistory.push("/")
//                 }else{
//                     message.error(data.Msg);
//                 }
//             })
//     }
// }

// //获取页面状态及站内信总数
// export function getPageState() {
//     return function (dispatch) {
//         dispatch({
//             type: 'loading',
//             loadState: true
//         });
//         ajax
//             .post(api.pageState)
//             .then(function (res) {
//                 var data = res.text?JSON.parse(res.text):null;
//                 dispatch({
//                     type: 'loading',
//                     loadState: false
//                 });
//                 if (data.Data.is_login.status === 200) {
//                     window.Login = true;
//                     dispatch({
//                         type: 'login',
//                         loginStatus: true
//                     });
//                     dispatch({
//                         type: 'pageInit',
//                         username: data.Data.is_login.data.userName,
//                         msgCount: data.Data.msg_user.data.count
//                     });
//                     // 获取用户信息
//                     dispatch(init());
//                 }else if(data.Status === 600){
//                     // dispatch(init());
//                     // message.error(data.Msg);
//                     // browserHistory.push("/")
//                 } else {
//                     dispatch({
//                         type: 'login',
//                         loginStatus: false
//                     });
//                     window.Login = false;
//                 }
//             })
//     }
// }

// //获取用户信息
// export function init() {
//     return function (dispatch) {
//         dispatch({
//             type: 'loading',
//             loadState: true
//         });
//         ajax
//             .post(api.info)
//             .then(function (res) {
//                 dispatch({
//                     type: 'loading',
//                     loadState: false
//                 });
//                 var data = res.text?JSON.parse(res.text):null;
//                 if (data.Status === 200) {
//                     dispatch({
//                         type: 'userInfo',
//                         userInfo: data.Data.user_info
//                     });
//                 }else if(data.Status === 600){
//                     message.error(data.Msg);
//                     dispatch({
//                         type: 'userInfo',
//                         userInfo: data.Data.user_info
//                     });
//                     browserHistory.push("/")
//                 }else{
//                     message.error(data.Msg);
//                 }
//             })
//     }
// }

// //获取用户绑定的银行卡
// export function getUserBankList(){
//     return function(dispatch){
//         dispatch({
//             type: 'loading',
//             loadState: true
//         });
//         ajax
//             .post(api.userBankList)
//             .then(function(res){
//                 dispatch({
//                     type: 'loading',
//                     loadState: false
//                 });
//                 var data = res.text?JSON.parse(res.text):null;
//                 if(data.Status===200){                   
//                     dispatch({
//                         type:"userBankList",
//                         bankList:data.Data.bank_list
//                     })
//                 }else if(data.Status === 600){
//                     // message.error(data.Msg);
//                     // browserHistory.push("/")
//                 }else{
//                     message.error(data.Msg);
//                 }
//             })
//     }
// }


// // 退出
// export function goLoginOut() {
//     return function (dispatch) {
//         dispatch({
//             type: 'loading',
//             loadState: true
//         });
//         ajax
//             .post(api.out)
//             .then(function (res) {
//                 var data = res.text?JSON.parse(res.text):null;
//                 dispatch({
//                     type: 'loading',
//                     loadState: false
//                 });
//                 if (data.Status === 200) {
//                     message.success(data.Msg);
//                     browserHistory.push("/");
//                     window.Login = false;               
//                     dispatch({
//                         type: 'login',
//                         loginStatus: false
//                     })
//                     dispatch({
//                         type: 'pageInit',
//                         userInfo: {}
//                     });
//                     dispatch({
//                         type: 'userInfo',
//                         username: "",
//                         msgCount: ""
//                     });
                   
                    
//                 }else if(data.Status === 600){
//                     message.error(data.Msg);
//                     browserHistory.push("/")
//                 } else {
//                     message.success(data.Msg);
//                 }
//             })
//     }
// }

// //登录弹窗
// export function setLoginPop(val){
//     return function(dispatch){
//         dispatch({
//             type:"LOGIN_POP",
//             mate:val
//         })
//     }
// }
