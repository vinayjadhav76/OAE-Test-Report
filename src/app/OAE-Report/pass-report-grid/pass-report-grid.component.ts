import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-pass-report-grid',
  templateUrl: './pass-report-grid.component.html',
  styleUrls: ['./pass-report-grid.component.css']
})
export class PassReportGridComponent implements OnInit {

passReports:[]=[];

  constructor( private reportservice:ReportService ) { }

  ngOnInit(): void {
    this.reportservice.listReport().subscribe((res:any)=>{
// console.warn(res);
this.passReports = res;
    })
  }

}
