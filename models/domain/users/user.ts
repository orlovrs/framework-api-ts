import Post from "../posts/post";

export class User {
    public id: number = 0
    public token: string = ''
    public posts: Array<Post> = []
    public email: string = ''
    public name: string = ''
    public gender: string = ''
    public status: string = ''
}