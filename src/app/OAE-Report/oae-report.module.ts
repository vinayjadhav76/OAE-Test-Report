import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OAEReportRoutingModule } from './oae-report-routing.module';
import { zorroModule } from '../zorro.module';
import { ReportFormComponent } from './report-form/report-form.component';
import { PassReportGridComponent } from './pass-report-grid/pass-report-grid.component';
import { RefferReportGridComponent } from './reffer-report-grid/reffer-report-grid.component';
import { FortyEightReportGridComponent } from './forty-eight-report-grid/forty-eight-report-grid.component';
import { DischargeReportGridComponent } from './discharge-report-grid/discharge-report-grid.component';
import { FiftysixReportGridComponent } from './fiftysix-report-grid/fiftysix-report-grid.component';
import { PassReportAddComponent } from './pass-report-add/pass-report-add.component';
import { RefferReportAddComponent } from './reffer-report-add/reffer-report-add.component';
import { FortyEightReportAddComponent } from './forty-eight-report-add/forty-eight-report-add.component';
import { DischargeReportAddComponent } from './discharge-report-add/discharge-report-add.component';
import { FiftysixReportAddComponent } from './fiftysix-report-add/fiftysix-report-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RefferUpdateComponent } from './reffer-update/reffer-update.component';


@NgModule({
  declarations: [
    ReportFormComponent,
    PassReportGridComponent,
    RefferReportGridComponent,
    FortyEightReportGridComponent,
    DischargeReportGridComponent,
    FiftysixReportGridComponent,
    PassReportAddComponent,
    RefferReportAddComponent,
    FortyEightReportAddComponent,
    DischargeReportAddComponent,
    FiftysixReportAddComponent,
    RefferUpdateComponent
  ],
  imports: [
    CommonModule,
    OAEReportRoutingModule,
    zorroModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OAEReportModule { }
