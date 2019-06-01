import React, { Component } from 'react';
import './index.css';
import Item1 from '../images/study.jpg'
import Item2 from '../images/football.jpg'
import Item3 from '../images/theatre.jpg'
import Item4 from '../images/breakfast.jpg'
import Item5 from '../images/apartment.jpg'


class SchoolActivity extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="sa-container">
            <p className="rf-title">
               Fettes College 夏令营
           </p>
           <div className = "sth-line"></div>
           <div className="rf-middle-left">
               <img src={Item1}></img>
               <p className="rf-middle-title">学术课程</p>
               <p className="rf-middle-detail">每天早上有 3 节英语课，最大班规模为 14 名学生, 平均每班 12 名，尽可能在课堂上混合国籍，注重学习方法和沟通方式。</p>
           </div>
           <div className="rf-middle-right">
               <img src={Item2}></img>
               <p className="rf-middle-title-right">校内环境和设施</p>
               <p className="rf-middle-detail-right">·网球场
                ·音乐厅
                ·室内室外篮球场
                ·戏剧院
                ·橄榄球，足球场
                ·舞蹈教室
                ·艺术室
                ·花样运动厅
                ·电脑室
                ·90 英里的私家场地
                ·多功能教室
                </p>
           </div>
           <div className="rf-middle-left">
               <img src={Item3}></img>
               <p className="rf-middle-title">文体活动</p>
               <p className="rf-middle-detail">校内的文体活动是夏令营期间老师精心挑选出来的，通过游戏运动和集体活动体现学生们在团队中的精神、合作能力和自我创造能力。夏令营期间学校都会精心挑选具有一定与外国学生生活、教学经验的老师，以适合学生的需要，让学生从文化中学习语言，体验英国的教学模式和学习生活。</p>
           </div>
           <div className="rf-middle-right">
               <img src={Item4}></img>
               <p className="rf-middle-title-right">美味的欧洲风味</p>
               <p className="rf-middle-detail-right">周一到周六是欧式早餐，周日是苏格兰式早每天供应午餐，晚餐和素食，前菜，配菜，甜点，汤，饮料选择周末旅途提供外带餐。</p>
           </div>
           <div className="rf-middle-left">
               <img src={Item5}></img>
               <p className="rf-middle-title">优质的住宿环境</p>
               <p className="rf-middle-detail">在Fettes college有8栋房屋可供学生住宿双床房、三人间、四人间和多床宿舍间为学生提供WIFI，学生可以使用电脑套房学校工作人员会留在宿舍内照看学生，师生比例为1:1每栋宿舍楼有活动负责人，每栋楼有2位日常事务管理人员。</p>
           </div>
       </div>
        )
    }
}
export default SchoolActivity;