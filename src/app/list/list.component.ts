import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../service/http/http.service';
import Config from '../config';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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

    constructor(private router: Router,
                private http: HttpService,
                private route: ActivatedRoute) {
        this.route.queryParams.subscribe(res => {
            this.condition = res.id;
            this.pid = res.pid;
            this.type = res.type;
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
        this.router.navigate(['/detail'], {queryParams: {pid: this.pid, id: event.id}});
    }

}
