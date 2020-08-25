import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  newsLetterForm = this.nl.group({
    email: ['', Validators.required]
  });
  constructor(private nl: FormBuilder) { }
  
  onNlSubmit() {
    console.warn(this.newsLetterForm.value);
  }  

  ngOnInit() {
  }
  
}
