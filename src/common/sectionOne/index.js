import React, { Component } from 'react'; 
import './index.css'
import Level from '../images/level.png'

class SectionOne extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="so-container">
                <div className="so-top">
                    <p className="so-title">体系课程设置</p>
                    <br/>
                    <p className="so-title">科学满足学龄前各阶段孩子英语启蒙成长需求</p>
                    <span className="so-detail">近万册美国原版图书完整覆盖美国 K12 体系，</span>
                    <br></br>
                    <span className="so-detail">舒适安全的空间布局带给孩子轻松的阅读体验，全年无限次畅读，为孩子提供原汁原味的美国阅读场景，将美国分级阅读馆搬至您身边！</span>
                </div>
                <div className="so-middle">
                    <img src={Level}/>
                    <p>蓝思指数（Lexile）是一项测量阅读水平和标识书籍难易程度的标准。蓝思阅读测评体系主要从两个维度来衡量读物难度，即语义难度（Semantic Difficulty）和句法难度（Syntactic Complexity）。</p>
                </div>
              
            </div>
        );
    }

}
export default SectionOne;