import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  officerHospitalName: string = ''

  constructor(
    private activerouter: ActivatedRoute, 
    private reportservice: ReportService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    let userData = localStorage.getItem('User');
    let userInfo = userData && JSON.parse(userData)[0];
    console.warn(userInfo);

    this.officerHospitalName = userInfo.hospitalname;
    console.warn(this.officerHospitalName);

  }

  report = this.fb.group({
    hospital: new FormControl('', [Validators.required]),
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

  submitReport(): void {
    if (this.report.valid) {
      // console.log('submit', this.report.value);
      this.reportservice.addReport(this.report.value).subscribe((res) => {
        console.warn(res);
        this.report.reset();
      })
    } else {
      Object.values(this.report.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }



}
