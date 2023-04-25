import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {

  searchValue = '';
  visible = false;
  listOfUser: any[] =[
    // {
    //   id:1,
    //   name: 'John Brown',
    //   email: 'john@gmail.com',
    //   UserType: 2
    // },
    // {
    //   id:2,
    //   name: 'Jack Dorsy',
    //   email: 'jack@gmail.com',
    //   UserType: 1
    // }
    
  ]

  constructor( private userservice:UserService ) { }

  ngOnInit(): void {
this.userservice.listUser().subscribe((res:any)=>{
this.listOfUser = res;
console.warn(res);
})
    
  }

  listOfDisplayData = [...this.listOfUser];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    // this.listOfDisplayData = this.listOfUser.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
    this.listOfDisplayData = this.listOfUser.filter((item: any) => item.name.indexOf(this.searchValue) !== -1);
  }

}
