import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BeeNavComponent} from './bee-nav/bee-nav.component';
import {BeeFooterComponent} from './bee-footer/bee-footer.component';
import {NzDropDownModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import { BeeCardComponent } from './bee-card/bee-card.component';


@NgModule({
    declarations: [
        BeeNavComponent,
        BeeFooterComponent,
        BeeCardComponent
    ],
    imports: [
        CommonModule,
        NzDropDownModule,
        RouterModule
    ],
    exports: [
        BeeNavComponent,
        BeeFooterComponent,
        BeeCardComponent
    ]
})
export class ComponentModule {
}
