import React, { Component } from 'react'; 
import './index.css'

class SectionThree extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="sth-container">

               <div className="sth-top">
                    <p className="sth-top-p">分级阅读评测体系</p>
                    <div className = "sth-line"></div>
                    <span>杭州启路文化创意有限公司旗下的海维星航英语文化教育，面向 k12 的小朋友提供英语阅读启蒙与思维训练，全面提升孩子的学习力与创造力。我们使用的分级阅读测评体系已覆盖全美 1/3 学生，覆盖全美 6 万所学校，遍布 82 个国家，累计 1800 万阅读成功案例。</span>
                    <br></br>
                    <span>公司地址：浙江省杭州市滨江区浦沿街道滨盛路 3867 号宝龙城 2 幢 112 室- 113 室</span>
                    <br></br>
                    <span>联系我们： 13588237523</span>
                </div>

                <div className="sth-middle">
                    <span className="sth-nums">60,000+</span>
                    <span className="sth-nums">82+</span>
                    <span className="sth-nums">18,000,000+</span>
                </div>
                <div className="sth-bottom">
                    <span className="sth-title">美国学校</span>
                    <span className="sth-title">覆盖国家</span>
                    <span className="sth-title">阅读成功案例</span>
                </div>
                
            </div>
        );
    }
}
export default SectionThree