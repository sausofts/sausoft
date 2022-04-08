import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  private breadcrumbs = {
    prevPages: [
      {
        title: 'Home',
        url: '/'
      }
    ],
    currentPage: {
      title: 'About'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
