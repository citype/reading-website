import React, { Component } from 'react';
import './index.css';
import Logo from '../images/logoo.png'

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="nav-top">
                <img src={Logo}/>
                <ul>
                    <li className="active">首页</li>
                    <li><a href="#"></a>沉浸式英语</li>
                    <li><a href="#"></a>名校游学</li>
                    <li><a href="#"></a>联系我们</li>
                    <li>加入我们</li>
                </ul>
            </div>
        )
    }
}
export default Nav;