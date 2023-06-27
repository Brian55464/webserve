//這裡是圖表
// 数据
    // 数据
    document.addEventListener('DOMContentLoaded', function() {
        // 你的代码
        var data = [
          { name: "日本", value: 24053 },
          { name: "香港", value: 3068 },
          { name: "大韓民國", value: 289 },
        ];
      
        // 配置选项
        var options = {
          chart: {
            type: 'column'
          },
          title: {
            text: '鳳梨進出口量質'
          },
          xAxis: {
            categories: data.map(d => d.name)
          },
          yAxis: {
            title: {
              text: '價值'
            }
          },
          series: [{
            name: '量：公噸;值-萬美元',
            data: data.map(d => d.value)
          }],
          plotOptions: {
            column: {
              animation: {
                duration: 2000 // 延长动画持续时间
              },
              cursor: 'pointer',
              point: {
                events: {
                  mouseOver: function () {
                    this.graphic.attr('fill', 'orange');
                  },
                  mouseOut: function () {
                    this.graphic.attr('fill', '#7cb5ec');
                  }
                }
              }
            }
          }
        };
      
        // 创建图表
        Highcharts.chart('chartContainer', options);
      });
      
