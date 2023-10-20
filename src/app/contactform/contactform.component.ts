import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  form = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Message: new FormControl('')
  });

  onSubmit(){
    console.warn(this.form.value);
  }
}
