import { Routes, RouterModule } from '@angular/router';

export const FullLayout_ROUTES: Routes = [
    {
        path: 'authentication',
        children: [
            {
                path:'',
                loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]

    }
];