import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';
import {FilterPipe} from './filter.pipe';


@Component({
  selector: 'birthday',
  templateUrl: './new.component.html',
  styleUrls:['new.component.css']


})

export class NewComponent {


  birthday = new Date(1988, 3, 15); // April 15, 1988
  dates = [
    new Date(2010, 4, 10),
    new Date(2010, 4, 8),
    new Date(2010, 3, 30),
    new Date(2010, 3, 8),
    new Date(2012, 3, 5),
    new Date(2010, 3, 8),
    new Date(2013, 5, 7),
    new Date(2010, 3, 8),
    new Date(2015, 1, 8),
    new Date(2015, 7, 2),
    new Date(2020, 3, 6),
    new Date(2010, 11, 4),
    new Date(2010, 3, 6),
    new Date(2010, 3, 12),
    new Date(2008, 4, 8),
    new Date(2018, 1, 2),
    new Date(2012, 9, 3),



  ];
  ninjas=["nidhis","neha","sam","sam2","sameer","nidhi","kumkum","bhagya"]


  get format1() {
    return 'fullDate';
  }
  get format2() {
    return 'shortDate';
  }
  
 
}