import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm = this.contact.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    number: [''],
    subject: ['', Validators.required],
    message: ['']
  });
  constructor(private contact: FormBuilder) { }
  
  onContactSubmit() {
    console.warn(this.contactUsForm.value);
  }  

  ngOnInit() {
  }

}
