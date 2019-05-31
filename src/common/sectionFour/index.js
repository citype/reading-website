import React, { Component } from 'react';
import './index.css';
import Item1 from '../images/yuedu.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/zhidao.jpg'
import Item4 from '../images/pad.jpg'
import Item5 from '../images/skill.jpg'
import Item6 from '../images/club.jpg'

class SectionFour extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="sfo-container">
                <div className="sth-top">
                    <p className="sth-top-p">6-16 岁青少年阅读</p>
                    <div className = "sth-line"></div>
                    <ul className="sfo-content">
                        <li className="sfo-item">
                            <img src={Item1}/>
                            <p className="sfo-title">自主阅读</p>
                            <p className="sfo-detail">
                            万册美国原版图书完整覆盖美国K12体系，舒适安全的空间布局带给孩子轻松的阅读体验，全年无限次畅读，为孩子提供原汁原味的美国阅读场景，将美国分级阅读馆搬至您身边。
                            </p>
                        </li>
                        <li className="sfo-item">
                            <img src={Item2}/>
                            <p className="sfo-title">智能测评</p>
                            <p className="sfo-detail">
                            全智能、自适应在线测评，从5大领域，36项技能，全面精准评测孩子阅读能力，完美同步美国公立学校阅读体系。
                            </p>
                        </li>
                        <li className="sfo-item">
                            <img src={Item3}/>
                            <p className="sfo-title">外籍一对一指导</p>
                            <p className="sfo-detail">
                            精选的优质外籍导读，凭借多年K12阅读阅读指导经验，为您的孩子提供高质量的阅读指导服务。
                            </p>
                        </li>
                        <li className="sfo-item">
                            <img src={Item4}/>
                            <p className="sfo-title">多媒体功能</p>
                            <p className="sfo-detail">
                            汇集与图书配套的海量音视频资源，从声音、影像等多维度激发孩子主动阅读热情，强化阅读效果。
                            </p>
                        </li>
                        <li className="sfo-item">
                            <img src={Item5}/>
                            <p className="sfo-title">技能提速指导</p>
                            <p className="sfo-detail">
                            技能加速舱为孩子提供了一个全面提高阅读专项技能的“实验室”，同时我们配有多年K12阅读从业经验的优质阅读顾问，他们为您的孩子提供高质量的阅读指导服务，提升孩子的语言技能和阅读能力。
                            </p>
                        </li>
                        <li className="sfo-item">
                            <img src={Item6}/>
                            <p className="sfo-title">俱乐部活动</p>
                            <p className="sfo-detail">
                            美式阅读的经典俱乐部模式，通过精讲精读、辩论、演讲、戏剧、写作等专项主题活动，让您的孩子获得和美国孩子同等的思维能力和创造力。
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
export default SectionFour;