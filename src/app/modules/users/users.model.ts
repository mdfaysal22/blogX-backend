import { Model, Schema, model } from "mongoose";
import { IUser } from "./users.interface";

const userSchema : Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    role: {
        type: String,
        default: 'user'
    }
});




export const User : Model<IUser> = model<IUser>("User", userSchema);





