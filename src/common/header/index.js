import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                        <NavSearch className = {this.props.focused? 'focused' : ''} 
                        onFocus={this.props.handleInputFocus}
                        onBlur = {this.props.handleInputBlur}
                        >
                        </NavSearch>
                        <i className = {this.props.focused? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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

}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
     return {
         handleInputFocus() {
             const action = {
                 type: 'search_focus'
             };
             dispatch(action);
         },
         handleInputBlur() {
             const action = {
                 type: 'search_blur'
             };
             dispatch(action);
         }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 