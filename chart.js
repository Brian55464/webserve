//這裡是圖表
// 数据
    // 数据
    document.addEventListener('DOMContentLoaded', function() {
      var data = [
        { name: "日本", value: 20468 },
        { name: "香港", value: 17499 },
        { name: "香港", value: 2800 }
      ];
    
      var options = {
        chart: {
          type: 'column',
          backgroundColor: 'transparent'
        },
        title: {
          text: '鳳梨出口量'
        },
        xAxis: {
          categories: data.map(d => d.name)
        },
        yAxis: {
          title: {
            text: '公噸'
          }
        },
        series: [{
          name: '國家',
          data: data.map(d => d.value)
        }],
        plotOptions: {
          column: {
            animation: {
              duration: 2000
            },
            cursor: 'pointer',
            point: {
              events: {
                mouseOver: function () {
                  this.graphic.attr('fill', '#4E3629');
                },
                mouseOut: function () {
                  this.graphic.attr('fill', '#FFDB5D');
                }
              }
            },
            color: '#FFDB5D'
          }
        },
        tooltip: {
          formatter: function() {
            return '公噸: ' + this.y +' t';
          }
        }
      };
    
      Highcharts.chart('chartContainer', options);
    });
    
    
    
      
