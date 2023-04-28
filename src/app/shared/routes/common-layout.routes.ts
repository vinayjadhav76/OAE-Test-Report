import { Routes } from '@angular/router';
import { ComponentsComponent } from '../../components/components.component'
import { ReportFormComponent } from 'src/app/OAE-Report/report-form/report-form.component';

export const CommonLayout_ROUTES: Routes = [

    //Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
   
    //Apps
    {
        path: 'apps',
        data: {
            title: 'Apps'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../apps/apps.module').then(m => m.AppsModule)
            },
        ]
    },

    //Component
    {
        path: 'demo',
        component: ComponentsComponent,
        children: [
            {
                path: '',
                redirectTo: '/components/affix',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
            }
        ],
        data: {
            title: 'Components '
        }
    },

    // Charts
    {
        path: 'charts',
        data: {
            title: 'Charts'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsModule)
            },
        ]
    },

    //Pages
    {
        path: 'pages',
        data: {
            title: 'Pages '
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
            },
        ]
    },
    {
        path: 'user',
        data: {
            title: 'User'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../user/user.module').then(m => m.UserModule)
            },
        ]
    },
    {
        path: 'OAE-Report',
        data: {
            title: 'OAE-Report'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('../../OAE-Report/oae-report.module').then(m=>m.OAEReportModule)
            },
        ]
    },
    // {
    //     path: 'report-form',
    //     component: ReportFormComponent
    // },
    // {
    //     path: 'user/user-grid',
    //     component: UserGridComponent
    // },
    // {
    //     path: 'add-user',
    //     component: AddUserComponent
    // },
];