import React, {useState} from "react";

import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import { useSelector } from 'react-redux';

import logo from './../img/logo.svg';

function All() {

    let item = useSelector((item) => item);
    let [product, setProduct] = useState(item);


    return (
        <div id="All" className="depthWrap" >
            <Header />
            <div className="itemList">
                {
                product.reducer.map(function (a, i) {
                    return <ItemList product={a} i={i} key={i} />
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
            <Link to="/all" className="on">All Item</Link>
            <Link to="/new">New</Link>
            <Link to="/hot">Hot Item</Link>
            </nav>
        </header>
    )
}
export default All;