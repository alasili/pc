import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {HttpService} from '../service/http/http.service';
import Config from '../config';
import {Router} from '@angular/router';

declare let $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    host = Config.host;
    data = [];
    list = [];
    about: any;
    loading = false;
    newLeft = '-120%';
    noticeRight = '120%';
    aboutScale = 'scale(0)';

    noticeLoading = false;
    noticeData: any;

    trafficLoading = false;
    trafficData: any;

    timeLoading = false;
    timeData: any;

    collection = [];
    collectionIndex = 0;
    collectionAni: any;

    exhibition = [];

    collectionTransform = 'rotate(0deg) scale(0)';
    exhibitionTransform = 'scale(0)';

    constructor(private http: HttpService,
                private cdr: ChangeDetectorRef,
                private router: Router) {
        this.jqueryPage();
    }

    ngOnInit() {
        this.getBanner();
        this.getAbout();
        this.getRecommend();
        this.getNotice();
        this.getTraffic();
        this.getTime();
        this.getCollection();
        this.getExhibition();
    }

    ngOnDestroy(): void {
        $.fn.fullpage.destroy('all');
    }

    jqueryPage() {
        const that = this;
        $(() => {
            $('#fullpage').fullpage({
                navigation: true,
                verticalCentered: false,
                navigationColor: '#c28d3d',
                loopBottom: true,
                paddingTop: 150,

                afterLoad: (anchorLink, index) => {

                    // if (index === 2) {
                    //     that.aboutScale = 'scale(1)';
                    // }

                    if (index === 2) {
                        that.newLeft = '0';
                    }

                    if (index === 3) {
                        that.collectionTransform = 'rotate(360deg) scale(1)';
                    }

                    if (index === 4) {
                        that.exhibitionTransform = 'scale(1)';
                    }

                    if (index === 5) {
                        that.noticeRight = '0';
                    }
                },

                onLeave: (index, direction) => {

                    // if (index === 2) {
                    //     that.aboutScale = 'scale(0)';
                    // }

                    if (index === 2) {
                        that.newLeft = '-120%';
                    }

                    if (index === 3) {
                        that.collectionTransform = 'rotate(0deg) scale(0)';
                    }

                    if (index === 4) {
                        that.exhibitionTransform = 'scale(0)';
                    }

                    if (index === 5) {
                        that.noticeRight = '-120%';
                    }
                }
            });
        });
    }

    getBanner() {
        const params = {
            url: 'api.php/cms/slide/gid/1',
            data: {}
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.data = res.data;
            }
        });
    }

    getAbout(): void {
        const params = {
            url: 'api.php/about/1',
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.about = res.data;
                this.loading = true;
            }
        });
    }

    getRecommend(): void {
        const params = {
            url: 'api.php/cms/search',
            data: 'isrecommend=1'
        };
        this.http.post(params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        }).subscribe(res => {
            if (res.code === 1) {
                this.list = res.data;
            }
        });
    }

    itemClikc(event: any): void {
        this.router.navigate(['/detail'], {queryParams: {id: event.id}});
    }

    getNotice() {
        const params = {
            url: `api.php/about/25`,
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.noticeData = res.data;
                this.noticeLoading = true;
            }
        });
    }

    newsClikc(): void {
        this.router.navigate(['/list'], {queryParams: {pid: 12, id: 19}});
    }

    getCollection() {
        const params = {
            url: `api.php/cms/search`,
            data: 'scode=28'
        };
        this.http.post(params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        }).subscribe(res => {
            if (res.code === 1 && res.data.length) {
                const arr = res.data[0].pics.split(',');
                this.collection = arr;
                this.cdr.detectChanges();

                this.collectionAni = setInterval(() => {
                    if (this.collectionIndex < this.collection.length - 1) {
                        this.collectionIndex += 1;
                    } else {
                        this.collectionIndex = 0;
                    }
                }, 3000);
            }
        });
    }

    getExhibition() {
        const params = {
            url: `api.php/list/29/page/1/num/4`
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.exhibition = res.data;
            }
        });
    }

    exhibitionClikc(): void {
        this.router.navigate(['/list'], {queryParams: {pid: 13, id: 29, type: 'exhibition'}});
    }

    getTraffic() {
        const params = {
            url: `api.php/about/24`,
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.trafficData = res.data;
                this.trafficLoading = true;
            }
        });
    }

    getTime() {
        const params = {
            url: `api.php/about/23`,
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.timeData = res.data;
                this.timeLoading = true;
            }
        });
    }

}
