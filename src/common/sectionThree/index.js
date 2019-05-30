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
                    <p>携手世界知名儿童教育内容自远方</p>
                    <div className = "sth-line"></div>
                    <span>杭州弦音信息科技有限公司旗下的西瓜创客在线少儿教育，面向7-12岁的小朋友提供编程启蒙与思维训练，全面提升孩子的学习力与创造力。西瓜创客的编程课自2017年4月在互联网第一次上亮相至今已经获得了来自红杉和经纬等一线基金近亿元投资，成为全球六十多个国家十万个家庭和孩子的选择与热爱。</span>
                    <br></br>
                    <span>公司地址：浙江省杭州市滨江区西兴街道江陵路336号鑫都汇大厦1幢；</span>
                    <br></br>
                    <span>联系我们： 15088689339</span>
                </div>

                <div className="sth-middle">
                    <span className="sth-nums">100,000+</span>
                    <span className="sth-nums">100,000+</span>
                    <span className="sth-nums">100,000+</span>
                </div>
                <div className="sth-bottom">
                    <span className="sth-title">学员</span>
                    <span className="sth-title">学员项目</span>
                    <span className="sth-title">学员行为数据</span>
                </div>
                
            </div>
        );
    }
}
export default SectionThree