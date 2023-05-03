import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-reffer-report-grid',
  templateUrl: './reffer-report-grid.component.html',
  styleUrls: ['./reffer-report-grid.component.css']
})
export class RefferReportGridComponent implements OnInit {

refferList:[]=[]

  constructor( private reportservice:ReportService ) { }

  ngOnInit(): void {
this.reportservice.listRefferReport().subscribe((res:any)=>{
this.refferList = res
})

  }

}
