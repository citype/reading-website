import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Nav from './common/nav';
import Footer from './common/footer'
import Home from './common/home'
import ReadInfo from './common/readInfo'
import {BrowserRouter, Route} from 'react-router-dom'
import School from './common/school'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Nav/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/readinfo" component ={ReadInfo}></Route>
            <Route path="/school" component={School}></Route>
          <Footer/>
        </div>
        </BrowserRouter>
    )
  }
}

export default App;
