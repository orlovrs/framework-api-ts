import { IncomingHttpHeaders } from "http";

export class HttpResponse {
    body: any
    statusCode: number
    headers: IncomingHttpHeaders

    constructor(statusCode: number, headers: IncomingHttpHeaders, body: any) {
        this.statusCode = statusCode
        this.headers = headers
        this.body = body
    }
}