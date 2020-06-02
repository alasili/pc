import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../service/http/http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'bee-nav',
    templateUrl: './bee-nav.component.html',
    styleUrls: ['./bee-nav.component.scss']
})
export class BeeNavComponent implements OnInit {

    navid = null;
    data = [];

    constructor(private http: HttpService,
                private router: Router,
                private route: ActivatedRoute) {
        this.route.queryParams.subscribe(res => {
            this.navid = res.id;
        });
    }

    ngOnInit() {
        this.getNav();
    }

    getNav(): void {
        const params = {
            url: 'api.php/cms/nav',
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.data = res.data;
            }
        });
    }

    navChange2(): void {
        this.router.navigate(['/home']);
    }

    navChange(parent: any, event: any): void {
        this.router.navigate(['/list'], {queryParams: {pid: parent.scode, id: event.scode, type: parent.filename}});
    }

    logoClikc(): void {
        this.router.navigate(['/home']);
    }
}
