import { Config } from "../../config/config";
import {User} from "../../models/domain/users/user";
import {UsersRequest} from "./users.request";
import {PostsRequest} from "./posts.request";

export class ApiClient {
    private baseUrl = Config.apiUrl
    private readonly user

    users = new UsersRequest(this)
    posts = new PostsRequest(this)

    constructor(user: User) {
        this.user = user
    }

    public getUser(): User {
        return this.user
    }

    public getBaseUrl(): string {
        return this.baseUrl
    }
}