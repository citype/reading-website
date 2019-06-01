import React, { Component } from 'react';
import './index.css'
import RankPic from "../images/rank.png"

class ReadSystem extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="rsy-container">
                  <p className="rm-title">
                   同步美国公立学校体系的阅读能力指标分级
                </p>
                <div className = "sth-line"></div>
                <img claseName = "rsy-rank-img" src={RankPic}/>
                
            </div>
        );
    }

}
export default ReadSystem;