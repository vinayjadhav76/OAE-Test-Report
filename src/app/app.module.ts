import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { registerLocaleData, PathLocationStrategy, LocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { ReportFormComponent } from './OAE-Report/report-form/report-form.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { zorroModule } from '../app/zorro.module'
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { PassReportGridComponent } from './OAE-Report/pass-report-grid/pass-report-grid.component';
import { RefferReportGridComponent } from './OAE-Report/reffer-report-grid/reffer-report-grid.component';
import { FortyEightReportGridComponent } from './OAE-Report/forty-eight-report-grid/forty-eight-report-grid.component';
import { DischargeReportGridComponent } from './OAE-Report/discharge-report-grid/discharge-report-grid.component';
import { FiftysixReportGridComponent } from './OAE-Report/fiftysix-report-grid/fiftysix-report-grid.component';
import { PassReportAddComponent } from './OAE-Report/pass-report-add/pass-report-add.component';
import { RefferReportAddComponent } from './OAE-Report/reffer-report-add/reffer-report-add.component';
import { FortyEightReportAddComponent } from './OAE-Report/forty-eight-report-add/forty-eight-report-add.component';
import { DischargeReportAddComponent } from './OAE-Report/discharge-report-add/discharge-report-add.component';
import { FiftysixReportAddComponent } from './OAE-Report/fiftysix-report-add/fiftysix-report-add.component';


registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        FullLayoutComponent,
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
        FiftysixReportAddComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NzBreadCrumbModule,
        TemplateModule,
        SharedModule,
        NgChartjsModule,
        FormsModule,
        ReactiveFormsModule,
        zorroModule,
        UserModule,
        HttpClientModule,
        
    ],
    providers: [
        { 
            provide: NZ_I18N,
            useValue: en_US, 
        },
        {
            provide: LocationStrategy, 
            useClass: PathLocationStrategy
        },
        ThemeConstantService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
