import React, { Component } from 'react'; 
import './index.css'

class SectionOne extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="so-container">
                <div className="so-top">
                    <p className="so-title">体系课程设置 科学满足学龄前各阶段儿童英语启蒙成长需求</p>
                    <span className="so-detail">600余首 The Kiboomers 儿歌，</span>
                    <br></br>
                    <span className="so-detail">上百本 Rourke Media 出版社原版绘本，近10000热门儿歌、动画，搭配实用单词闪卡，为宝贝“免费”提供英语环境！</span>
                </div>
                <div className="so-middle">
                    <img src="https://qiniucdn.jiliguala.com/dev/promo/bb9b844ea1fd4e6aa21bf7e424191ace.png"/>
                    <p>CEFR标准：The Common European Framework of Reference for Languages（欧洲共同语言参考标准）的简称CCSS美国标准：Common Core State Standards(共同核心州立标准)的简称</p>
                </div>
              
            </div>
        );
    }

}
export default SectionOne;