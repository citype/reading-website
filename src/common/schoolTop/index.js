import React, { Component } from 'react';
import './index.css'
import SBG from '../images/schoolbg.png'

class SchoolTop extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="stop-container">
                <img className="stop-img" src={SBG}/>
            </div>
        );
    }

}
export default SchoolTop;