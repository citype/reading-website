import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Top from './common/top';
import Nav from './common/nav';
import SectionOne from './common/sectionOne'
import SectionTwo from './common/sectionTwo'
import SectionThree from './common/sectionThree'
import SectionFour from './common/sectionFour'
import Footer from './common/footer'
class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <Nav/>
        <Top/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <Footer/>
      </Provider>
    )
  }
}

export default App;
