import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  private showTitle = false;
  private breadcrumbs = {
    prevPages: [
      {
        title: 'Home',
        url: '/'
      }
    ],
    currentPage: {
      title: 'Portfolio'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
