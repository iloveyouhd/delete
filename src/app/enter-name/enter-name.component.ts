import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyLetterComponent } from '../daily-letter/daily-letter.component';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.css']
})
export class EnterNameComponent implements OnInit {

  name = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handle_name_submit() {
    if(this.name.toLowerCase() == "holly daugard") {
      this.router.navigate(['daily-letter']);
    }
    else {
      this.router.navigate(['not-you']);
    }
  }

}
