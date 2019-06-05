import React, { Component } from 'react';
import './index.css';
import Logo from '../images/logoo.png'
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className="nav-top">
                <img src={Logo}/>
                <ul>
                    <Link to='/'>
                        <li>首页</li>
                    </Link>
                    <Link to="/readinfo">
                        <li>海维英语阅读</li>
                    </Link>
                    <Link to="/school">
                        <li>星航名校游学</li>
                    </Link>
                    <Link to="/contact">
                        <li>关于我们</li>
                    </Link>
                    {/* <Link to="readinfo">
                        <li>加入我们</li>
                    </Link> */}
                </ul>
            </div>
        )
    }
}
export default Nav;