import React, { Component } from 'react';
import './index.css';

class SchoolPay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="spay-container">
                <p className="rf-title">
                夏令营项目费用
                </p>
                <div className = "sth-line"></div>
                <div className="spay-content">
                    <p className="spay-title">项目费用包括：</p>
                    <ul>
                        <li>包含往返机票</li>
                        <li>校方会去机场接来自各个国家的夏令营的同学</li>
                        <li>英国学生夏令营签证费用</li>
                        <li>境外旅游意外保险</li>
                        <li>菲特斯公学境外营地费用及在校期间的学习生活费用</li>
                        <li>菲特斯夏令营结业证书</li>
                      
                    </ul>
                    <p className="spay-title">项目费用不包括：</p>
                    <ul>
                        <li>护照费</li>
                        <li>出入境行李的海关税、搬运费、保管费及行李逾重费用</li>
                        <li>一切个人消费</li>
                        <li>因个人原因滞留产生的一切费用</li>
                        <li>校方要求每位学生入校时缴纳50英镑押金, 在离校时未破坏公物的条件下返还</li>
                    </ul>
                    <p className="spay-title">报名费用：</p>
                    <ul>
                        <li>天数：14天（16天14晚）</li>
                        <li>价格：42500元/位</li>
                    </ul>
                    <p className="spay-tip">备注：每一位参加夏令营的同学，需要交1000元的押金，公司会为每一个同学填写表格，表格填写2天内如取消行程可退，2天后不可退。拿到邀请信之后，需要交纳全部费用。</p>
                    

                </div>
            </div>
        )
    }
}
export default SchoolPay;