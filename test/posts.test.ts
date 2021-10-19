import { UserManager } from "../models/domain/users/user.manager";
import { expect } from "chai"
import { before } from "mocha";
import {PostManager} from "../models/domain/posts/post.manager";
import {ApiClient} from "../api/requests/api.client";

const user = UserManager.commonUser()
const api = new ApiClient(user)

const post = PostManager.randomPost()

describe('User can', () => {
    before(async () => {
        user.posts.push(post)
        const response = await api.users.create(user)
        user.id = response.body.data.id
    })

    it('create a post', async () => {
        const response = await api.posts.createForUserId(post, user.id)

        expect(response.statusCode).to.eq(201)
        expect(response.body.data.id).to.be.not.null
        expect(response.headers["content-type"]).to.eq('application/json; charset=utf-8')
    })
})