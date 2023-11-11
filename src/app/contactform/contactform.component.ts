import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';



@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})

export class ContactformComponent {
  form = new FormGroup({
    Name: new FormControl('', Validators.required), // Name is required
    Email: new FormControl('', [Validators.required, Validators.email]), // Email is required and must be a valid email format
    Message: new FormControl('', Validators.required) // Message is required
  });

  onSubmit(){
    if (this.form.valid) {
      const name = this.form.get('Name')?.value;
      const email = this.form.get('Email')?.value;
      const message = this.form.get('Message')?.value;
      alert("Thanks "+ name +" Your message : " + message + " was sent successfully! We will contact you soon on : " +email+" !");
    } else {
      alert("Please fill in all the required fields and provide a valid email address.");
    }  }

  
}
