import { inject } from "@angular/core";
import { Router } from "@angular/router";

export type THttpRequest = {
    path: string;
    method: 'GET' | 'POST' | 'PUT';
    headers: Record<string, string>;
    signal?: AbortSignal | null | undefined;
    responseType?: string;
    body?: any;
}

export abstract class HttpRequest {
    private readonly _router = inject(Router);

    protected async _execute<T>(args: THttpRequest) {
        const { path, ...options } = args;

        try {
            const response = await fetch(path, options);
            const result = (await response.json()) as TApi<unknown>

            if (!result.success) {
                throw {
                    name: 'ApiError',
                    message: result.message,
                    data: result.data
                };
            }

            return result as T;
        } catch (error) {
            throw error;
        }
    }

}