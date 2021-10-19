require('dotenv').config()

export abstract class Config {
    public static apiUrl: string = process.env.API_URL || ''
    public static token: string = process.env.TOKEN || ''
}