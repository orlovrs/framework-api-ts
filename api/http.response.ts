import { IncomingHttpHeaders } from "http";

export class HttpResponse {
    body: any
    statusCode: number
    headers: IncomingHttpHeaders
    request: any

    constructor(request: any, statusCode: number, headers: IncomingHttpHeaders, body: any) {
        this.request = request
        this.statusCode = statusCode
        this.headers = headers
        this.body = body
    }
}