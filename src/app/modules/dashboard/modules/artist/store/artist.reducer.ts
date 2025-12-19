import { createReducer, on } from '@ngrx/store';
import { TGetArtist } from '../api/get-artist';
import * as ArtistActions from './artist.actions';

export interface ArtistState {
    artist: TGetArtist | null;
    loading: boolean;
    error: any | null;
}

export const initialState: ArtistState = {
    artist: null,
    loading: false,
    error: null,
};

export const artistReducer = createReducer(
    initialState,
    on(ArtistActions.loadArtist, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(ArtistActions.loadArtistSuccess, (state, { artist }) => ({
        ...state,
        artist,
        loading: false,
    })),
    on(ArtistActions.loadArtistFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false,
    }))
);
