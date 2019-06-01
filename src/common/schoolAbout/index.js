import React, { Component } from 'react';
import './index.css';


class SchoolAbout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="sab-container">
                <p className="rf-title">
                    星航夏令营足迹
                </p>
                <div className = "sth-line"></div>
                <ul className="sab-ul">
                   
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    成立于 2006 年

                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                        2008年获得英国文化协会认证
                    
                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    在2016年获得31分的实力高分

                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    我们每年开发高质量的学术课程

                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    学生安全和福利是重中之重，所有工作人员都通过苏格兰检查

                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    高度整合的学术和文化课程

                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    专注于苏格兰文化和历史

                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    混合的国籍-课程、活动、短途旅行和住宿

                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    来自17个不同国家的学生于2018年参加了FCLC

                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    所有高级管理人员全年都在学校
                    </li>
                    <li className="sab-li">
                    <div className="sab-point"></div>
                    学校是English UK Member和English UK Scotland成员


                    </li>
                </ul>

            </div>
        )
    }
}
export default SchoolAbout;