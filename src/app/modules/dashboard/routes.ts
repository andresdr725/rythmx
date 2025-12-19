import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { artistReducer } from './modules/artist/store/artist.reducer';
import { ArtistEffects } from './modules/artist/store/artist.effects';
import { ApiGetArtist } from './modules/artist/api/get-artist';

export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent() {
            return import('@dashboard/layout')
        },
        children: [
            // {
            //     path: '',
            //     redirectTo: '',
            //     pathMatch: 'full',
            // },
            {
                path: '',
                loadComponent() {
                    return import('@dashboard/modules/home/template')
                }
            },
            {
                path: 'songs',
                loadComponent() {
                    return import('@dashboard/modules/songs/template')
                }
            },
            {
                path: 'playlists',
                loadComponent() {
                    return import('@dashboard/modules/playlist/template')
                }
            },
            {
                path: 'artist',
                loadComponent() {
                    return import('@dashboard/modules/artist/template')
                },
                providers: [
                    provideState({ name: 'artist', reducer: artistReducer }),
                    provideEffects(ArtistEffects),
                    ApiGetArtist
                ]
            }
        ]
    },
]