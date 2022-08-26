export interface Response {
    headers: Record<string, string>;
    statusCode: number;
    data: Record<string, any>;
}
