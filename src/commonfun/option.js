export function setOption4(globalDailyHistory) {

    let xAxis = [];
    let series1 = [];
    let series2 = []
    globalDailyHistory = globalDailyHistory.reverse()
    for (let i = 0; i < globalDailyHistory.length; i += 7) {
        xAxis.push(globalDailyHistory[i].date);
        series1.push(globalDailyHistory[i].all.dead)
        series2.push(globalDailyHistory[i].all.heal)
    }
    series1 = series1.reverse();
    series2 = series2.reverse();
    xAxis = xAxis.reverse()

    var option = {

        tooltip: {
            trigger: "axis"
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(0,0,0,1)",
                fontSize: "12"
            }
        },

        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            // x轴更换数据
            data: xAxis,
            // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
            axisLabel: {
                textStyle: {
                    color: "rgba(0,0,0,1)",
                    fontSize: 12
                }
            },
            // x轴线的颜色为   rgba(255,255,255,.2)
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,1)"
                }
            }
        }],
        yAxis: [{
            type: "value",
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(0,0,0,1)",
                    fontSize: 12
                }
            },
            // 修改分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(0,0,0,.1)"
                }
            }
        }],
        series: [{
                name: "死亡人数",
                type: "line",
                smooth: true,
                // 单独修改当前线条的样式
                lineStyle: {
                    color: "#0184d5",
                    width: "2"
                },
                // 填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1, [{
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                data: series1
            },
            {
                name: "治愈人数",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: true,
                data: series2
            }
        ]
    };
    return option;
}
// import { from } from 'core-js/fn/array';
var echarts = require('echarts');
// import { echarts } from 'echarts'
export function addChart(dom, option) {
    let myChart = echarts.init(dom, );
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
    return myChart;
}

import { globalDailyHistory } from './data.js'
export function getGlobalDailyHistory() {
    return globalDailyHistory
}