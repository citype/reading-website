import React, { Component } from 'react'; 
import './index.css'
import R1 from '../images/read.jpg'
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
                    <p>互动课程-宝贝动起来</p>
                    <ul className="st-top-nav">
                        <li>经典童话、生活礼仪，英语启蒙的同时，品格养成。</li>
                        <li>情景浸润式学习方法与交互学习模式相互结合，进行教学。</li>
                        <li>通过点击屏幕、拖拽动画，就能轻松学习，参与其中。</li>
                    </ul>
                </div>

                <div className="st-bottom"> 
                    <ul className="st-bottom-images" >
                   
                        <li> <p>课程有趣有效</p><img src={R1}/></li>   
                        <li> <p>课程有趣有效</p><img src={R2}/></li>   
                        <li> <p>课程有趣有效</p><img src={R3}/></li>   
                    </ul>
                </div>

            </div>
        );
    }
}
export default SectionTwo