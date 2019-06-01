import React, { Component } from 'react';
import './index.css'
import TestPic from "../images/test.jpg"

class ReadTest extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="rte-container">
                  <p className="rm-title">
                   领先国际的英文阅读测评系统
                </p>
                <div className = "sth-line"></div>
                <img claseName = "rte-test-img" src={TestPic}/>
                
            </div>
        );
    }

}
export default ReadTest;