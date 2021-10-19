import { PostBuilder } from "./post.builder";
import faker from "faker"

export class PostManager {
    
    static randomPost() {
        return new PostBuilder()
            .setBody(faker.lorem.paragraph())
            .setTitle(faker.lorem.sentence())
            .build()
    }

    static emptyPost() {
        return new PostBuilder().build()
    }
}