import React, { Component } from 'react';
import './index.css'
import BG from '../images/bookbg.jpg'

class ReadTop extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="rt-container">
                <img className="rt-img" src={BG}/>
            </div>
        );
    }

}
export default ReadTop;