import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
    templateUrl: './login-1.component.html'
})

export class Login1Component {
    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    })


    constructor(private fb: FormBuilder, private router: Router, private userservice: UserService) { }

    ngOnInit(): void {}

    submitForm(data): void {
        // console.warn(data);

        this.userservice.loginUser(data)
        // for (const i in this.loginForm.controls) {
        //     this.loginForm.controls[i].markAsDirty();
        //     this.loginForm.controls[i].updateValueAndValidity();
        // }


    }


}    