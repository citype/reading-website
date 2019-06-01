import React, { Component } from 'react';
import './index.css'
import ModulePic from '../images/module.png'

class ReadModule extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="rm-container">
                <p className="rm-title">
                    9 大阅读模块 完整阅读闭环
                </p>
                <div className = "sth-line"></div>
                <img className="rm-img" src={ModulePic}/>

            </div>
        );
    }

}
export default ReadModule;