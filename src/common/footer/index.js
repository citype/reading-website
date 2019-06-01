import React, { Component } from 'react';
import './index.css'
import Pic from '../images/flag.jpg'
import Pic1 from '../images/computer.jpg'
import Pic2 from '../images/teacher.jpg'

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="fo-container">
                <div className="fo-top">
                    <ul className="fo-nav">
                        <li><img src={Pic}></img><p className="fo-detail">沉浸式美国分级阅读馆</p><p className="fo-title">了解我们的课程体验</p></li>
                        <li><img src={Pic1}></img><p className="fo-detail">外籍导读 1 对 1</p><p className="fo-title">了解我们的师资力量</p></li>
                        <li><img src={Pic2}></img><p className="fo-detail">科学的线上评测系统</p><p className="fo-title">了解我们的分级阅读体系</p></li>
                    </ul>
                </div>
                <div className="fo-bottom">
                        
                    <p>杭州启路文化创意有限公司 © 2019</p>
                        <br/>
                        <p>咨询客服：+86 13588237523</p>
                        <br/>
                    <p>浙 ICP 备 15026670 号-2</p>
                </div>
            </div>
        );
    }

}
export default Footer;