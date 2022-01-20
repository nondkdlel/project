import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ItemList(props) {

    let history = useHistory();
    let dispatch = useDispatch();
    
    
    function inCart() {
        dispatch({
            type: '항목추가',
            payload: {
                id: props.product.id,
                kr_item: props.product.kr_item,
                eng_item: props.product.eng_item,
                price: props.product.price,
                quan: props.product.quan
            }
        });
        history.push('/cart')
    }
    
    return (
        <div className="itemBox">
            <div className="innerWrap">
                <div className="responBox">
                    <img src={"https://nondkdlel.github.io/cafe/Storage/item" + (props.product.id) + ".jpg"} />
                </div>
                <div className="nm-Head">
                    <div className="left-box">
                        <h1>{props.product.kr_item}</h1>
                        <p>{props.product.eng_item}</p>
                    </div>
                    <span className="price">{ props.product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }</span>
                </div>
                <p className="content">{props.product.content}</p>
                <div className="btn-group">
                    <input className="detail-btn" type="button" value="제품상세" onClick={()=>{history.push('/detail/' + props.product.id)}} />
                    <input className="cart-btn" type="button" value="장바구니" onClick={inCart}/>
                </div>
            </div>
        </div>
    )
}
export default ItemList;