import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_url = "http://localhost:3000/user";

  constructor(private _http: HttpClient, private router: Router ) { }

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

  loginUser(data:any) {
    return this._http.get(`http://localhost:3000/user?email=${data.email}&&password=${data.password}`, { observe: 'response' }).subscribe((res:any) => {
      // console.warn(res);
      if (res && res.body && res.body.length) {
        alert("login Successful");
        localStorage.setItem("User", JSON.stringify(res.body));
        this.router.navigate(['/dashboard/default']);
      } else {
        alert("Something Went Wrong")
      }
    })
  }
}
