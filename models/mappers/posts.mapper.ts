import Post from "../domain/posts/post";
import {PostPostRequestDto} from "../dtos/posts/post/post.post.request.dto";

export class PostsMapper {
    static toPostDto(entity: Post, userId: number): PostPostRequestDto {
        const dto = new PostPostRequestDto()
        dto.title = entity.title
        dto.body = entity.body
        dto.user_id = userId
        return dto
    }
}