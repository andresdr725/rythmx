import { CommonModule, isPlatformBrowser } from "@angular/common";
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild, PLATFORM_ID, Inject } from "@angular/core";
import { ICard } from "@dashboard/modules/home/interfaces/card";
import { register } from 'swiper/element/bundle';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from "swiper/types";

register();

@Component({
    selector: 'card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'card.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class Card implements AfterViewInit {

    @Input() data: ICard[] = [];
    @Input() config: SwiperOptions = {};

    @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngAfterViewInit(): void {

        if (!isPlatformBrowser(this.platformId)) return;
        setTimeout(() => {
            Object.assign(this.swiper.nativeElement, this.config);
            this.swiper.nativeElement.initialize();
        })
    }
}