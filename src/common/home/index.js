import React, { Component } from 'react';
import './index.css';
import SectionOne from '../sectionOne'
import SectionTwo from '../sectionTwo'
import SectionThree from '../sectionThree'
import SectionFour from '../sectionFour'
import Top from '../top';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Top/>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
            </div>
        )
    }
}
export default Home;