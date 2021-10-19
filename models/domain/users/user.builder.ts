import { User } from "./user";

export class UserBuilder {
    private user: User = new User()

    setToken(token: string) {
        this.user.token = token
        return this
    }

    setEmail(email: string) {
        this.user.email = email
        return this
    }

    setName(name: string): this {
        this.user.name = name
        return this
    }

    setGender(gender: string): this {
        this.user.gender = gender
        return this
    }

    setStatus(status: string): this {
        this.user.status = status
        return this
    }

    build() {
        return this.user
    }
}