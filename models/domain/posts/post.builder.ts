import Post from "./post";

export class PostBuilder {
    private post: Post = new Post()

    setTitle(title: string) {
        this.post.title = title
        return this
    }

    setBody(body: string) {
        this.post.body = body
        return this
    }

    build() {
        return this.post
    }
}