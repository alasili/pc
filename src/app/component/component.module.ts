import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VgOverlayPlayModule} from 'videogular2/compiled/src/overlay-play/overlay-play';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {VgControlsModule} from 'videogular2/compiled/src/controls/controls';
import {VgBufferingModule} from 'videogular2/compiled/src/buffering/buffering';
import {VgStreamingModule} from 'videogular2/compiled/src/streaming/streaming';

import {BeeNavComponent} from './bee-nav/bee-nav.component';
import {BeeFooterComponent} from './bee-footer/bee-footer.component';
import {NzDropDownModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {BeeCardComponent} from './bee-card/bee-card.component';
import {BeeMediaComponent} from './bee-media/bee-media.component';


@NgModule({
    declarations: [
        BeeNavComponent,
        BeeFooterComponent,
        BeeCardComponent,
        BeeMediaComponent
    ],
    imports: [
        CommonModule,
        VgOverlayPlayModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule,
        VgStreamingModule,
        NzDropDownModule,
        RouterModule
    ],
    exports: [
        BeeNavComponent,
        BeeFooterComponent,
        BeeCardComponent,
        BeeMediaComponent
    ]
})
export class ComponentModule {
}
