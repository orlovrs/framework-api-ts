import { HttpRequest } from "../http.request";
import { ApiClient } from "./api.client";
import { User } from "../../models/domain/users/user";
import {UsersMapper} from "../../models/mappers/users.mapper";

export class UsersRequest {
    client: ApiClient

    constructor(client: ApiClient) {
        this.client = client
    }

    async getList() {
        return await new HttpRequest()
            .withUrl(`${this.client.getBaseUrl()}/users`)
            .withMethod('GET')
            .authorizedBy(this.client.getUser())
            .send()
        }

    async create(user: User) {
        return await new HttpRequest()
            .withUrl(`${this.client.getBaseUrl()}/users`)
            .withMethod('POST')
            .withBody(UsersMapper.toPostDto(user))
            .authorizedBy(this.client.getUser())
            .send()
    }
}