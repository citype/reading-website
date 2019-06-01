import React, { Component } from 'react';
import './index.css'
import Item1 from '../images/yuedu.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/zhidao.jpg'
import Item4 from '../images/pad.jpg'
import Item5 from '../images/skill.jpg'
import Item6 from '../images/club.jpg'

class ReadFounction extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="rf-container">
                 <p className="rf-title">
                    科学的功能分区
                </p>
                <div className = "sth-line"></div>
                <div className="rf-middle-left">
                    <img src={Item1}></img>
                    <p className="rf-middle-title">自动阅读区</p>
                    <p className="rf-middle-detail">近万册美国原版图书完整覆盖美国K12体系，舒适安全的空间布局带给孩子轻松的阅读体验，全年无限次畅读，为孩子提供原汁原味的美国阅读场景，将美国分级阅读馆搬至您身边。</p>
                </div>
                <div className="rf-middle-right">
                    <img src={Item2}></img>
                    <p className="rf-middle-title-right">智能测评区</p>
                    <p className="rf-middle-detail-right">全智能、自适应在线测评，从5大领域，36项技能，全面精准评测孩子阅读能力，完美同步美国公立学校阅读体系。</p>
                </div>
                <div className="rf-middle-left">
                    <img src={Item3}></img>
                    <p className="rf-middle-title">外籍一对一指导</p>
                    <p className="rf-middle-detail">精选的优质外籍导读，凭借多年K12阅读阅读指导经验，为您的孩子提供高质量的阅读指导服务。</p>
                </div>
                <div className="rf-middle-right">
                    <img src={Item4}></img>
                    <p className="rf-middle-title-right">多媒体功能</p>
                    <p className="rf-middle-detail-right">汇集与图书配套的海量音视频资源，从声音、影像等多维度激发孩子主动阅读热情，强化阅读效果。</p>
                </div>
                <div className="rf-middle-left">
                    <img src={Item5}></img>
                    <p className="rf-middle-title">技能提速指导</p>
                    <p className="rf-middle-detail">技能加速舱为孩子提供了一个全面提高阅读专项技能的“实验室”，同时我们配有多年K12阅读从业经验的优质阅读顾问，他们为您的孩子提供高质量的阅读指导服务，提升孩子的语言技能和阅读能力。</p>
                </div>
                <div className="rf-middle-right">
                    <img src={Item6}></img>
                    <p className="rf-middle-title-right">俱乐部活动</p>
                    <p className="rf-middle-detail-right">美式阅读的经典俱乐部模式，通过精讲精读、辩论、演讲、戏剧、写作等专项主题活动，让您的孩子获得和美国孩子同等的思维能力和创造力。</p>
                </div>
            </div>
        );
    }

}
export default ReadFounction;