import { Model, Schema, model } from "mongoose";
import { ITest } from "./testR.interface";

const testRSchema : Schema<ITest> = new Schema({
    name: {
        type: String,
        required: true
    }
});


export const Test : Model<ITest> = model<ITest>('Test', testRSchema)