import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import logo from './../img/logo.svg';

function Cart() {
    
    let inCart = useSelector((inCart) => inCart);
    let dispathch = useDispatch();
    let copyCart = [...inCart.reducer2];
    console.log(copyCart);

    return (
        <div className="cart">
            <Header />
            <div className="inner-content">
                <h1>장바구니</h1>
                <div className="container">
                    <table style={{tableLayout: "fixed"}}>
                        <colgroup>
                            <col width="15%" />
                            <col width="40%" />
                            <col width="15%" />
                            <col width="15%" />
                            <col width="15%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>상품명</th>
                                <th>가격</th>
                                <th>수량</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inCart.reducer2.map(function (a, i) {
                                    return (
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{a.kr_item}({a.eng_item})</td>
                                            <td>{a.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</td>
                                            <td>
                                                <button onClick={() => {
                                                    dispathch({
                                                        type: '수량감소',
                                                        payload: { id: i }
                                                    });
                                                }}><i className="fas fa-minus"></i></button>
                                                {a.quan}
                                                <button onClick={() => {
                                                    dispathch({
                                                        type: '수량증가',
                                                        payload: { id: i }
                                                    });
                                                }}><i className="fas fa-plus"></i></button>
                                            </td>
                                            <td><input type="button" value="삭제" onClick={() => {
                                                    dispathch({
                                                        type: '삭제',
                                                        payload: { id: i }
                                                    });
                                                }}/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
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
export default Cart;