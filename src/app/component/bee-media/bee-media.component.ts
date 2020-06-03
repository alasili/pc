import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {VgAPI} from 'videogular2/compiled/src/core/services/vg-api';

@Component({
    selector: 'bee-media',
    templateUrl: './bee-media.component.html',
    styleUrls: ['./bee-media.component.scss'],
})
export class BeeMediaComponent implements OnInit, OnChanges {

    @ViewChild('controls', {static: false}) controls;

    @Input()
    url: string;

    @Input()
    cover: string;

    @Input()
    autoplay = false;

    @Output() onPlayer: EventEmitter<any> = new EventEmitter();

    play = false;
    api: VgAPI;
    fullStatus = false;

    speedBottom = '-50px';
    backgroundImage = `url("../../../assets/media/icon-full.svg")`;

    poster = '../../../assets/icon/logo.svg';

    constructor() {
    }

    ngOnInit() {
    }

    onPlayerReady(api: VgAPI): void {
        this.onPlayer.emit(api);

        api.fsAPI.onChangeFullscreen.subscribe(res => {
            if (res) {
                if (res !== this.fullStatus) {
                    this.fullStatus = res;
                }
            } else {
                if (res !== this.fullStatus) {
                    this.fullStatus = res;
                }
            }
        });

        api.subscriptions.ended.subscribe(res => {
            this.speedBottom = '-50px';
        });

        api.subscriptions.timeUpdate.subscribe(res => {
            if (this.controls.hideControls) {
                this.speedBottom = '50px';
            } else {
                this.speedBottom = '-50px';
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.autoplay) {
            this.play = true;
        }
    }
}
