import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from 'react-router-dom';


import logo from './../img/logo.svg';

function Detail(props) {
    
    let history = useHistory();
    let { id } = useParams();
    let dt_item = props.product.reducer.find(function (item) {
        return item.id == id
    });
    let dispatch = useDispatch();
    let [modal, setModal] = useState(false);
    
    useEffect(() => {
        let timer = setTimeout(() => {
            setModal(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    }, [modal]);
    


    function inCart() {
        dispatch({
            type: '항목추가',
            payload: {
                id: dt_item.id,
                kr_item: dt_item.kr_item,
                eng_item: dt_item.eng_item,
                price: dt_item.price,
                quan: dt_item.quan
            }
        });
        history.push('/Cart');
    }
    return (
        <div className="subWrap">
            <Header />
            <div className="detail-area">
                <div className="le-area dt-img">
                    <img src={"https://nondkdlel.github.io/cafe/Storage/item" + (dt_item.id) + ".jpg"} />
                </div>
                <div className="rg-area dt-info">
                    <div className="head">
                        <h1>{dt_item.kr_item}</h1>
                        <p className="eng-nm">{dt_item.eng_item}</p>
                        <span className="price">{ dt_item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }</span>
                    </div>
                    <p className="info-txt">{dt_item.content}</p>
                    <div className="tb-info">
                        <div className="tb-box">
                            <ul>
                                <li>칼로리 : {dt_item.detail[0]}Kcal</li>
                                <li>당류 : { dt_item.detail[1]}g</li>
                            </ul>
                            <ul>
                                <li>단백질 : {dt_item.detail[2]}g</li>
                                <li>포화지방 : { dt_item.detail[3]}g</li>
                            </ul>
                            <ul>
                                <li>나트륨 : {dt_item.detail[4]}mg</li>
                                <li>카페인 : { dt_item.detail[5]}mg</li>
                            </ul>
                        </div>
                        <p>알레르기 성분 정보: { dt_item.detail[6]}</p>
                    </div>
                    <div className="btn-group ">
                        <input className="order-btn" type="button" value="Order" onClick={() => {
                            setModal(true);
                        }} />
                        <input type="button" value="Cart" onClick={inCart} />
                    </div>
                </div>
            </div>
            {
                modal === true
                    ? (
                        <Modal dt_item={dt_item} modal={modal} setModal={setModal}/>
                    )
                    : null
            }
        </div>
    )
}

function Header() {
    return (
        <header id="Header" className="sub">
            <Link to="/" className="logo"><img src={logo} /></Link>
            <nav>
            <Link to="/all">All Item</Link>
            <Link to="/new">New</Link>
            <Link to="/hot">Hot Item</Link>
            </nav>
        </header>
    )
}
function Modal(props) {
    return (
        <div id="Modal">
            <div className="innerWrap">
                <div className="modalHead">
                <button type="button" onClick={() => {
                    props.setModal(false);
                    }}><i class="fas fa-times"></i></button>
                </div>
                <div className="modalContent">
                    <h1>
                        고객님이 주문하시는 상품은<br />
                        <div className="inner-txt">
                            <p className="item-nm">{props.dt_item.kr_item}({props.dt_item.eng_item})</p>
                            <p className="item-price">{props.dt_item.price}원 입니다.</p>
                        </div>
                    </h1>
                </div>
                <div className="modalFoot">
                    <p>3초 후 닫힘</p>
                </div>
            </div>
        </div> /* end Modal */
    )
}
export default Detail;