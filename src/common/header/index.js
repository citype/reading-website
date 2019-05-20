import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: true 
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render() {
        return ( 
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className = 'left active'>首页</NavItem>
                        <NavItem className = 'left'>下载 App</NavItem>
                        <NavItem className = 'right'>登陆</NavItem>
                        <NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
                        <SearchWrapper>
                        <NavSearch className = {this.state.focused? 'focused' : ''} 
                        onFocus={this.handleInputFocus}
                        onBlur = {this.handleInputBlur}
                        >
                        </NavSearch>
                        <i className = {this.state.focused? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                    <Button className='writting'>
						<i className="iconfont">&#xe615;</i>
						写文章
					</Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleInputBlur() {
        this.setState({
            focused:false
        })
    }
}

export default Header; 