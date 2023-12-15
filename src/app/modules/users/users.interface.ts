import { Model } from "mongoose"

export type IUser = {
    name: string,
    email: string,
    password: string,
    role: Role
}

enum Role {
    Admin,
    User,
    Blogger
}

export type usersModel = Model<IUser, Record<string , unknown>>