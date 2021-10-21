import {Given, When, Then} from "@cucumber/cucumber";
import {UserManager} from "../../models/domain/users/user.manager";
import {ApiClient} from "../../api/requests/api.client";

Given('I am a common user', function () {
    this.user = UserManager.commonUser()
    this.api = new ApiClient(this.user)
})

Given('I create a user for post', async function () {
    this.response = await this.api.users.create(this.user)
    this.user.id = this.response.body.data.id
})

When('I get list of users', async function () {
    this.response = await this.api.users.getList()
})