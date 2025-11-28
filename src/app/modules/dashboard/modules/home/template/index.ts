import { Component } from "@angular/core";
import { BEST_SONGS_MOMENTS, MY_SONGS, POPULAR_PLAYLIST } from "@dashboard/common/dummys";
import Card from "../components/card/card";


@Component({
    selector: 'home-page',
    standalone: true,
    imports: [Card],
    templateUrl: 'index.html',
})

export default class HomePage {
    songs = MY_SONGS;
    bestSongsMoments = BEST_SONGS_MOMENTS;
    popularPlaylist = POPULAR_PLAYLIST;
}