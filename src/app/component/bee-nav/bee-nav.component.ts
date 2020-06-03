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
        console.log(event, 'nav.sss');
        switch (event.mcode) {
            case '1':
                break;
            case '2':
                this.handleNav2(parent, event);
                break;
            case '3':
                break;
            case '4':
                this.handleNav1(parent, event);
                break;
            case '5':
                break;
        }
    }

    handleNav1(parent: any, event: any): void {
        if (event.outlink) {
            window.open(event.outlink);
        } else {
            this.router.navigate(['/video'], {
                queryParams: {
                    pid: parent.scode,
                    id: event.scode
                }
            });
        }
    }

    handleNav2(parent: any, event: any): void {
        const bool = event.filename.includes('exhibition');
        const detail = event.filename.includes('nodetail');
        if (event.outlink) {
            window.open(event.outlink);
        } else {
            this.router.navigate(['/list'], {
                queryParams: {
                    pid: parent.scode,
                    id: event.scode,
                    type: bool ? 'exhibition' : '',
                    detail: detail ? 'nodetail' : ''
                }
            });
        }
    }

    logoClikc(): void {
        this.router.navigate(['/home']);
    }
}
