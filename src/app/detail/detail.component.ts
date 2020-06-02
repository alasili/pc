import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http/http.service';
import {ActivatedRoute} from '@angular/router';
import Config from '../config';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    host = Config.host;
    data: any;
    loading = false;
    parentData: any;
    parentLoading = false;

    constructor(private http: HttpService,
                private route: ActivatedRoute) {
        this.route.queryParams.subscribe(res => {
            this.getParent(res.pid);
            this.getDetail(res.id);
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

    getDetail(event: any) {
        const params = {
            url: `api.php/content/${event}`,
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                const data = res.data;
                data.content = data.content.replace(/src=["]/g, `src="${this.host}`);
                this.data = data;
                this.loading = true;
            }
        });
    }

}
