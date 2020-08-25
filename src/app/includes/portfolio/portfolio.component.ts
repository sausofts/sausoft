import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  private showSection: any = true;

  @Input() showTitle: Boolean;

  constructor() { }

  ngOnInit() {
    if(this.showTitle == false) {
      this.showSection = this.showTitle;
    }
  }

}
