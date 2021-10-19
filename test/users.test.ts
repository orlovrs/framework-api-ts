import { UserManager } from "../models/domain/users/user.manager";
import { UsersRequest } from "../api/requests/users.request";
import { expect } from "chai"
import {ApiClient} from "../api/requests/api.client";

const user = UserManager.commonUser()
const api = new ApiClient(user)

describe('User can', () => {
    it('receive list of users', async () => {

        const response = await api.users.getList();

        expect(response.statusCode).to.eq(200)
        expect(response.body.data.length).to.eq(20)
        expect(response.headers["content-type"]).to.eq('application/json; charset=utf-8')
    })
})