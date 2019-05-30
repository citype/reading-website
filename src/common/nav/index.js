import React, { Component } from 'react';
import './index.css';

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="nav-top">
                <img src="https://qiniucdn.jiliguala.com/dev/promo/f363a7be89284ddcad1a8ffcd6156409.png"/>
                <ul>
                    <li className="active">首页</li>
                    <li><a href="#"></a>了解我们</li>
                    <li>加入我们</li>
                </ul>
            </div>
        )
    }
}
export default Nav;