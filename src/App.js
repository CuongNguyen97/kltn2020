import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Header from './component/Header';
import Body from './component/Body';
import Login from './component/Login';
import Rooms from './component/Rooms/Rooms';

import './App.css';
import Maps from './component/Location/Maps';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
//import Maps from './component/Location/Maps';
import Product from './component/Product/Product';
import Footer from './component/Footer';
function App() {
  return (
    <div>
      <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col d-flex align-items-center">
              <p className="mb-0 phone"><span className="mailus">Phone no:</span> <a href="#">+0792691511</a> or <span className="mailus">email :</span> <a href="#">nvcuong1502@gmail.com</a></p>
            </div>
            <div className="col d-flex justify-content-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <Header />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Body />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Rooms">
              <Rooms />
            </Route>
            <Route path="/Maps">
              <Maps />
              </Route>
            <Route path="/Product">
              <Product />
            </Route> 
            {/* <Redirect from="/Blog" to="/Product" /> */}
          </Switch>
        </div>
      </Router >
      <Footer/>
    </div>
  );
}

export default App;
