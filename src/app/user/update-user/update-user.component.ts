import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUser = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    hospitalname: new FormControl('', [Validators.required]),
    userType: new FormControl('', [Validators.required]),
    mnumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor( private userservice:UserService , private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    let UserId = this.activeroute.snapshot.paramMap.get('id')
    console.warn(UserId)
    this.userservice.getUser(UserId).subscribe((res)=>{
console.warn(res)
    })
  }

  

  updateUserForm(): void {
    if (this.updateUser.valid) {
      console.log('submit', this.updateUser.value);
      // this.userservice.addUser(this.updateUser.value).subscribe((res)=>{
        // console.warn(res)
      // })
    } else {
      Object.values(this.updateUser.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
