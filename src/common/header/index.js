import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style';

class Header extends Component {
    render() {
        return ( 
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className = 'left active'>首页</NavItem>
                        <NavItem className = 'left'>下载 App</NavItem>
                        <NavItem className = 'right'>登陆</NavItem>
                        <NavItem className = 'right'>
                            <i className= 'iconfont'>&#xe636;</i>
                        </NavItem>
                        <NavSearch></NavSearch>
                    </Nav>
                    <Addition>
                        <Button className='reg'>写文章</Button>
                        <Button className='writting'>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}

export default Header; 