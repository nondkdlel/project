import React, {useState} from "react";

import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import { useSelector } from 'react-redux';

import logo from './../img/logo.svg';

function New() {

    let item = useSelector((item) => item);
    let [product, setProduct] = useState(item);

    return (
        <div id="new" className="depthWrap">
            <Header />
            <div className="itemList">
                {
                product.reducer.map(function (a, i) {
                    if (a.cate === "new") {
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
            <Link to="/new" className="on" >New</Link>
            <Link to="/hot">Hot Item</Link>
            </nav>
        </header>
    )
}
export default New;