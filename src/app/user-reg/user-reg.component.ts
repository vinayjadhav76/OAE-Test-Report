import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
  
  searchValue = '';
  visible = false;
  listOfData: any[] =[
    {
      id:1,
      name: 'John Brown',
      email: 'john@gmail.com',
      UserType: 2
    },
    {
      id:2,
      name: 'Jack Dorsy',
      email: 'jack@gmail.com',
      UserType: 1
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    // this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
    this.listOfDisplayData = this.listOfData.filter((item: any) => item.name.indexOf(this.searchValue) !== -1);
  }

}
