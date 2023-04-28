import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OAEReportRoutingModule } from './oae-report-routing.module';
import { zorroModule } from '../zorro.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OAEReportRoutingModule,
    zorroModule
  ]
})
export class OAEReportModule { }
