import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false)
  user_url = "http://localhost:3000/user";

  constructor(private _http: HttpClient, private router: Router, private notification: NzNotificationService) { }

  addUser(data: any) {
    return this._http.post(this.user_url, data);
  }

  listUser() {
    return this._http.get(this.user_url);
  }

  getUser(id) {
    return this._http.get(this.user_url + "/" + id);
  }

  removeUser(id) {
    return this._http.delete(`${this.user_url}/${id}`)
    // return this._http.delete(this.user_url + "/" + id);
  }

  editUser(id, data) {
    return this._http.put(`${this.user_url}/${id}`, data)
  }

  loginUser(data: any) {
    return this._http.get(`http://localhost:3000/user?email=${data.email}&&password=${data.password}`, { observe: 'response' }).subscribe((res: any) => {
      // console.warn(res);
      if (res && res.body && res.body.length) {
        // alert("login Successful");
        localStorage.setItem("User", JSON.stringify(res.body));
        this.notification.success('', 'LogIn Successfully')
        this.router.navigate(['/dashboard/default']);
        this.isUserLoggedIn.next(true);
      } else {
        // alert("Something Went Wrong")
        this.notification.warning('Something went wrong', 'Try again')
      }
    })
  }
}
