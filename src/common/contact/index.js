import React, { Component } from 'react';
import './index.css';
import Top from '../images/company.jpg'
import ContactAbout from '../contactAbout'
import Item1 from '../images/interview.jpg'
import Item2 from '../images/search.jpg'
import Item3 from '../images/luyong.jpg'
import Item4 from '../images/shanggang.jpg'
import Item5 from '../images/report.jpg'
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
                                <img src={Item1} />
                                <p>基础面试(初试·复试·终试)</p>
                            </li>
                            <li className="cont-middle-li">
                                <img src={Item2} />
                                <p>背景调查</p>
                            </li>
                            <li className="cont-middle-li">
                                <img src={Item3} />
                                <p>录用</p>
                            </li>
                            <li className="cont-middle-li">
                                <img src={Item4} />
                                <p>岗前培训和考核</p>
                            </li>
                            <li className="cont-middle-li">
                                <img src={Item5} />
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