import type { Options, Method, Response } from "got";
import got from "got";
import {User} from "../models/domain/users/user";
import {HttpResponse} from "./http.response";

export class HttpRequest {
    private options: any = {
        responseType: 'json'
    }

    public withUrl(url: string | URL): this {
        this.options.url = url
        return this
    }

    public withMethod(method: Method): this {
        this.options.method = method
        return this
    }

    withHeaders(headers: Record<string, string | string[] | undefined>) {
        this.options.headers = {
            ...this.options.headers,
            headers
        }
        return this
    }

    authorizedBy(user: User): this {
        this.options.headers = {
            ...this.options.headers,
            "Authorization": `Bearer ${user.token}`
        }
        return this
    }

    public withQueryParams(params: Options['searchParams']): this {
        this.options.searchParams = params
        return this
    }

    public withBody(body: any): this {
        if (body != null) {
            this.options.json = body
        }
        return this
    }

    public send() {
        this.logRequest()
        return got(this.options)
            .then(res => {
                this.logResponse(res)
                return res
            })
            .then(res => {
                console.log(res)
                return new HttpResponse(res.statusCode, res.headers, res.body)
            })
            .catch(err => {
                this.logResponse(err.response)
                return new HttpResponse(err.response.statusCode, err.response.headers, err.response.body)
            })
    }

    private logRequest() {
        console.log("=============== REQUEST ===============")
        console.log(this.options)
        console.log("============ END OF REQUEST ===========")
    }

    private logResponse(res: Response) {
        console.log("=============== RESPONSE ===============")
        console.log(`Status: ${res.statusCode} (${res.statusMessage})`)
        console.log("Headers:")
        console.log(res.headers)
        console.log("Body:")
        console.log(res.body)
        console.log("============ END OF RESPONSE ===========")
    }
}