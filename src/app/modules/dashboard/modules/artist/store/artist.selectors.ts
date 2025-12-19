import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArtistState } from './artist.reducer';

export const selectArtistState = createFeatureSelector<ArtistState>('artist');

export const selectArtist = createSelector(
    selectArtistState,
    (state) => state.artist
);

export const selectIsLoading = createSelector(
    selectArtistState,
    (state) => state.loading
);

export const selectError = createSelector(
    selectArtistState,
    (state) => state.error
);
