import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Test from './test';
import { BrowserRouter, Redirect, Route, Router } from 'react-router-dom';
import Frame from './components/Frame/index'
import readAll from './pages/admin/readAll';
import edit from './pages/List'
import Login from './pages/login/login'
import Enroll from './pages/users/Enroll'
import Search from './pages/users/Search'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Route path='/readAll' exact component={readAll}></Route>
      <Route path='/edit/:id?' exact component={edit}></Route>
      <Route path='/login/:id?' exact component={Login}></Route>
      <Route path='/enroll/:id?' exact component={Enroll}></Route>
      <Route path='/search/:id?' exact component={Search}></Route>
      <Redirect to='/readAll' />
    </BrowserRouter>
    {/* <Frame>
      <Router path='readAll' exact component={readAll}></Router>
    </Frame> */}
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
