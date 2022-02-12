import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit {
  options: any = {};
  constructor() {}

  ngOnInit(): void {
    this.options = {
      title: {
        text: 'Weather Statistics',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
      },
      legend: {
        bottom: 10,
        left: 'center',
        data: ['CityA', 'CityB', 'CityD', 'CityC'],
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            { value: 735, name: 'CityC' },
            { value: 510, name: 'CityD' },
            { value: 434, name: 'CityB' },
            { value: 335, name: 'CityA' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }
}
