import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistLoaderComponent } from "../components/loader/loader.component";
import { Store } from "@ngrx/store";
import * as ArtistActions from "../store/artist.actions";
import { selectArtist, selectIsLoading } from "../store/artist.selectors";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'artist-page',
    standalone: true,
    imports: [
        ArtistLoaderComponent,
        CommonModule
    ],
    templateUrl: 'index.html'
})

export default class ArtistPage {
    private readonly route = inject(ActivatedRoute);
    private readonly store = inject(Store);

    artist$ = this.store.select(selectArtist);
    loading$ = this.store.select(selectIsLoading);

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const id = params['id'];
            console.log("ID recibido:", id);
            if (id) {
                this.store.dispatch(ArtistActions.loadArtist({ id }));
            }
        });
    }
}