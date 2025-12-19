import { createAction, props } from '@ngrx/store';
import { TGetArtist } from '../api/get-artist';

export const loadArtist = createAction(
    '[Artist Page] Load Artist',
    props<{ id: string }>()
);

export const loadArtistSuccess = createAction(
    '[Artist Page] Load Artist Success',
    props<{ artist: TGetArtist }>()
);

export const loadArtistFailure = createAction(
    '[Artist Page] Load Artist Failure',
    props<{ error: any }>()
);
