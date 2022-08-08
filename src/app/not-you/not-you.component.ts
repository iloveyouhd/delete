import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-you',
  templateUrl: './not-you.component.html',
  styleUrls: ['./not-you.component.css']
})
export class NotYouComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handle_go_back() {
    this.router.navigate([''])
  }
}
