import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
    exports: [
        NzFormModule,
        NzGridModule,
        NzSelectModule,
        NzCardModule,
        NzInputModule,
        NzButtonModule,
        NzTableModule,
        NzDropDownModule,
        NzIconModule,
        NzPaginationModule
    ]
})

export class zorroModule { }