import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiGetArtist, TGetArtist } from "../api/get-artist";
import { ArtistLoaderComponent } from "../components/loader/loader.component";

@Component({
    selector: 'artist-page',
    standalone: true,
    imports: [ArtistLoaderComponent],
    templateUrl: 'index.html',
    providers: [ApiGetArtist]
})

export default class ArtistPage {
    private readonly _apiGetArtist = inject(ApiGetArtist);
    private readonly route = inject(ActivatedRoute);

    artist_id: string | null = null;
    artist: TGetArtist | null = null;
    loading: boolean = true;

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.artist_id = params['id'];
            console.log("ID recibido:", this.artist_id);
            this._getArtist();
        });
    }

    protected _getArtist() {
        this.loading = true;
        this._apiGetArtist.getArtist(this.artist_id)
            .then((data) => {
                if (data.songs && data.songs.length > 0) {
                    console.log("SONG THUMBNAIL -> ", data.songs[0].thumbnail);
                }
                this.artist = data;
            })
            .catch((error) => {
                console.error("Error fetching artist:", error);
            })
            .finally(() => {
                this.loading = false;
            });
    }
}