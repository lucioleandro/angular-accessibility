import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Angular Accessibility';
  form: FormGroup = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  submit() {
    console.log(this.form.value);
  }

  buildForm() {
    this.form = this.formBuilder.group({
      yesNoAnswer: ['no'],
    });
  }

}
