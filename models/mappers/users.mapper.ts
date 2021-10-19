import {User} from "../domain/users/user";
import {PostUserRequestDto} from "../dtos/users/post/post.user.request.dto";

export class UsersMapper {
    static toPostDto(entity: User): PostUserRequestDto {
        const dto = new PostUserRequestDto()
        dto.email = entity.email
        dto.name = entity.name
        dto.gender = entity.gender
        dto.status = entity.status
        return dto
    }
}