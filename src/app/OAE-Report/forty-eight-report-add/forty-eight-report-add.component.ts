import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forty-eight-report-add',
  templateUrl: './forty-eight-report-add.component.html',
  styleUrls: ['./forty-eight-report-add.component.css']
})
export class FortyEightReportAddComponent implements OnInit {

  fortyEightreport = new FormGroup({
    hospitalname: new FormControl('', [Validators.required]),
    fathername: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    fathermno: new FormControl('', [Validators.required]),
    mothername: new FormControl('', [Validators.required]),
    mothermno: new FormControl('', [Validators.required]),    
    email: new FormControl('', [Validators.required]),
    bbdate: new FormControl('', [Validators.required]),
    bgender: new FormControl('', [Validators.required]),
    satus: new FormControl('', [Validators.required]),
    uploadrprt: new FormControl('', [Validators.required]),
    testdate: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  submitFortyEightForm(){
    console.warn(this.fortyEightreport.value);
    
  }

}
