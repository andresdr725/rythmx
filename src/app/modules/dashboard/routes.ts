import type { Routes } from '@angular/router'

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
            }
        ]
    },
]