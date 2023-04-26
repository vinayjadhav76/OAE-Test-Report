import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private userservice: UserService, private activeroute: ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    let UserId = this.activeroute.snapshot.paramMap.get('id')
    // console.warn(UserId)
    this.userservice.getUser(UserId).subscribe((res) => {
      // console.warn(res)
      this.updateUser = new FormGroup({
        fname: new FormControl(res['fname'], [Validators.required]),
        lname: new FormControl(res['lname'], [Validators.required]),
        hospitalname: new FormControl(res['hospitalname'], [Validators.required]),
        userType: new FormControl(res['userType'], [Validators.required]),
        mnumber: new FormControl(res['mnumber'], [Validators.required]),
        email: new FormControl(res['email'], [Validators.required]),
        password: new FormControl(res['password'], [Validators.required])
      })
    })
  }



  updateUserForm(): void {
    if (this.updateUser.valid) {      
      this.userservice.editUser(this.activeroute.snapshot.params.id, this.updateUser.value).subscribe((res) => {
        // console.warn(res);
        this.updateUser.reset();
        this.router.navigate(['/user/user-grid'])
        // console.warn(this.updateUser.value);

      })
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
