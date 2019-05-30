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
                        <li><img src={Pic}></img><p className="fo-detail">6 个月学懂其他机构 1年的课？</p><p className="fo-title">了解西瓜创客课程体系</p></li>
                        <li><img src={Pic1}></img><p className="fo-detail">6 个月学懂其他机构 1年的课？</p><p className="fo-title">看看影响数万孩子的学员故事</p></li>
                        <li><img src={Pic2}></img><p className="fo-detail">6 个月学懂其他机构 1年的课？</p><p className="fo-title">西瓜明星编程课抢先看</p></li>
                    </ul>
                </div>
                <div className="fo-bottom">
                        
                    <p>杭州一解科技有限公司 © 2019</p>
                        <br/>
                    <p>浙 ICP 备 15026670 号-2</p>
                </div>
            </div>
        );
    }

}
export default Footer;