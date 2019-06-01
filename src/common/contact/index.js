import React, { Component } from 'react';
import './index.css';
import Top from '../images/company.png'
import ContactAbout from '../contactAbout'

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="cont-container">
                     <img className="cont-top-img" src={Top}/>
                </div>
                {/* <ContactAbout/> */}
                <div className="cont-middle">
                    <p className="rf-title">
                    严格的外籍导读录用标准
                    </p>
                    <div className = "sth-line"></div>
                    <div className ="cont-middle-content">
                        <ul className="cont-middle-item">
                            <li className="cont-middle-li">
                                <img src={Top} />
                                <p>基础面试(初试·复试·终试)</p>
                            </li>
                            <li className="cont-middle-li">
                                <img src={Top} />
                                <p>背景调查</p>
                            </li>
                            <li className="cont-middle-li">
                                <img src={Top} />
                                <p>录用</p>
                            </li>
                            <li className="cont-middle-li">
                                <img src={Top} />
                                <p>岗前培训和考核</p>
                            </li>
                            <li className="cont-middle-li">
                                <img src={Top} />
                                <p>持证上岗</p>
                            </li>
                        </ul>
                       
                    </div>
                    <p className="cont-detail">公司地址：浙江省杭州市滨江区浦沿街道滨盛路 3867 号宝龙城 2 幢 112 室- 113 室</p>
                    <p className="cont-detail">咨询热线：+86 13588237523</p>
                </div>
            </div>
        )
    }
}
export default Contact;