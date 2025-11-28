import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ICard } from "@dashboard/modules/home/interfaces/card";

@Component({
    selector: 'card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'card.html',
})
export default class Card {

    @Input() data: ICard[] = [];
}