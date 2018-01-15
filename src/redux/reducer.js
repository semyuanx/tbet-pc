// import { combineReducers } from 'redux'; //合并reducers

// //登入登出
// const login = (state={loginStatus:false},active)=>{
//     switch(active.type){
//         case 'login':
//             return Object.assign({},state,{loginStatus:active.loginStatus});
//         case 'logout':
//             return (state = false);
//         default:
//             return state;
//     }
// }
// //页面初始化
// const init =(state={pageInfo:{},userInfo:{},balance:{}},action)=>{
//     switch(action.type){
//         case 'pageInit':       
//             var obj = {
//                 username:action.username,
//                 msgCount:action.msgCount
//             }
//             return  Object.assign({},state,{pageInfo:obj});
//         case 'userInfo':
//              return  Object.assign({},state,{userInfo:action.userInfo});
//         case 'balance':
//              return  Object.assign({},state,{balance:action.balance});
//         case 'userBankList':
//             return Object.assign({},state,{userBankList:action.bankList});
//         default:
//             return state;
//     }
// }
// //loading 状态
// const loadingStatus = (state={loadState:false,loginPop:false},action)=>{
//     switch(action.type){
//         case "loading":
//             return Object.assign({},state,{loadState:action.loadState});
//         case "LOGIN_POP":
//             return Object.assign({},state,{loginPop:action.mate});
//         default:
//             return state;
//     }
// }

// const rootReducer = combineReducers({
//     login,
//     init,
//     loadingStatus
// })
// export default rootReducer;
