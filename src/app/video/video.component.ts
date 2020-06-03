import {Component, OnInit} from '@angular/core';
import Config from '../config';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../service/http/http.service';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    host = Config.host;
    page = 1;
    limit = 10;
    total = 0;
    condition: any;
    loading = true;
    data = [];

    pid: any;
    parentData: any;
    parentLoading = false;

    type = '';
    detail = '';

    playSelect = '0';

    constructor(private router: Router,
                private http: HttpService,
                private route: ActivatedRoute) {
        this.route.queryParams.subscribe(res => {
            this.condition = res.id;
            this.pid = res.pid;
            this.type = res.type;
            this.detail = res.detail;
            this.parentLoading = false;
            this.getParent(res.pid);
            this.getData();
        });
    }

    ngOnInit() {
    }

    getParent(event: any) {
        const param = {
            url: `api.php/cms/sort/scode/${event}`
        };
        this.http.get(param).subscribe(res => {
            if (res.code === 1) {
                this.parentData = res.data;
                this.parentLoading = true;
            }
        });
    }

    getData(): void {
        this.data = [];
        const param = {
            url: `api.php/list/${this.condition}/page/${this.page}/num/${this.limit}`,
            data: {}
        };
        this.http.get(param).subscribe(res => {
            if (res.code === 1) {
                this.data = res.data;
                this.total = res.rowtotal;
            }
            this.loading = false;
        });
    }

    pageChange(event: number): void {
        this.page = event;
        this.loading = true;
        this.getData();
    }

    limitChange(event: number): void {
        this.limit = event;
        this.loading = true;
        this.getData();
    }

    itemClikc(event: any): void {
        this.playSelect = event.id;
    }

}
