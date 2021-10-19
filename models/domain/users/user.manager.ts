import { Config } from "../../../config/config";
import { UserBuilder } from "./user.builder";
import faker from "faker"

export class UserManager {
    
    static commonUser() {
        return new UserBuilder()
            .setEmail(faker.internet.email())
            .setName(faker.name.firstName())
            .setGender('male')
            .setStatus('active')
            .setToken(Config.token)
            .build()
    }

    static emptyUser() {
        return new UserBuilder().build()
    }
}