export interface Response<T> {
    status: number;
    error?: string;
    message?: string;
    data?: T | null;
}
