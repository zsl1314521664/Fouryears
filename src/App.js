// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Layout, Menu, Button, Breadcrumb, Icon, Table, Switch } from 'antd';
import Frame from './components/Frame/index';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import ReadAll from './pages/admin/readAll'
import { adminRoutes } from './routes';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    let url = "http://www.fouryears.com/user/readAll"
    axios.get(url).then(function (response) {
      let data = response.data
      alert(JSON.stringify(data));
      // console.log(data);
    })
      .catch(function (error) {
        console.log(error);
      });
    // alert('ss');
  }



  render() {
    return (
      <Frame>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <BrowserRouter>
          <Route path='/' Component={ReadAll}></Route>
        </BrowserRouter>  */}
        {/* <p className="App-intro">
          To get started,edit<code>src/App.js</code>and save to reload.
        </p>
        <Button onClick={this.handleClick}>测试按钮</Button> */}
        {/* <Table onClick={this.handleClick}>查看用户信息</Table> */}
        <Switch>
          {adminRoutes.map(route=>{
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={routeProps=>{
                  return <route.component {...routeProps}/>;
                }}
                />
            );
          })}
        </Switch>
      </Frame>
    );
  }
}
export default App;