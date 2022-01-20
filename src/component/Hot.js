import React, {useState} from "react";

import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import { useSelector } from 'react-redux';

import logo from './../img/logo.svg';

function Hot() {
    
    let item = useSelector((item) => item);
    let [product, setProduct] = useState(item);

    return (
        <div id="Hot" className="depthWrap">
            <Header />
            <div className="itemList">
                {
                product.reducer.map(function (a, i) {
                    if (a.cate === "hot") {
                        return <ItemList product={a} i={i} key={i} />
                    }
                })
                }
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
            <Link to="/hot" className="on">Hot Item</Link>
            </nav>
        </header>
    )
}
export default Hot;