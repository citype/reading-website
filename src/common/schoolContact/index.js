import React, { Component } from 'react';
import './index.css';

class SchoolContact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="scon-container">
                <p className="rf-title">两周课程作息</p>
                <div className = "sth-line"></div>
                <table className="scon-table">
                    <tr>
                        <th>时间</th>
                        <th>活动内容</th>
                    </tr>
                    <tr>
                        <td>08:00---08:45 </td>
                        <td>早餐及课前准备 </td>
                    </tr>
                    <tr>
                        <td>08:45----10:05 </td>
                        <td>早课1：课堂热身训练，作业检查，通过游戏互动方式训练和强化语法，词汇和发音，着重于准确性  </td>
                    </tr>
                    <tr>
                        <td>10:05-10:20 </td>
                        <td>课间休息 </td>
                    </tr>
                    <tr>
                        <td>10:20---11:40 </td>
                        <td>早课2：跟随本周教学主题，学生们运用自己已有的和新学的知识完成老师布置的一系列或短或长，或松或紧的学习任务。着重于“交流的流畅性”。 </td>
                    </tr>
                    <tr>
                        <td>11:40---11:55  </td>
                        <td>课间休息 </td>
                    </tr>
                    <tr>
                        <td>11:55---12:45  </td>
                        <td>早课3 ：老师根据文化交流课中的景点向学生传授相关领域英语知识，或根据参观的文化景点布置作业  </td>
                    </tr>
                    <tr>
                        <td>12:45—13:30  </td>
                        <td>午餐 </td>
                    </tr>
                    <tr>
                        <td>13:30—14:00 </td>
                        <td>自由活动 </td>
                    </tr>
                    <tr>
                        <td>14:00—17:30 </td>
                        <td>星期一：学生根据各自喜好选择参加校内文体活动
星期二：在老师的带领下参观爱丁堡市中心的教学景点
星期三：与各自组员一起共同完成自选的兴趣小组项目
星期四：老师带队探寻世界文化名城爱丁堡的新旧城区
星期五：校内礼堂毕业领证典礼（第二个星期举行），自由购物和观光时间  </td>
                    </tr>
                    <tr>
                        <td>17:30—18:30  </td>
                        <td>自由作业和上网时间  </td>
                    </tr>
                    <tr>
                        <td>18:30—19:15 </td>
                        <td>晚餐 </td>
                    </tr>
                    <tr>
                        <td>19:15—19:30 </td>
                        <td>晚间活动签到  </td>
                    </tr>
                    <tr>
                        <td>19:30—21:30 </td>
                        <td>星期一：校内文体团队活动寻宝，夺旗等
星期二：校园集体活动“苏格兰梦幻夜”
星期三：校园集体活动之“菲特斯万圣夜”
星期四：校内文体活动之FCLC才艺表演
星期五：校园集体活动之“主题动感舞夜”  </td>
                    </tr>
                    <tr>
                        <td>21:30—22:30 </td>
                        <td>学生们在宿管老师和各自小组长的协助下准备就寝  </td>
                    </tr>
                    <tr>
                        <td>22:30 </td>
                        <td>熄灯休息，一天的课程和活动结束  </td>
                    </tr>
              
                </table>
            </div>
        )
    }
}
export default SchoolContact;