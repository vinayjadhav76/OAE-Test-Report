import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  validateForm = new FormGroup({
    userName: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    userType : new FormControl(''),
    password: new FormControl(''),
    confirm: new FormControl('')  
  })

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(data: any) {

  }

  validateConfirmPassword() { }

}
