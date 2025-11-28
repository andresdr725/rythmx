export interface ISidebarItems {
    label: string;
    icon?: string;
    icon_selected?: string;
    alt?: string;
    path: string;
}

export const SIDEBAR_OPTIONS: ISidebarItems[] = [
    {
        label: 'Home',
        icon: '/svgs/home.svg',
        icon_selected: '/svgs/home-selected.svg',
        alt: 'home-icon',
        path: '/',
    },
    {
        label: 'Songs',
        icon: '/svgs/song.svg',
        icon_selected: '/svgs/song-selected.svg',
        alt: 'song-icon',
        path: '/songs',
    },
    {
        label: 'Playlists',
        icon: '/svgs/playlist.svg',
        icon_selected: '/svgs/playlist-selected.svg',
        alt: 'playlist-icon',
        path: '/playlists',
    },
];
