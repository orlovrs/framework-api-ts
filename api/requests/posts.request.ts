import { HttpRequest } from "../http.request";
import { ApiClient } from "./api.client";
import Post from "../../models/domain/posts/post";
import {PostsMapper} from "../../models/mappers/posts.mapper";

export class PostsRequest {
    private client: ApiClient

    constructor(client: ApiClient) {
        this.client = client
    }

    async createForUserId(post: Post, userId: number) {
        return await new HttpRequest()
            .withUrl(`${this.client.getBaseUrl()}/posts`)
            .withMethod('POST')
            .withBody(PostsMapper.toPostDto(post, userId))
            .authorizedBy(this.client.getUser())
            .send()
    }
}