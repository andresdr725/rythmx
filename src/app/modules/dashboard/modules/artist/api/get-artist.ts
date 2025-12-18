import { environment } from "@app/environments/environment";
import { HttpRequest } from "@dashboard/http/request";

export type TAlbum = {
    id: string,
    title: string,
    description: string,
    thumbnail: string,
    duration: string,
    duration_seconds: number,
    year: string,
    artists: [],
    songs_count: number,
    songs: []

}

export type TSong = {
    id: string,
    title: string,
    thumbnail: string,
    duration: string,
    duration_seconds: number,
    artists: [],
    album: TAlbum
}

export type TGetArtist = {
    id: string,
    name: string,
    subscribers: string,
    description: string,
    views: string,
    thumbnail: string,
    count_songs: number,
    songs: TSong[],
    count_albums: number,
    albums: TAlbum[],
}

type TApiGetArtistResponse = TApi<TGetArtist>

export class ApiGetArtist extends HttpRequest {
    private readonly _url = `${environment.API_BASE_URL}${environment.API_ARTIST}`

    // constructor() {
    //     super();
    //     console.log(`API_BASE_URL -> ${environment.API_BASE_URL}`);
    //     console.log(`API_ARTIST -> ${environment.API_ARTIST}`);
    // }

    async getArtist(id: string | null) {

        try {
            const response = await this._execute<TApiGetArtistResponse>({
                path: `${this._url}?id=${id}`,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
