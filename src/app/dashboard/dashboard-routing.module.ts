import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultDashboardComponent } from './default/default-dashboard.component';
import { EcommerceDashboardComponent } from './e-commerce/e-commerce-dashboard.component';
import { ProjectsDashboardComponent } from './projects/projects-dashboard.component';
import { CrmDashboardComponent } from './crm/crm-dashboard.component';
import { AuthGuard } from '../shared/guard/auth.guard';
// import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultDashboardComponent,
        canActivate:[AuthGuard],
        data: {
            title: 'Dashboard ',
            headerDisplay: "none"
        }
    },
    {
        path: 'e-commerce',
        component: EcommerceDashboardComponent,
        data: {
            title: 'E-Commerce Dashboard ',
            headerDisplay: "none"
        }
    },
    {
        path: 'projects',
        component: ProjectsDashboardComponent,
        data: {
            title: 'Projects Dashboard ',
            headerDisplay: "none"
        }
    },
    {
        path: 'crm',
        component: CrmDashboardComponent,
        data: {
            title: 'CRM',
            headerDisplay: "none"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
