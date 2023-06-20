//這裡是圖表
// 数据
    // 数据
    document.addEventListener('DOMContentLoaded', function() {
        // 你的代码
        var data = [
          { name: "Red", value: 12 },
          { name: "Blue", value: 19 },
          { name: "Yellow", value: 3 },
          { name: "Green", value: 5 },
          { name: "Purple", value: 2 },
          { name: "Orange", value: 3 }
        ];
      
        // 配置选项
        var options = {
          chart: {
            type: 'column'
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: data.map(d => d.name)
          },
          yAxis: {
            title: {
              text: 'Value'
            }
          },
          series: [{
            name: 'Value',
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
      
