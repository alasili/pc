import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http/http.service';

@Component({
    selector: 'bee-footer',
    templateUrl: './bee-footer.component.html',
    styleUrls: ['./bee-footer.component.scss']
})
export class BeeFooterComponent implements OnInit {

    site: any;
    loading = false;

    constructor(private http: HttpService) {
    }

    ngOnInit() {
        this.getSite();
    }

    getSite(): void {
        const params = {
            url: 'api.php/cms/site',
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.site = res.data;
                this.loading = true;
            }
        });
    }

}
