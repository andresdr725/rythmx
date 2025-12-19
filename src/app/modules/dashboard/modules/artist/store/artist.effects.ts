import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, from, of } from 'rxjs';
import * as ArtistActions from './artist.actions';
import { ApiGetArtist } from '../api/get-artist';

@Injectable()
export class ArtistEffects {
    private actions$ = inject(Actions);
    private api = inject(ApiGetArtist);

    loadArtist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ArtistActions.loadArtist),
            switchMap(({ id }) =>
                from(this.api.getArtist(id)).pipe(
                    map((artist) => ArtistActions.loadArtistSuccess({ artist })),
                    catchError((error) => of(ArtistActions.loadArtistFailure({ error })))
                )
            )
        )
    );
}
