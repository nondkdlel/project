/* eslint-disable */
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import All from './component/All';
import New from './component/New';
import Hot from './component/Hot';
import ItemList from './component/ItemList';
import Detail from './component/Detail';
import Cart from './component/Cart';
import Footer from './component/Footer';

import logo from './img/logo.svg';

import './css/common.scss';
import './css/style.scss';


function App() {

  let item = useSelector((item) => item);
  let [product, setProduct] = useState(item);
  

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div id="main">
            <div className="main-visual">
              <Header />
              <div className='main-txt'>
                <h1>전문가의 세심함으로 완성한 최상의 커피</h1>
                <p>COFFEE STORY</p>
              </div>
            </div>
            <div className="innerWrap">
              <div className="itemList">
                {
                  product.reducer.map(function (a, i) {
                    return <ItemList product={a} i={i} key={i} />
                  })
                }
              </div>
            </div>
            <Footer />
          </div>
        </Route>
        <Route exact path="/all">
          <All product={product} />
          <Footer />
        </Route>
        <Route exact path="/new">
          <New product={product} />
          <Footer />
        </Route>
        <Route exact path="/hot">
          <Hot product={product} />
          <Footer />
        </Route>
        <Route exact path="/detail/:id">
          <Detail product={product} />
          <Footer />
        </Route>
        <Route exact path="/Cart">
          <Cart product={product}/>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}
function Header() {
  return (
    <header id="Header">
      <Link to="/" className="logo"><img src={logo} /></Link>
      <nav>
        <Link to="/all">All Item</Link>
        <Link to="/new">New</Link>
        <Link to="/hot">Hot Item</Link>
      </nav>
    </header>
  )
}
export default App;
