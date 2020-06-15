import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-vr',
    templateUrl: './vr.component.html',
    styleUrls: ['./vr.component.scss']
})
export class VrComponent implements OnInit {

    vrUrl: string;

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(res => {
            this.vrUrl = res.url;
        });
    }

    ngOnInit() {
    }

}
