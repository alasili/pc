import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import Config from '../config';

@Directive({
    selector: '[appImageUrl]'
})
export class ImageUrlDirective implements OnChanges {

    host = Config.host;

    @Input() appImageUrl: string;

    constructor(private el: ElementRef) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.appImageUrl && changes.appImageUrl.currentValue) {
            let data = changes.appImageUrl.currentValue;
            data = data.replace(/src=["]/g, `src="${this.host}`);
        }
    }

}
