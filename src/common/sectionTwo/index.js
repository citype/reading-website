import React, { Component } from 'react'; 
import './index.css'
import R1 from '../images/read.png'
import R2 from '../images/read1.jpg'
import R3 from '../images/read2.jpeg'

class SectionTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="st-container">
                <div className="st-top">
                    <p>全美英语分级阅读馆</p>
                    <div className = "sth-line"></div>
                    <ul className="st-top-nav">
                        <li>不出国门，尽享纯正英语分级阅读馆</li>
                        <li>科学的阅读裂成，获得美国孩子的英语思维能力和创造力</li>
                        <li>英语阅读，母语思维，我们给您更多</li>
                    </ul>
                </div>

                <div className="st-bottom"> 
                    <ul className="st-bottom-images" >
                   
                        <li> <p>上万册图书一册一练</p><img src={R1}/></li>   
                        <li> <p>外籍教师一对一指导</p><img src={R2}/></li>   
                        <li> <p>多样化读后报告卡数据分析</p><img src={R3}/></li>   
                    </ul>
                </div>

            </div>
        );
    }
}
export default SectionTwo