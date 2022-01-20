import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import App from './App';
import ScrollTop from './component/ScrollTop';

import './css/index.css';
import './css/Reset.css';



let default_data = [{
  id: 0,
  kr_item: '상품을 담아주세요',
  eng_item: 'in item',
  price: 0,
  quan:0
}];

function reducer2(inCart = default_data, action) {
  
  if (action.type === '항목추가') {

    let found = inCart.findIndex((a) => { return a.kr_item === action.payload.kr_item })
    
    if (found >= 0) {
      let copy = [...inCart];
      copy[found].quan++;
      return copy
    } else {
      let copy = [...inCart];
      copy.push(action.payload);
      return copy
    }
    
  } else if (action.type === '수량증가') {
    let copy = [...inCart];
    copy[action.payload.id].quan++;
    return copy
  
  } else if (action.type === '수량감소') {
    
    let copy = [...inCart];
    let count = copy[action.payload.id].quan;

    if (count > 0) {
    
      copy[action.payload.id].quan--;
      return  copy  
    
    } else {
      copy[action.payload.id].quan = 0;
      return copy
    }
  
  } else if (action.type === '삭제') {
    let copy = [...inCart];
    copy.splice(action.payload.id,1);
    return copy
  
  } else {
    return inCart
  }
}

let Data = [{
  id: 1,
  kr_item: "복분자 뱅쇼",
  eng_item: "Bokbunja Vin Chaud",
  content: "복분자에 다양한 과일을 믹스하여 뱅쇼 느낌을 극대화한 음료로 블랙베리, 크랜베리, 오렌지와 함께 과일의 향미와 풍부함까지 즐길 수 있는 달콤한 음료",
  price: 18000,
  detail: ["187", "42", "0", "0", "50", "0", "아황산류"],
  quan: 1,
  cate : "new"
},
{
  id: 2,
  kr_item: "그린루이보스",
  eng_item: "Green Rooibos",
  content: "복숭아 한 조각을 베어 문 잔향이 입안에 남는 맑은 수색의 루이보스 티",
  price: 12000,
  detail: ["7", "0", "0", "0", "5", "0", "복숭아"],
  quan: 1,
  cate : "new"
},
{
  id: 3,
  kr_item: "샤인히비스커스",
  eng_item: "Shine Hibiscus",
  content: "사과, 오렌지, 레몬그라스 등이 블렌딩 된 과일행 가득한 새콤달콤한 맛의 허브티",
  price: 20000,
  detail: ["5", "0", "0", "0", "0", "0", ""],
  quan: 1,
  cate : "new"
},
{
  id: 4,
  kr_item: "스프링캐모마일",
  eng_item: "Spring Chamomile",
  content: "캐모마일과 루이보스, 레몬그라스 등이 블렌딩 되어 은은함이 돋보이는 허브티",
  price: 6000,
  detail: ["7", "0", "0", "0", "2", "0", ""],
  quan: 1,
  cate : "new"
},
{
  id: 5,
  kr_item: "퓨어페퍼민트",
  eng_item: "Pure Peppermint",
  content: "입 안 가득 청량함이 느껴지는 상쾌한 허브티",
  price: 14000,
  detail: ["5", "0", "0", "0", "2", "0", ""],
  quan: 1,
  cate : "hot"
},
{
  id: 6,
  kr_item: "프레시그린티",
  eng_item: "Fresh Green Tea",
  content: "어린잎 녹차와 시트러스 향을 블렌딩한 싱그럽고 부드러운 맛의 그린티",
  price: 16000,
  detail: ["6", "0", "0", "0", "0", "27", ""],
  quan: 1,
  cate : "hot"
},
{
  id: 7,
  kr_item: "피치 얼그레이",
  eng_item: "Peach Earl Grey",
  content: "깊고 그윽한 홍차와 달콤한 복숭아 향이 어우러지는 깔끔한 맛의 얼그레이 티",
  price: 22000,
  detail: ["7", "0", "0", "0", "0", "49", "복숭아"],
  quan: 1,
  cate : "hot"
  }]


function reducer(item = Data, action) {
    return item  
}

let store = createStore(combineReducers({reducer, reducer2}));




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
