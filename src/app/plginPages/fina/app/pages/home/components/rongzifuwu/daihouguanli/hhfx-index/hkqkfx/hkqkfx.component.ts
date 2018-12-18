import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-hkqkfx',
  templateUrl: './hkqkfx.component.html',
  styleUrls: ['./hkqkfx.component.scss']
})
export class HkqkfxComponent implements OnInit {
    tableData=[]
  constructor(private location:Location,) { }

  ngOnInit() {
  }

  goback():void{
    this.location.back();
  }
  public chartType:string = 'bar';

    public chartDatasets:Array<any> = [
        {data: [4.3, 2.5, 3.5, 4.5], label: '应收类'},
        {data: [ 2.4, 4.4, 1.8, 2.8], label: '预付类'},
        {data: [2,2,3,5], label:'融资需求量'}
    ];

    public chartLabels:Array<any> = ['2015', '2016', '2017', '2018'];

    public chartColors:Array<any> = [
        {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgb(129, 86, 86)',
            borderWidth: 2,
            pointBackgroundColor: 'aqua',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'aqua'
        }
    ];

    public chartOptions:any = {
        responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
}




