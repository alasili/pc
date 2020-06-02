import {Component, Input, OnInit} from '@angular/core';
import Config from '../../config';

@Component({
    selector: 'bee-card',
    templateUrl: './bee-card.component.html',
    styleUrls: ['./bee-card.component.scss']
})
export class BeeCardComponent implements OnInit {

    @Input()
    height = '';

    @Input()
    title = '';

    @Input()
    description = '';

    @Input()
    full = false;

    @Input()
    position = 'left';

    @Input()
    cover = '';

    host = Config.host;

    constructor() {
    }

    ngOnInit() {
    }

}
