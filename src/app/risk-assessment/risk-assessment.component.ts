import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-risk-assessment',
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.css']
})
export class RiskAssessmentComponent implements OnInit {
  
    items:any[] =[
    {id: '1', description:'Unknwon = 5 risk points', value:'5'},
    {id: '2', description:'Low, 40-70 plants/m^2 = 0 risk points', value:'0'},
    {id: '3', description:'Normal, 70-110 plants/m^2 = 5 risk points', value:'5'},
    {id: '4', description:'High, 110-140 plants/m^2 = 10 risk points', value:'10'}
  ];
    

  

  constructor() { }

  ngOnInit() {
  }

  
}
function newFunction() {
    return this;
}

