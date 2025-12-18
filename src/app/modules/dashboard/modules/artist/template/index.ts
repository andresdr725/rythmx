import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiGetArtist } from "../api/get-artist";

@Component({
    selector: 'artist-page',
    standalone: true,
    templateUrl: 'index.html',
    providers: [ApiGetArtist]
})

export default class ArtistPage {
    private readonly _apiGetArtist = inject(ApiGetArtist);
    private readonly route = inject(ActivatedRoute);
    artist_id = this.route.snapshot.paramMap.get('id');

    // constructor() {
    //     console.log("ID recibido:", this.artist_id);
    // }

    protected _getArtist() {
        this._apiGetArtist.getArtist(this.artist_id).then((data) => {
            console.log(data);
        });
    }
}