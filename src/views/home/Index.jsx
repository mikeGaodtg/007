import React, { Component } from 'react'
import { Card, Tabs, Row, Col, Timeline } from 'antd';
import * as echarts from 'echarts';
import style from "./style.module.css"
import axios from 'axios';
const { TabPane } = Tabs;
export default class Index extends Component {
  state = {
    xData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    yData: [5, 20, 36, 10, 10, 20],
    xData1: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    yData1: [5, 20, 36, 10, 10, 20],
    list:[
      {
        cont:"王刚结算了一门课程",
        time:"操作时间 2020-09-18",
        color:"red"
      },
      {
        cont:"王刚新增了一名学员",
        time:"操作时间 2020-09-18",
        color:"blue"
      },
      {
        cont:"李梦如删除了排课记录",
        time:"操作时间 2020-09-20",
        color:"yellow"
      },
      {
        cont:"王刚结算了一门课程",
        time:"操作时间 2020-09-18",
        color:"green"
      },
    ]
  }
  componentDidMount() {
    //柱形图
    this.drawBar();
    // this.drawLine();
    this.drawPie()
    // axios().then((res)=>{
    //   this.setState({
    //     list:res.list
    //   })
    // })
  }
  //绘制柱形图
  drawBar = () => {
    var myChart = echarts.init(this.myRef);
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: this.state.xData
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: this.state.yData
        }
      ]
    });
  }

  drawLine = () => {
    console.log(this.myRef2)
    var myChart = echarts.init(this.myRef2);
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: this.state.xData1
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'line',
          data: this.state.yData1
        }
      ]
    });
  }
  //饼图
  drawPie=()=>{
    var myChart = echarts.init(this.myRef3);
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: this.state.xData
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'pie',
          data: this.state.yData
        }
      ]
    });
  }
  callback = (activeKey) => {
    if (activeKey == 2) {
     // this.drawLine()
      //折线图
      //console.log(7,this.myRef2)
      
      setTimeout(()=>{
        this.drawLine()
      },0)
    }
  }
  render() {
    return (
      <div>
        <Card >
          <Tabs defaultActiveKey="1" onChange={this.callback} >
            <TabPane tab="销售额" key="1">
              <Row>
                <Col span={16}>
                  <div className={style.panel} ref={a => this.myRef = a} key="11"></div>
                </Col>
                <Col span={8}>

                </Col>
              </Row>
            </TabPane>
            <TabPane tab="访问量" key="2" forceRender={true}>
              <Row>
                <Col span={16}>
                  <div className={style.panel} ref={a => this.myRef2 = a} key="22"></div>
                </Col>
                <Col span={8}>
                </Col>
              </Row>
            </TabPane>

          </Tabs>
        </Card>
        <Row gutter={16} className="mt">
          <Col span={12}>
            <Card title="操作动态">
              <Timeline>
              {
                this.state.list.map((item,index)=>{
                  return(
                    <Timeline.Item color={item.color} key={index}>
                      <p className={style.mb}>{item.cont}</p>
                      <p className={style.mb}>{item.time}</p>
                    </Timeline.Item>
                  )
                })
              }
              </Timeline>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="销售额类别占比">
               <div className={style.panel} ref={a => this.myRef3 = a}></div>
            </Card>
             
          </Col>
        </Row>
      </div>
    )
  }
}
