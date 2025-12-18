declare global {
    type TApi<T> = {
        success: boolean;
        message: string;
        data: T;
    }

    type TMethods = 'GET' | 'POST' | 'PUT';

    type Nullable<T> = T | null;
}

export { };