import {When} from "@cucumber/cucumber";
import {PostManager} from "../../models/domain/posts/post.manager";

When('this user creates a post', async function () {
    this.post = PostManager.randomPost()
    this.response = await this.api.posts.createForUserId(this.post, this.user.id)
})
