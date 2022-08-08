import { Component, OnInit } from '@angular/core';
import { Letters } from '../letters';

@Component({
  selector: 'app-daily-letter',
  templateUrl: './daily-letter.component.html',
  styleUrls: ['./daily-letter.component.css']
})
export class DailyLetterComponent implements OnInit {

  //used to get the right info from "Letters" dictionary
  date: any;
  month: any;
  day: any;
  year: any;
  dateYesterday = new Date();
  monthYesterday: any;
  dayYesterday: any;
  yearYesterday: any;

  //used to check the time
  hours: any;

  dateString = "";
  dateStringYesterday = "";

  letter = "";

  constructor() { }

  ngOnInit(): void {
    //current date
    this.date = new Date();
    this.month = this.date.getMonth() + 1;
    this.day = this.date.getDate();
    this.year = this.date.getFullYear();
    //yesterday's date
    this.dateYesterday = new Date(this.dateYesterday.setDate(this.dateYesterday.getDate() - 1));
    this.monthYesterday = this.dateYesterday.getMonth() + 1;
    this.dayYesterday = this.dateYesterday.getDate();
    this.yearYesterday = this.dateYesterday.getFullYear();
    //set dateString and dateStringYesterday
    this.dateString = this.month.toString() + "-" + this.day.toString() + "-" + this.year.toString();
    this.dateStringYesterday = this.monthYesterday.toString() + "-" + this.dayYesterday.toString() + "-" + this.yearYesterday.toString();
    //if it is past 10:00 PM on the current date
    if(this.hours >= 22) {
      if(this.dateString in Letters) {
        this.letter = Letters[this.dateString];
      }
      else {
       this.letter = "Sorry! I haven't gotten a chance to write the letter for the day yet! Check back soon and it will be up! I love you sooo much!"
      }
    }
    //if it is before 10:00 PM on the current date
    else {
      console.log(this.dateStringYesterday);
      if(this.dateStringYesterday in Letters) {
        this.letter = Letters[this.dateStringYesterday];
      }
      else {
        this.letter = "Sorry! I haven't gotten a chance to write the letter for the day yet! Check back soon and it will be up! I love you sooo much!"
      }
    }
    console.log(this.letter);
  }

}
