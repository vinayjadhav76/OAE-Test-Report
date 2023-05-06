import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-reffer-update',
  templateUrl: './reffer-update.component.html',
  styleUrls: ['./reffer-update.component.css']
})
export class RefferUpdateComponent implements OnInit {

  constructor( private fb:FormBuilder , private reportservice:ReportService , private activtedroute : ActivatedRoute) { }

  UpdateRefferForm = this.fb.group({
    hospital: new FormControl({value:'',disabled:true }, [Validators.required]),
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

  ngOnInit(): void {
     let reportId = this.activtedroute.snapshot.paramMap.get('id')
     console.warn(reportId);
     
     this.reportservice.getReport(reportId).subscribe((res)=>{
      this.UpdateRefferForm = this.fb.group({
        hospital: new FormControl(res['hospital']  , [Validators.required]),
        fathername: new FormControl(res['fathername'], [Validators.required]),
        lastname: new FormControl(res['lastname'], [Validators.required]),
        fathermno: new FormControl(res['fathermno'], [Validators.required]),
        mothername: new FormControl(res['mothername'], [Validators.required]),
        mothermno: new FormControl(res['mothermno'], [Validators.required]),
        email: new FormControl(res['email'], [Validators.required]),
        bbdate: new FormControl(res['bbdate'], [Validators.required]),
        bgender: new FormControl(res['bgender'], [Validators.required]),
        satus: new FormControl(res['satus'], [Validators.required]),
        uploadrprt: new FormControl('', [Validators.required]),
        testdate: new FormControl(res['testdate'], [Validators.required])
      })
     })
  }

submitUpdateRefferForm(){
  console.warn(this.UpdateRefferForm.value);
  
}
}
