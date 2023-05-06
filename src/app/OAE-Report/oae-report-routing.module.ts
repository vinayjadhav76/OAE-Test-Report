import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassReportAddComponent } from './pass-report-add/pass-report-add.component';
import { PassReportGridComponent } from './pass-report-grid/pass-report-grid.component';
import { RefferReportAddComponent } from './reffer-report-add/reffer-report-add.component';
import { RefferReportGridComponent } from './reffer-report-grid/reffer-report-grid.component';
import { FortyEightReportAddComponent } from './forty-eight-report-add/forty-eight-report-add.component';
import { FortyEightReportGridComponent } from './forty-eight-report-grid/forty-eight-report-grid.component';
import { DischargeReportAddComponent } from './discharge-report-add/discharge-report-add.component';
import { DischargeReportGridComponent } from './discharge-report-grid/discharge-report-grid.component';
import { FiftysixReportAddComponent } from './fiftysix-report-add/fiftysix-report-add.component';
import { FiftysixReportGridComponent } from './fiftysix-report-grid/fiftysix-report-grid.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { RefferUpdateComponent } from './reffer-update/reffer-update.component';

const routes: Routes = [
  {
    path:'OAE-form',
    component:ReportFormComponent
  },
  {
    path:'pass-add',
    component:PassReportAddComponent
  },
  {
    path:'pass-grid',
    component:PassReportGridComponent
  },
  {
    path:'reffer-add',
    component:RefferReportAddComponent
  },
  {
    path:'reffer-grid',
    component:RefferReportGridComponent
  },
  {
    path:'reffer-update/:id',
    component:RefferUpdateComponent
  },
  {
    path:'48-add',
    component:FortyEightReportAddComponent
  },
  {
    path:'48-grid',
    component:FortyEightReportGridComponent
  },
  {
    path:'discharge-add',
    component:DischargeReportAddComponent
  },
  {
    path:'discharge-grid',
    component:DischargeReportGridComponent
  },
  {
    path:'56-week-add',
    component:FiftysixReportAddComponent
  },
  {
    path:'56-week-grid',
    component:FiftysixReportGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OAEReportRoutingModule { }
