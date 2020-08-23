import { Component, OnInit } from '@angular/core';
import { Newsletterform } from './newsletterform';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() { }
  submitted = false;

  onSubmit() { this.submitted = true;console.log('dddddddddddddddd '+this.email); }
  

  ngOnInit() {
  }
  
}
